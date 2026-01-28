import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

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
            <header className="mb-10">
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
                >
                    <ArrowLeft size={16} />
                    Back to blog
                </Link>

                <div className="mt-6 rounded-2xl border border-border bg-muted/30 p-6 sm:p-8">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                        {post.title}
                    </h1>

                    <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-2">
                            <Calendar size={16} />
                            <time dateTime={post.date}>{post.date}</time>
                        </span>

                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="inline-flex items-center rounded-full border border-border bg-background/60 px-2.5 py-1 text-[11px] font-medium text-foreground/80"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div
                className={[
                    "prose prose-zinc dark:prose-invert max-w-none",
                    "prose-headings:font-bold prose-headings:tracking-tighter",
                    "prose-headings:text-foreground prose-p:text-foreground/90 prose-p:leading-relaxed",
                    "prose-strong:text-foreground prose-li:text-foreground/90",
                    "prose-blockquote:text-foreground/80 prose-hr:border-border",
                    "prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:text-foreground",
                    "prose-code:text-foreground prose-code:before:content-[''] prose-code:after:content-['']",
                    "prose-a:decoration-border prose-a:hover:decoration-foreground/60",
                ].join(" ")}
            >
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </article>
    );
}
