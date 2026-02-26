import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Backend engineering projects including real-time systems, scalable APIs, and SaaS backend architecture.",
};

export default function ProjectsPage() {
    return (
        <div className="flex flex-col gap-12 animate-fade-in delay-100 mb-20">
            {/* Header */}
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter">Selected Work</h1>
                <p className="text-muted-foreground max-w-xl">
                    A selection of backend systems I have designed and built, focusing on
                    scalable APIs, real-time systems, and production backend reliability.
                </p>
            </div>

            <div className="flex flex-col gap-16">
                {/* Project 0: SaaS */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Multi-Tenant SaaS Backend (In Progress)
                            </h2>
                            {/* Optional: add repo link if public */}
                            <a
                                href="https://github.com/saidmtanzania/nikupangishe-backend"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                                View Repo <ExternalLink size={12} />
                            </a>
                        </div>

                        <div className="flex gap-2 text-xs flex-wrap">
                            <span className="bg-muted px-2 py-1 rounded-md">NestJS</span>
                            <span className="bg-muted px-2 py-1 rounded-md">TypeScript</span>
                            <span className="bg-muted px-2 py-1 rounded-md">PostgreSQL</span>
                            <span className="bg-muted px-2 py-1 rounded-md">Redis</span>
                            <span className="bg-muted px-2 py-1 rounded-md">Docker</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            Personal SaaS backend project built using NestJS and clean
                            architecture principles. Designed as a modular multi-tenant system
                            with authentication, RBAC, and scalable API structure.
                        </p>

                        <h3 className="text-foreground font-semibold mt-4 text-base">
                            Key Highlights
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li>JWT authentication and role-based access control (RBAC).</li>
                            <li>Modular architecture for maintainable and scalable backend design.</li>
                            <li>Redis integration for caching and performance optimization.</li>
                            <li>Dockerized development environment for production readiness.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                {/* Project 1 */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h2 className="text-2xl font-bold tracking-tight">
                                TCSFS WhatsApp Support Platform
                            </h2>
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
                            <span className="bg-muted px-2 py-1 rounded-md">ASP.NET Core</span>
                            <span className="bg-muted px-2 py-1 rounded-md">SignalR</span>
                            <span className="bg-muted px-2 py-1 rounded-md">WhatsApp Cloud API</span>
                            <span className="bg-muted px-2 py-1 rounded-md">PostgreSQL</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            Production-grade customer support platform integrating directly
                            with WhatsApp Cloud API, enabling real-time communication between
                            support teams and customers.
                        </p>

                        <h3 className="text-foreground font-semibold mt-4 text-base">
                            Key Contributions
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li>
                                Implemented real-time messaging using SignalR for instant updates
                                and agent dashboards.
                            </li>
                            <li>
                                Integrated WhatsApp Cloud API for ticket creation, messaging, and
                                media handling.
                            </li>
                            <li>
                                Designed RBAC, approval workflows, and financial logic for
                                multi-tenant corporate environments.
                            </li>
                        </ul>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                {/* Project 2 */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-baseline flex-wrap gap-2">
                            <h2 className="text-2xl font-bold tracking-tight">
                                Ruilmijnwoning Housing Exchange API
                            </h2>
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
                            <span className="bg-muted px-2 py-1 rounded-md">Node.js</span>
                            <span className="bg-muted px-2 py-1 rounded-md">Express.js</span>
                            <span className="bg-muted px-2 py-1 rounded-md">MySQL</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            Backend API for a Dutch housing exchange platform used by tenants
                            and housing corporations to securely match and exchange rental
                            properties.
                        </p>

                        <h3 className="text-foreground font-semibold mt-4 text-base">
                            Key Contributions
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li>Designed secure RESTful APIs to handle tenant and property data.</li>
                            <li>Optimized database queries for complex housing match scenarios.</li>
                            <li>Implemented secure data handling aligned with GDPR practices.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-border border-dashed" />

                {/* Project 3 */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-bold tracking-tight">
                            Enterprise Backend Services (DataBalk)
                        </h2>

                        <div className="flex gap-2 text-xs flex-wrap">
                            <span className="bg-muted px-2 py-1 rounded-md">Node.js</span>
                            <span className="bg-muted px-2 py-1 rounded-md">REST APIs</span>
                            <span className="bg-muted px-2 py-1 rounded-md">PostgreSQL</span>
                            <span className="bg-muted px-2 py-1 rounded-md">CI/CD</span>
                        </div>
                    </div>

                    <div className="prose dark:prose-invert text-sm text-muted-foreground leading-relaxed max-w-none">
                        <p>
                            Contributing to backend systems for multiple production products at
                            DataBalk, focusing on API reliability, performance, and production
                            support.
                        </p>

                        <h3 className="text-foreground font-semibold mt-4 text-base">
                            Key Contributions
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-foreground">
                            <li>Maintaining shared backend components across production systems.</li>
                            <li>Resolving complex production issues and improving system reliability.</li>
                            <li>
                                Collaborating with cross-functional teams to deliver backend features
                                and improvements.
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
}