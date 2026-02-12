import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles } from "@/lib/data";

export default function CategoryPage() {
    const articles = getAllArticles();

    return (
        <div className="flex min-h-screen flex-col bg-[#F3F4F6]">
            <Header />

            {/* Page Header */}
            <div className="bg-white border-b py-8">
                <div className="container mx-auto px-4 md:px-6">
                    <h1 className="text-3xl font-bold mb-2">Explore Categories</h1>
                    <p className="text-gray-500">Deep dives into the future of artificial intelligence, web development, and more.</p>
                </div>
            </div>

            <main className="container mx-auto px-4 md:px-6 py-8 flex-1">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 space-y-8 flex-shrink-0">
                        {/* Popular Tags */}
                        <div className="bg-white p-6 rounded-lg border shadow-sm sticky top-24">
                            <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Popular Tags</h3>
                            <div className="flex flex-wrap gap-2">
                                {["#AI", "#React", "#Web3", "#Cloud", "#Cybersecurity", "#Startups", "#NextJS", "#Tailwind"].map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-gray-100 text-xs rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-600 cursor-pointer transition-colors border border-transparent hover:border-blue-200">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8">
                                <h3 className="font-bold mb-4 text-sm uppercase tracking-wider">Recent Articles</h3>
                                <ul className="space-y-4">
                                    {articles.slice(0, 5).map((article) => (
                                        <li key={article.slug} className="group cursor-pointer">
                                            <h4 className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                {article.title}
                                            </h4>
                                            <span className="text-xs text-gray-400">{article.date}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Filter/Sort Bar */}
                        <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-lg border shadow-sm mb-6 gap-4">
                            <div className="flex gap-2 overflow-x-auto w-full sm:w-auto no-scrollbar pb-2 sm:pb-0">
                                {["All", "Latest", "Popular", "Featured"].map((tab, idx) => (
                                    <button key={tab} className={`px-4 py-1.5 text-sm rounded-md font-medium transition-colors whitespace-nowrap ${idx === 0 ? 'bg-blue-600 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'}`}>
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 whitespace-nowrap ml-auto sm:ml-0">
                                <span>Sort by:</span>
                                <select className="bg-transparent font-medium text-gray-900 border-none outline-none cursor-pointer focus:ring-0 py-0 pl-1 pr-6">
                                    <option>Latest</option>
                                    <option>Oldest</option>
                                    <option>Most Viewed</option>
                                </select>
                            </div>
                        </div>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {articles.map((article) => (
                                <ArticleCard
                                    key={article.slug}
                                    slug={article.slug}
                                    title={article.title}
                                    category={article.category}
                                    readTime={article.readTime}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
