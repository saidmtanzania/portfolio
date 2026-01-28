import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Selected backend engineering projects: WhatsApp Integration, Housing Exchange APIs, and more.',
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-12 animate-fade-in delay-100 mb-20">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">Selected Work</h1>
                <p className="text-muted-foreground max-w-xl">
                    A selection of backend systems I have architected and built.
                    Focusing on real-time systems, multi-tenant architectures, and scalable APIs.
                </p>
            </div>

            <div className="flex flex-col gap-16">
                {/* Project 1: TCSFS */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h2 className="text-2xl font-bold tracking-tight">TCSFS WhatsApp Support Platform</h2>
                            <a
                                href="https://tcsfs-ui-main.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                                Visit Site <ExternalLink size={12} />
                            </a>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">ASP.NET Core</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">SignalR</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">WhatsApp Cloud API</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">PostgreSQL</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            A production-grade customer support platform integrating directly with WhatsApp.
                            Designed to handle real-time communication between support agents and customers via the WhatsApp Cloud API.
                        </p>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Key Features</h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li><strong className="text-foreground">Real-time Messaging</strong>: Implemented SignalR for instant message delivery and status updates to agent dashboards.</li>
                            <li><strong className="text-foreground">WhatsApp Integration</strong>: Direct integration with Meta's Cloud API for ticket creation and media handling.</li>
                            <li><strong className="text-foreground">Access Control</strong>: Granular RBAC, approval flows, and budgeting logic for corporate tenants.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                {/* Project 2: Ruilmijnwoning */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h2 className="text-2xl font-bold tracking-tight">Ruilmijnwoning Housing Exchange</h2>
                            <a
                                href="https://ruilmijnwoning.nl"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                                Visit Site <ExternalLink size={12} />
                            </a>
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">Node.js</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">Express.js</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">MySQL</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            A dedicated API service for a Dutch housing exchange platform used by tenants and housing corporations.
                            The system facilitates the matching and exchange of rental properties across the Netherlands.
                        </p>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Key Contributions</h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li><strong className="text-foreground">Secure API Architecture</strong>: Architected secure RESTful APIs to handle sensitive tenant data.</li>
                            <li><strong className="text-foreground">Query Optimization</strong>: Optimized database queries to handle complex matching algorithms between properties.</li>
                            <li><strong className="text-foreground">GDPR Compliance</strong>: Ensured GDPR compliance and secure data handling standards.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                {/* Project 3: DataBalk */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold tracking-tight">Enterprise Backend Services (DataBalk)</h2>
                        <div className="flex gap-2 text-xs flex-wrap">
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">Node.js</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">Microservices</span>
                            <span className="bg-muted text-foreground px-2 py-1 rounded-md">CI/CD</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            Currently developing and maintaining backend ecosystem for multiple production products at DataBalk.
                        </p>
                        <h3 className="text-foreground font-semibold mt-4 text-base">Key Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li><strong className="text-foreground">Shared Components</strong>: Managing shared backend components across two concurrent products.</li>
                            <li><strong className="text-foreground">Production Support</strong>: Resolving critical production issues to improve system reliability (SRE).</li>
                            <li><strong className="text-foreground">Cross-functional Collaboration</strong>: Collaborating with cross-functional teams to deliver features under tight deadlines in a dynamic environment.</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}
