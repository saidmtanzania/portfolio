import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-center animate-fade-in">
            <h2 className="text-4xl font-bold tracking-tight">404</h2>
            <p className="text-muted-foreground">This page could not be found.</p>
            <Link
                href="/"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity mt-4"
            >
                Return Home
            </Link>
        </div>
    );
}
