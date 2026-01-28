import type { Metadata } from 'next';
import { FileText, Briefcase, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About | Saidi Hamisi',
    description: 'Backend Software Engineer specializing in Node.js and ASP.NET Core.',
};

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-12 animate-fade-in delay-100 mb-20">
            {/* Introduction */}
            <section className="flex flex-col gap-6">
                <h1 className="text-3xl font-bold tracking-tighter">About Me</h1>
                <div className="prose dark:prose-invert text-muted-foreground leading-relaxed max-w-none">
                    <p>
                        I am a Backend-focused Software Engineer with <strong>2.5+ years</strong> of professional experience designing and building secure,
                        scalable, and production-grade APIs.
                    </p>
                    <p>
                        I currently work at <strong>DataBalk</strong> (South Africa), where I build backend services for multiple production products using Node.js.
                        My expertise lies in real-time systems, financial workflows, and multi-tenant architectures.
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

            {/* Experience Timeline */}
            <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2 flex items-center gap-2">
                    <Briefcase size={20} /> Experience
                </h2>
                <div className="flex flex-col gap-8 border-l border-border ml-2 pl-6 relative">

                    {/* Job 1 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground">Software Developer</h3>
                        <span className="text-sm text-primary">DataBalk (Franschhoek, South Africa)</span>
                        <span className="text-xs text-muted-foreground mb-2">Aug 2024 – Present</span>
                        <p className="text-sm text-muted-foreground">
                            Developing and maintaining backend services for multiple production products using Node.js.
                        </p>
                    </div>

                    {/* Job 2 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground">Software Developer (Contract)</h3>
                        <span className="text-sm">CATS-NET (Tanzania)</span>
                        <span className="text-xs text-muted-foreground mb-2">Sep 2023 – Aug 2025</span>
                        <p className="text-sm text-muted-foreground">
                            Built backend systems using ASP.NET Core, including a WhatsApp-based ticketing platform and RBAC implementations.
                        </p>
                    </div>

                    {/* Job 3 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground">IT Executive</h3>
                        <span className="text-sm">Airtel (Tanzania)</span>
                        <span className="text-xs text-muted-foreground mb-2">Dec 2023 – Aug 2024</span>
                        <p className="text-sm text-muted-foreground">
                            Monitored mobile money production systems and collaborated with engineering teams on critical alerts.
                        </p>
                    </div>

                    {/* Job 4 */}
                    <div className="flex flex-col gap-1 relative">
                        <span className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-border" />
                        <h3 className="font-semibold text-foreground">Back-End Developer</h3>
                        <span className="text-sm">iPFSoftware’s (Tanzania)</span>
                        <span className="text-xs text-muted-foreground mb-2">Aug 2022 – Nov 2022</span>
                        <p className="text-sm text-muted-foreground">
                            Built secure RESTful APIs using Node.js and automated deployment pipelines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Education */}
            <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2 flex items-center gap-2">
                    <GraduationCap size={20} /> Education
                </h2>
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">Bachelor of Science in Software Engineering</h3>
                    <span className="text-sm text-muted-foreground">University of Dodoma, Tanzania</span>
                    <span className="text-xs text-muted-foreground">2019 – 2023</span>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="flex flex-col gap-6">
                <h2 className="text-xl font-bold tracking-tight border-b border-border pb-2">Tech Stack</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Languages</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground">
                            <li>JavaScript (Node.js)</li>
                            <li>TypeScript</li>
                            <li>C# (ASP.NET Core)</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Infrastructure & DB</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground">
                            <li>PostgreSQL / MSSQL</li>
                            <li>MongoDB / Redis</li>
                            <li>Docker / AWS</li>
                            <li>GitHub Actions (CI/CD)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="font-semibold text-foreground">Frameworks</span>
                        <ul className="flex flex-col gap-2 text-muted-foreground">
                            <li>Express.js</li>
                            <li>Next.js</li>
                            <li>ASP.NET Core</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
