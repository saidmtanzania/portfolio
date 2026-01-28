'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/projects', label: 'Work' },
        { href: '/blog', label: 'Blog' },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm py-4"
                    : "bg-transparent py-8"
            )}
        >
            <div className="max-w-2xl mx-auto px-6 flex justify-between items-center text-sm font-medium">
                <Link
                    href="/"
                    className={cn(
                        "font-extrabold tracking-tighter transition-all duration-300",
                        isScrolled ? "text-lg" : "text-xl scale-105 origin-left"
                    )}
                >
                    Saidi M.
                </Link>
                <nav className="flex gap-4 sm:gap-6 text-muted-foreground">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "transition-colors hover:text-foreground hover:bg-muted/50 px-3 py-1.5 rounded-md",
                                pathname === link.href ? "text-foreground bg-muted/50" : ""
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
