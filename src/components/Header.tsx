import Link from 'next/link';

export function Header() {
    return (
        <header className="flex justify-between items-center py-8 mb-12 animate-fade-in">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                Saidi M.
            </Link>
            <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
                <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            </nav>
        </header>
    );
}
