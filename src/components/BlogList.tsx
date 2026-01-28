'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import type { Post } from '@/lib/posts';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogListProps {
    posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(4); // Default for Server Side Match

    // Hydration fix + Responsive check
    useEffect(() => {
        // Check if mobile
        if (window.innerWidth < 768) {
            setItemsPerPage(3);
        } else {
            setItemsPerPage(4);
        }

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(4);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset to page 1 if window resizes and items per page changes drastically? 
    // Maybe not necessary, but good practice if total pages shrinks.

    const totalPages = Math.ceil(posts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPosts = posts.slice(startIndex, startIndex + itemsPerPage);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage(p => p + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage(p => p - 1);
    };

    return (
        <div className="flex flex-col gap-8">
            {/* Posts List */}
            <div className="grid grid-cols-1 gap-4">
                {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                        <article key={post.slug} className="animate-fade-in">
                            <Link
                                href={`/blog/${post.slug}`}
                                className={cn(
                                    "group block rounded-2xl border border-border bg-background/40 p-5 sm:p-6",
                                    "transition-all duration-200 hover:bg-muted/30 hover:shadow-sm"
                                )}
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h2 className="text-lg sm:text-xl font-semibold tracking-tight group-hover:underline decoration-1 underline-offset-4 decoration-border">
                                        {post.title}
                                    </h2>
                                    <time
                                        dateTime={post.date}
                                        className="text-xs text-muted-foreground whitespace-nowrap pt-1"
                                    >
                                        {post.date}
                                    </time>
                                </div>

                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {post.tags && post.tags.length > 0 && (
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center rounded-full border border-border bg-muted/30 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        </article>
                    ))
                ) : (
                    <p className="text-muted-foreground">No posts found.</p>
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center pt-8 border-t border-dashed border-border">
                    <button
                        onClick={goToPrev}
                        disabled={currentPage === 1}
                        className="flex items-center gap-1 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted/50 px-3 py-1.5 rounded-md transition-colors"
                    >
                        <ChevronLeft size={16} />
                        Previous
                    </button>

                    <span className="text-xs text-muted-foreground">
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={goToNext}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-1 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed hover:bg-muted/50 px-3 py-1.5 rounded-md transition-colors"
                    >
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            )}
        </div>
    );
}
