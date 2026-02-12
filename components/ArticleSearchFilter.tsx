"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/lib/data";

interface ArticleSearchFilterProps {
    articles: Article[];
}

export default function ArticleSearchFilter({ articles }: ArticleSearchFilterProps) {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("Latest");

    const filteredArticles = articles.filter((article) => {
        const matchesFilter = filter === "All" || article.category === filter;
        const matchesSearch = article.title.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const blogs = ["All", "AI 2026", "Web Dev 2026", "App Dev 2026", "Cloud Computing", "Cybersecurity", "Startups"];

    return (
        <>
            <section className="container mx-auto px-4 md:px-6 py-3 md:py-4 sticky top-16 z-40 bg-[#F3F4F6]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F3F4F6]/60 border-b border-gray-200/50">
                <div className="flex flex-col gap-3 md:gap-4">
                    {/* Category Filters - Scrollable on mobile */}
                    <div className="relative">
                        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                            {blogs.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`inline-flex items-center justify-center rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium shadow-sm transition-colors whitespace-nowrap border flex-shrink-0 ${filter === cat
                                        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        {/* Scroll indicator gradient */}
                        <div className="absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-[#F3F4F6] to-transparent pointer-events-none md:hidden"></div>
                    </div>

                    {/* Search and Sort */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                        <div className="relative flex-1 sm:max-w-md">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="flex h-10 w-full rounded-full border border-gray-200 bg-white px-4 pl-10 text-sm shadow-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:border-transparent"
                                placeholder="Search articles, topics..."
                                type="search"
                            />
                            <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <div className="flex sm:hidden items-center justify-between text-sm">
                            <span className="text-gray-500">Sort by:</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-white font-medium text-gray-900 border border-gray-200 rounded-md px-3 py-1.5 outline-none cursor-pointer focus:ring-2 focus:ring-blue-600"
                            >
                                <option>Latest</option>
                                <option>Popular</option>
                            </select>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap">
                            <span>Sort by:</span>
                            <select
                                value={sort}
                                onChange={(e) => setSort(e.target.value)}
                                className="bg-transparent font-medium text-gray-900 border-none outline-none cursor-pointer focus:ring-0"
                            >
                                <option>Latest</option>
                                <option>Popular</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-6 py-6 md:py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                slug={article.slug}
                                title={article.title}
                                category={article.category}
                                readTime={article.readTime}
                                image={article.image}
                                trending={article.trending}
                            />
                        ))
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <div className="text-4xl mb-4">🔍</div>
                            <h3 className="text-xl font-bold text-gray-900">No articles found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                            <button onClick={() => { setFilter("All"); setSearch("") }} className="mt-4 text-blue-600 hover:underline">Clear all filters</button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
