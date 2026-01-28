import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Projects | Saidi M.',
    description: 'Selected backend engineering projects and case studies.',
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-12 animate-fade-in delay-100 mb-20">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">Selected Work</h1>
                <p className="text-muted-foreground max-w-xl">
                    A selection of backend systems I have architected and built.
                    Focusing on scalability, reliability, and performance.
                </p>
            </div>

            <div className="flex flex-col gap-16">
                {/* Project 1 */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold tracking-tight">High-Performance Webhook Ingestor</h2>
                        <div className="flex gap-2 text-xs">
                            <span className="bg-muted px-2 py-1 rounded-md">Node.js</span>
                            <span className="bg-muted px-2 py-1 rounded-md">Redis Streams</span>
                            <span className="bg-muted px-2 py-1 rounded-md">PostgreSQL</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            A fault-tolerant gateway designed to ingest and process over 500 webhooks per second from various payment providers during peak traffic events (flash sales).
                        </p>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Key Challenges</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Preventing API timeouts during traffic spikes.</li>
                            <li>Ensuring strict ordering of events for key entities.</li>
                            <li>Handling database backpressure without dropping data.</li>
                        </ul>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Solution</h3>
                        <p>
                            Decoupled the ingestion layer from the processing layer using <strong>Redis Streams</strong>.
                            The HTTP gateway acknowledges receipt immediately (202 Accepted) and pushes to Redis.
                            A separate pool of background workers consumes the stream, processing events with
                            idempotency checks to guarantee exactly-once processing effects.
                        </p>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                {/* Project 2 */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold tracking-tight">Legacy Freight API Wrapper</h2>
                        <div className="flex gap-2 text-xs">
                            <span className="bg-muted px-2 py-1 rounded-md">Express.js</span>
                            <span className="bg-muted px-2 py-1 rounded-md">SOAP/XML</span>
                            <span className="bg-muted px-2 py-1 rounded-md">Zod</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            A modern RESTful API wrapper around a 15-year old legacy SOAP/XML logistics system, enabling frontend teams to iterate faster without dealing with XML parsing or inconsistent error codes.
                        </p>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Key Challenges</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Legacy system had no documentation and frequent downtime.</li>
                            <li>Inconsistent response formats handling null/undefined.</li>
                        </ul>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Solution</h3>
                        <p>
                            Implemented a "Schema-on-Read" validation layer using <strong>Zod</strong>.
                            The wrapper validates every response from the legacy system.
                            If the legacy system returns unexpected data, the wrapper fails gracefully or returns a default,
                            protecting the frontend from runtime crashes. Also implemented aggressive caching for static data types.
                        </p>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                <section className="bg-muted/30 p-8 rounded-lg border border-border/50 flex flex-col items-center text-center gap-4">
                    <h3 className="text-xl font-semibold">Want to see more code?</h3>
                    <p className="text-sm text-muted-foreground text-center max-w-md">
                        Check out my internal case studies on system architecture and refactoring patterns.
                    </p>
                    <Link
                        href="/blog"
                        className="px-5 py-2.5 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        Read Engineering Blog
                    </Link>
                </section>
            </div>
        </div>
    );
}
