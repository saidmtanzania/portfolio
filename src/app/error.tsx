'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4 text-center animate-fade-in">
            <h2 className="text-2xl font-bold tracking-tight">Something went wrong!</h2>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity mt-4"
            >
                Try again
            </button>
        </div>
    );
}
