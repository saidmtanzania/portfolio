import Link from 'next/link'; // Added import for Link if needed, though this footer uses <a> tags for external links
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
    return (
        <footer className="py-12 mt-20 border-t border-dashed border-border text-center text-sm text-muted-foreground animate-fade-in delay-300">
            <div className="flex flex-col gap-6 items-center">
                <div className="flex gap-6">
                    <a href="https://github.com/saidmtanzania" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/saidmtanzania/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:saidmtanzania@gmail.com" className="hover:text-foreground transition-colors" aria-label="Email">
                        <Mail size={20} />
                    </a>
                </div>
                <p>© {new Date().getFullYear()} Saidi Hamisi. Built with Next.js & Tailwind.</p>
            </div>
        </footer>
    );
}
