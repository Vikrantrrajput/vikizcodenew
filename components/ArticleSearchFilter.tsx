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

    const categories = ["All", "AI 2026", "Web Dev 2026", "App Dev 2026", "Cloud Computing", "Cybersecurity", "Startups"];

    return (
        <>
            <section className="container mx-auto px-4 md:px-6 py-4 sticky top-16 z-40 bg-[#F3F4F6]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F3F4F6]/60 border-b border-gray-200/50">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-medium shadow-sm transition-colors whitespace-nowrap border ${filter === cat
                                        ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <div className="relative w-full sm:w-[300px]">
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

            <section className="container mx-auto px-4 md:px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article) => (
                            <ArticleCard
                                key={article.slug}
                                slug={article.slug}
                                title={article.title}
                                category={article.category}
                                readTime={article.readTime}
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
