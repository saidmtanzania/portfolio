import { getAllPosts } from '@/lib/posts';
import type { Metadata } from 'next';
import { BlogList } from '@/components/BlogList';

export const metadata: Metadata = {
    title: 'Blog | Saidi Hamisi',
    description: 'Writings on backend development, software architecture, and technology.',
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="flex flex-col gap-10 animate-fade-in delay-100 mb-20">
            <section className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
                <div className="absolute inset-0 pointer-events-none [background:radial-gradient(1200px_circle_at_20%_10%,color-mix(in_oklab,var(--foreground)_8%,transparent),transparent_55%)]" />
                <div className="relative flex flex-col gap-3">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tighter">Blog</h1>
                    <p className="text-muted-foreground max-w-xl">
                        Backend engineering notes, architecture patterns, and practical lessons from building production systems.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2 text-xs text-muted-foreground">
                        <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1">
                            {posts.length} posts
                        </span>
                        <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1">
                            Node.js
                        </span>
                        <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1">
                            .NET
                        </span>
                        <span className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1">
                            Distributed systems
                        </span>
                    </div>
                </div>
            </section>

            <BlogList posts={posts} />
        </div>
    );
}
