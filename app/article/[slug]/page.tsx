import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TableOfContents from "@/components/TableOfContents";
import ArticleCard from "@/components/ArticleCard";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";

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

            <main className="container mx-auto px-4 md:px-6 py-6 md:py-12 flex-1">

                {/* Breadcrumb */}
                <div className="mb-4 md:mb-6 text-xs sm:text-sm text-gray-500 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/category" className="hover:text-blue-600 transition-colors truncate max-w-[120px] sm:max-w-none">{article.category}</Link>
                    <span className="hidden sm:inline">/</span>
                    <span className="text-gray-900 truncate max-w-[150px] sm:max-w-[200px] hidden sm:inline">{article.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Main Content */}
                    <article className="lg:col-span-8 space-y-6 md:space-y-8">
                        {/* Article Header */}
                        <header className="space-y-4 md:space-y-6">
                            <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs sm:text-sm font-medium text-blue-800">
                                {article.category}
                            </span>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                {article.title}
                            </h1>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-6 md:pb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">VikizCode Team</p>
                                        <p className="text-xs text-gray-500">{article.date} · {article.readTime}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-gray-400">
                                    {/* Share Icons */}
                                    <button className="hover:text-blue-600 transition-colors p-2"><span className="sr-only">Share</span>🔗</button>
                                    <button className="hover:text-blue-600 transition-colors p-2"><span className="sr-only">Share</span>🐦</button>
                                </div>
                            </div>
                        </header>

                        {/* AI Summary Box */}
                        {article.summary && (
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 md:p-6 relative overflow-hidden">
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

                        {/* Hero Image */}
                        <div className="aspect-video bg-gray-200 rounded-xl w-full"></div>

                        {/* Content */}
                        <div
                            className="prose prose-lg max-w-none text-gray-700 
                    prose-headings:text-gray-900 prose-headings:font-bold 
                    prose-a:text-blue-600 prose-img:rounded-xl
                    prose-pre:bg-gray-900 prose-pre:text-gray-50 prose-pre:rounded-lg prose-pre:p-4
                    "
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Tags */}
                        <div className="pt-6 md:pt-8 border-t flex flex-wrap gap-2">
                            <span className="text-gray-500 text-xs sm:text-sm font-medium mr-2 w-full sm:w-auto">Tags:</span>
                            {["#Serverless", "#TypeScript", "#AWS", "#Cloud2026"].map(tag => (
                                <span key={tag} className="px-2.5 sm:px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-600 hover:bg-gray-200 cursor-pointer transition-colors">
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
                    <section className="mt-12 md:mt-20 border-t pt-8 md:pt-12">
                        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Related 2026 Articles</h2>
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
