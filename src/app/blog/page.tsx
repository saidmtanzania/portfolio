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
        <div className="flex flex-col gap-8 animate-fade-in delay-100 mb-20">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tighter">Blog</h1>
                <p className="text-muted-foreground">
                    Thoughts on software engineering, distributed systems, and more.
                </p>
            </div>

            <BlogList posts={posts} />
        </div>
    );
}
