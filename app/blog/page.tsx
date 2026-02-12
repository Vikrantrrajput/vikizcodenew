import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - VikizCode",
    description: "Read the latest articles on Tech Trends, AI, and Web Development.",
};

export default function BlogPage() {
    const articles = getAllArticles();

    return (
        <div className="flex min-h-screen flex-col bg-[#F3F4F6]">
            <Header />
            <main className="container mx-auto px-4 md:px-6 py-12 flex-1">
                <div className="flex flex-col space-y-4 mb-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        All Articles
                    </h1>
                    <p className="text-lg text-gray-500">
                        Explore our latest thoughts on technology and development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <ArticleCard
                            key={article.slug}
                            slug={article.slug}
                            title={article.title}
                            category={article.category}
                            readTime={article.readTime}
                            trending={article.trending}
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
