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
    const [itemsPerPage, setItemsPerPage] = useState(5); // Default for Server Side Match

    // Hydration fix + Responsive check
    useEffect(() => {
        // Check if mobile
        if (window.innerWidth < 768) {
            setItemsPerPage(3);
        } else {
            setItemsPerPage(5);
        }

        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(3);
            } else {
                setItemsPerPage(5);
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
        <div className="flex flex-col gap-8 mt-4">
            {/* Posts List */}
            <div className="flex flex-col gap-8">
                {currentPosts.length > 0 ? (
                    currentPosts.map((post) => (
                        <article key={post.slug} className="flex flex-col gap-2 animate-fade-in">
                            <Link href={`/blog/${post.slug}`} className="group">
                                <h2 className="text-xl font-semibold group-hover:underline decoration-1 underline-offset-4 decoration-muted-foreground/50">{post.title}</h2>
                            </Link>
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                <time dateTime={post.date}>{post.date}</time>
                                <span>•</span>
                                <div className="flex gap-2">
                                    {post.tags?.map(tag => (
                                        <span key={tag} className="bg-muted px-1.5 py-0.5 rounded-sm">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">
                                {post.excerpt}
                            </p>
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
