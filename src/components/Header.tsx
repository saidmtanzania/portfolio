'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Threshold: 20px
            setIsScrolled(window.scrollY > 20);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                <nav className="flex gap-6 text-muted-foreground">
                    <Link href="/" className="hover:text-foreground transition-colors hover:bg-muted/50 px-3 py-1.5 rounded-md">Home</Link>
                    <Link href="/blog" className="hover:text-foreground transition-colors hover:bg-muted/50 px-3 py-1.5 rounded-md">Blog</Link>
                </nav>
            </div>
        </header>
    );
}
