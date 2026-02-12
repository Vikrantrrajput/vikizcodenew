import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import ArticleCard from "@/components/ArticleCard";
import EnhanceCodeBlocks from "@/components/EnhanceCodeBlocks";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface ArticlePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const articles = getAllArticles();
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        return {
            title: "Article Not Found",
        };
    }

    return {
        title: `${article.title} - VikizCode`,
        description: article.summary || `Read ${article.title} on VikizCode.`,
    };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = getArticleBySlug(slug);

    if (!article) {
        notFound();
    }

    const relatedArticles = getRelatedArticles(slug, article.category);

    return (
        <div className="flex min-h-screen flex-col bg-[#F3F4F6]">
            <Header />

            <main className="container mx-auto px-4 md:px-6 py-12 flex-1">

                {/* Breadcrumb */}
                <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <span>/</span>
                    <Link href="/blog" className="hover:text-blue-600">Blog</Link>
                    <span>/</span>
                    <span className="text-gray-900 truncate max-w-[200px]">{article.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-8 space-y-8">
                        {/* Article Header */}
                        <header className="space-y-6">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                                {article.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                {article.title}
                            </h1>
                            <div className="flex items-center justify-between border-b pb-8">
                                <div className="flex items-center gap-3">
                                    <img
                                        src="/blog-images/profile.jpg"
                                        alt="VikizCode Team"
                                        className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">VikizCode Team</p>
                                        <p className="text-xs text-gray-500">{article.date} · {article.readTime}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-gray-400">
                                    {/* Share Icons */}
                                    <button className="hover:text-blue-600 transition-colors"><span className="sr-only">Share</span>🔗</button>
                                    <button className="hover:text-blue-600 transition-colors"><span className="sr-only">Share</span>🐦</button>
                                </div>
                            </div>
                        </header>

                        {/* AI Summary Box */}
                        {article.summary && (
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <svg className="w-24 h-24 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" /></svg>
                                </div>
                                <h3 className="text-blue-900 font-bold mb-2 flex items-center gap-2">
                                    <span className="text-xl">✨</span> AI-Generated Summary
                                </h3>
                                <p className="text-blue-800 text-sm leading-relaxed relative z-10">
                                    {article.summary}
                                </p>
                            </div>
                        )}

                        {/* Article Content */}
                        <EnhanceCodeBlocks />
                        <article className="blog-content prose prose-lg max-w-none">
                            <div dangerouslySetInnerHTML={{ __html: article.content }} />
                        </article>

                        {/* GitHub Repository Button */}
                        {slug === 'how-i-built-vikizcode-using-nextjs' && (
                            <div className="mt-12 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            View Source Code
                                        </h3>
                                        <p className="text-gray-400 text-sm">Check out the complete source code for VikizCode on GitHub</p>
                                    </div>
                                    <a
                                        href="https://github.com/Vikrantrrajput/vikizcodenew"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-all flex items-center gap-2 shadow-lg hover:shadow-xl"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        )}

                        {/* Tags */}
                        <div className="pt-8 border-t flex flex-wrap gap-2">
                            <span className="text-gray-500 text-sm font-medium mr-2">Tags:</span>
                            {["#Serverless", "#TypeScript", "#AWS", "#Cloud2026"].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>

                    {/* Sidebar (Desktop TOC) */}
                    <aside className="hidden lg:block lg:col-span-4">
                        <TableOfContents items={article.toc || []} />
                    </aside>
                </div>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                    <section className="mt-20 border-t pt-12">
                        <h2 className="text-2xl font-bold mb-8">Related 2026 Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {relatedArticles.map((related) => (
                                <ArticleCard
                                    key={related.slug}
                                    slug={related.slug}
                                    title={related.title}
                                    category={related.category}
                                    readTime={related.readTime}
                                />
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
