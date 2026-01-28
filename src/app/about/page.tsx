import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About | Saidi M.',
    description: 'Backend Engineer philosophy, tech stack, and background.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-12 animate-fade-in delay-100 mb-20">
            {/* Introduction */}
            <section className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold tracking-tighter">About Me</h1>
                <div className="prose dark:prose-invert text-muted-foreground leading-relaxed max-w-none">
                    <p>
                        I am a Backend Engineer with a focus on building boringly reliable systems.
                        I specialize in <strong>Node.js</strong>, <strong>SQL</strong>, and distributed architecture.
                    </p>
                    <p>
                        With a background in high-throughput production environments, I prioritize data integrity,
                        maintainability, and backward compatibility over chasing the latest trends.
                        My goal is to write code that is easy to read, easy to delete, and hard to break.
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        <FileText size={16} />
                        Download CV
                    </a>
                </div>
            </section>

            {/* Philosophy / How I Work */}
            <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2">How I Work</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-2">Correctness &gt; Speed</h3>
                        <p className="text-sm text-muted-foreground">
                            I prefer code that is boring, readable, and correct over clever optimizations that are hard to debug at 3 AM.
                        </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-2">Database = Source of Truth</h3>
                        <p className="text-sm text-muted-foreground">
                            I rely on foreign keys, constraints, and ACID transactions to ensure data integrity.
                        </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-2">Code is a Liability</h3>
                        <p className="text-sm text-muted-foreground">
                            The best code is the code I didn't have to write. I aggressively prune features and unnecessary dependencies.
                        </p>
                    </div>
                    <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                        <h3 className="font-semibold mb-2">Logging with Intent</h3>
                        <p className="text-sm text-muted-foreground">
                            Logs should answer "what happened?" and "why?". I structure logs (JSON) so they are machine-queryable.
                        </p>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Backend</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground">
                            <li>Node.js</li>
                            <li>Express.js / Fastify</li>
                            <li>Go (Basic)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Database</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground">
                            <li>PostgreSQL</li>
                            <li>MSSQL</li>
                            <li>Redis</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Ops</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground">
                            <li>Docker</li>
                            <li>Nginx</li>
                            <li>CI/CD (GitHub Actions)</li>
                            <li>Linux</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
