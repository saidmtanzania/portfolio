export function Footer() {
    return (
        <footer className="py-12 mt-20 border-t border-dashed border-border text-center text-sm text-muted-foreground animate-fade-in delay-300">
            <div className="flex flex-col gap-4">
                <p>© {new Date().getFullYear()} Saidi M. Built with Next.js & Tailwind.</p>
                <div className="flex justify-center gap-6">
                    {/* Add social links here if needed */}
                    <a href="#" className="hover:text-foreground transition-colors">GitHub</a>
                    <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
                    <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
