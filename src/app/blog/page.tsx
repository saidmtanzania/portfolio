import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | Said M.',
    description: 'Writings on backend development, software architecture, and technology.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="flex flex-col gap-8 animate-fade-in delay-100">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter">Blog</h1>
                <p className="text-muted-foreground">
                    Thoughts on software engineering, distributed systems, and more.
                </p>
            </div>

            <div className="flex flex-col gap-8 mt-4">
                {posts.length > 0 ? (
                    posts.map((post) => (
                        <article key={post.slug} className="flex flex-col gap-2">
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
        </div>
    );
}
