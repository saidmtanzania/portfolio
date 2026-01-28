---
title: "Case Study: Decoupling a Monolithic Inventory Sync"
date: "2024-11-15"
excerpt: "Refactoring a brittle cron-based synchronization system into an event-driven architecture using Node.js and RabbitMQ."
tags: ["architecture", "refactoring", "case-study"]
---

## Problem

A legacy e-commerce platform relied on a single Node.js script to sync inventory levels between an on-premise MSSQL ERP and a cloud-based PostgreSQL storefront. 

The script ran every 15 minutes via cron. As the SKU count grew to 500,000+, the execution time exceeded the 15-minute window, causing overlapping execution. This led to database deadlocks, CPU spikes on the ERP, and eventually, incorrect stock levels displayed to customers.

## Constraints

- **No modifications allowed to the Legacy ERP**: We had read-only access to the MSSQL views.
- **Near real-time requirement**: Business required stock updates within 2 minutes of a change.
- **Hardware limitations**: The on-premise gateway had limited memory (4GB RAM).

## Architecture

We moved from a batch-pull model to a stream-based model with backpressure.

**Old Flow:**
`Cron -> Select * from ERP -> Diff in Memory -> Bulk Update Postgres`

**New Flow:**
1.  **Change Detection Service (Poller)**: A lightweight Node.js service polls the ERP's `LastModified` column every 30 seconds. It fetches only changed rows (cursors allowed).
2.  **Message Queue (RabbitMQ)**: Changed SKUs are pushed to a queue.
3.  **Worker Pool**: 5 consumer workers pick up SKU updates.
    - They validate the data.
    - They apply complex pricing rules.
    - They perform an upsert into PostgreSQL.

## Database & Data Handling

We utilized raw SQL for all high-throughput operations to avoid TypeORM overhead.

```sql
-- Example of the upsert logic used in Postgres
INSERT INTO inventory (sku, quantity, last_synced)
VALUES ($1, $2, NOW())
ON CONFLICT (sku) 
DO UPDATE SET 
    quantity = EXCLUDED.quantity,
    last_synced = NOW()
WHERE inventory.last_synced < EXCLUDED.last_synced;
```

*Note the `WHERE` clause: This ensures we never overwrite newer data if messages arrive out of order.*

## Key Decisions

1.  **RabbitMQ over Redis Pub/Sub**: We needed durable queues. If the worker service crashed, we couldn't afford to lose inventory updates.
2.  **Raw SQL over ORM**: The initial TypeORM implementation used too much heap memory when hydrating thousands of model instances. Switching to `pg-node` reduced memory usage by 60%.
3.  **Concurrency Limiting**: We implemented a semaphore in the poller to ensure we never overloaded the legacy ERP, regardless of the backlog size.

## Failure Scenarios Handled

- **ERP Downtime**: The poller saves the last successful `LastModified` timestamp to disk. On restart, it resumes exactly where it left off.
- **Bad Data**: If a SKU update fails validation (e.g., negative price), it is moved to a Dead Letter Queue (DLQ) for manual inspection, preventing the queue from blocking.

## Lessons Learned

- **Observability First**: We built the metrics dashboard (OpenTelemetry) *after* the first outage. It should have been built first. We were flying blind on queue depths.
- **Idempotency is cheap**: Making the consumer idempotent saved us weeks of debugging when the queue delivered duplicate messages during a network partition.
