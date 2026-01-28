# Portfolio Content Generation

## A. Selected Work

### 1. High-Performance Webhook Ingestor
**Summary**: A fault-tolerant gateway processing 500+ webhooks/second from payment providers.
- **Problem**: During flash sales, stripe/paypal webhooks would spike, overwhelming the monolith API and causing timeouts.
- **Architecture**: Separated ingestion from processing. `Node.js Gateway` -> `Redis Stream` -> `Background Workers`. 
- **Key Decision**: Used Redis Streams instead of a full Kafka setup to reduce operational complexity while maintaining ordering guarantees per-customer.
- **Trade-off**: Potential data loss if Redis persistence fails completely (accepted risk vs. cost of Kafka).

### 2. Legacy Freight API Wrapper
**Summary**: RESTful API wrapper around a SOAP/XML legacy logistics system.
- **Problem**: Frontend teams struggled to integrate with a 15-year-old SOAP service that had no documentation and inconsistent error codes.
- **Architecture**: Express.js middleware layer that acts as an immutability corruption layer. It standardizes error responses and caches frequent queries in Redis.
- **Key Decision**: Implemented "schema-on-read" validation using Zod to ensure the legacy system didn't crash the frontend with unexpected nulls.

---

## B. How I Work

1.  **Correctness > Speed**: I prefer code that is boring, readable, and correct over clever optimizations that are hard to debug at 3 AM.
2.  **Database as the Source of Truth**: Application state is transient; the database is forever. I rely on foreign keys, constraints, and ACID transactions to ensure data integrity.
3.  **Code is a Liability**: The best code is the code I didn't have to write. I aggressively prune features and dependencies.
4.  **Logging with Intent**: Logs should answer "what happened?" and "why?". I structure logs (JSON) so they are queryable.

---

## C. Blog Post Ideas

1.  **"Stop using ORMs for Batch Jobs"**
    *   *Summary*: Why the Active Record pattern destroys performance in high-throughput node.js workers and how to use streaming SQL query cursors instead.

2.  **"Handling Distributed Transactions without 2PC"**
    *   *Summary*: A practical look at the Saga pattern and how to implement eventual consistency when you can't use XA transactions.

3.  **"Idempotency Keys: The Backend Engineer's Best Friend"**
    *   *Summary*: Implementing idempotency at the API gateway layer to handle network retries safely.

4.  **"Versioning Internal APIs without Breaking Clients"**
    *   *Summary*: Strategies for evolutionary database design and API versioning (URI vs Header) in a microservices environment.

5.  **"The Hidden Costs of 'serverless' for High-Traffic APIs"**
    *   *Summary*: A cost and latency analysis of moving a high-throughput Express app to AWS Lambda, and why we moved back to containers.

6.  **"PostgreSQL Indexes: You're Probably Using Them Wrong"**
    *   *Summary*: Understanding BRIN vs B-Tree and how multi-column indexes actually work.

---

## D. Tech Stack

**Backend**
- Node.js (Typescript/Javascript)
- Express.js / Fastify
- Go (Basic proficiency)

**Databases & Storage**
- PostgreSQL (Complex queries, optimization)
- MSSQL (Legacy integration, T-SQL)
- Redis (Caching, Queues)

**Architecture & DevOps**
- Docker / Docker Compose
- Nginx (Reverse Proxy config)
- CI/CD (GitHub Actions)
- Linux (Bash scripting)
