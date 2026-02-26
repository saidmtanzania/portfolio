import type { Metadata } from "next";
import { FileText, Briefcase, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
    title: "About",
    description:
        "Backend Software Engineer specializing in Node.js (Express.js, NestJS) and ASP.NET Core, focused on scalable APIs and clean architecture.",
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-12 animate-fade-in delay-100 mb-20">
            {/* Introduction */}
            <section className="flex flex-col gap-4 sm:gap-6 text-left">
                <h1 className="text-3xl font-bold tracking-tighter">About Me</h1>

                <div className="text-muted-foreground leading-relaxed max-w-none text-base">
                    <p className="mb-4">
                        I’m a backend-focused software engineer with <strong>3+ years</strong>{" "}
                        of professional experience designing and maintaining scalable backend
                        systems and APIs using <strong>Node.js</strong>, <strong>TypeScript</strong>,{" "}
                        <strong>ASP.NET Core</strong>, and <strong>SQL</strong>.
                    </p>

                    <p className="mb-4">
                        I’ve worked with production systems across fintech, telecom, and web
                        platforms, with a strong focus on <strong>reliability</strong>,{" "}
                        <strong>performance</strong>, and <strong>clean architecture</strong>.
                    </p>

                    <p>
                        I currently contribute to production backend services at{" "}
                        <strong>DataBalk</strong>. Outside work, I’m building a{" "}
                        <strong>multi-tenant SaaS</strong> side project using{" "}
                        <strong>NestJS</strong>, applying modular design and exploring
                        scalable patterns like caching, queues, and cloud deployments.
                    </p>
                </div>

                <div className="flex items-center gap-4 mt-2">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="btn-primary flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        <FileText size={16} />
                        Download CV
                    </a>
                </div>
            </section>

            {/* Experience Timeline */}
            <section className="flex flex-col gap-6 text-left">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2 flex items-center gap-2">
                    <Briefcase size={20} /> Experience
                </h2>

                <div className="flex flex-col gap-8 border-l border-border ml-1.5 sm:ml-2 pl-4 sm:pl-6 relative">
                    {/* Job 1 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[21px] sm:-left-[30px] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground text-base sm:text-lg">
                            Software Developer
                        </h3>
                        <span className="text-sm text-primary">
                            DataBalk (Franschhoek, South Africa)
                        </span>
                        <span className="text-xs text-muted-foreground mb-2">
                            Aug 2024 – Present
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Building and maintaining backend APIs and services used across
                            multiple production products, focusing on performance, reliability,
                            and production debugging.
                        </p>
                    </div>

                    {/* Job 2 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[21px] sm:-left-[30px] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground text-base sm:text-lg">
                            Software Developer (Remote | Contract)
                        </h3>
                        <span className="text-sm">CATS-NET (Tanzania)</span>
                        <span className="text-xs text-muted-foreground mb-2">
                            Sep 2023 – Aug 2025
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Built production backend systems using ASP.NET Core, including a
                            WhatsApp-based ticketing platform, real-time messaging, and RBAC /
                            approval workflows with financial logic.
                        </p>
                    </div>

                    {/* Job 3 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[21px] sm:-left-[30px] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground text-base sm:text-lg">
                            IT Executive
                        </h3>
                        <span className="text-sm">Airtel (Tanzania)</span>
                        <span className="text-xs text-muted-foreground mb-2">
                            Dec 2023 – Aug 2024
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Supported mobile money and telecom production systems by
                            investigating alerts and transaction issues, collaborating with
                            engineering teams to maintain service reliability.
                        </p>
                    </div>

                    {/* Job 4 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[21px] sm:-left-[30px] top-1.5 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground text-base sm:text-lg">
                            Back-End Developer
                        </h3>
                        <span className="text-sm">iPFSoftware’s (Tanzania)</span>
                        <span className="text-xs text-muted-foreground mb-2">
                            Aug 2022 – Nov 2022
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            Built secure REST APIs with Node.js and JWT authentication and
                            supported deployments using GitHub Actions and AWS (EC2).
                        </p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="flex flex-col gap-6 text-left">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2 flex items-center gap-2">
                    <GraduationCap size={20} /> Education
                </h2>

                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Bachelor of Science in Software Engineering</h3>
                    <span className="text-sm text-muted-foreground">
                        University of Dodoma, Tanzania
                    </span>
                    <span className="text-xs text-muted-foreground">2019 – 2023</span>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="flex flex-col gap-6 text-left">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2">
                    Tech Stack
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-sm">
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Languages</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground list-disc list-inside sm:list-none">
                            <li>JavaScript (Node.js)</li>
                            <li>TypeScript</li>
                            <li>C# (ASP.NET Core)</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Infrastructure & DB</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground list-disc list-inside sm:list-none">
                            <li>PostgreSQL / MSSQL</li>
                            <li>MongoDB / Redis</li>
                            <li>Docker</li>
                            <li>AWS (EC2)</li>
                            <li>GitHub Actions (CI/CD)</li>
                            <li>Nginx</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Frameworks</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground list-disc list-inside sm:list-none">
                            <li>Express.js</li>
                            <li>NestJS</li>
                            <li>Next.js</li>
                            <li>ASP.NET Core</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}