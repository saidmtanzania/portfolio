import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Said M.`,
        description: post.excerpt,
    };
}

export default async function BlogPost(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="animate-fade-in delay-100 mb-20">
            <header className="flex flex-col gap-4 mb-10">
                <Link
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors w-fit mb-4 flex items-center gap-1"
                >
                    ← Back to blog
                </Link>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">{post.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <time dateTime={post.date}>{post.date}</time>
                    {post.tags && post.tags.length > 0 && (
                        <>
                            <span>•</span>
                            <div className="flex gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="bg-muted px-2 py-0.5 rounded-md text-xs">{tag}</span>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </header>

            <div className="prose prose-zinc dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tighter prose-p:leading-relaxed prose-pre:bg-muted prose-pre:border prose-pre:border-border">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    );
}
