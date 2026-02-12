

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleSearchFilter from "@/components/ArticleSearchFilter";
import Footer from "@/components/Footer";
import { getAllArticles } from "@/lib/data";

export default function Home() {
  const articles = getAllArticles();

  return (
    <div className="flex min-h-screen flex-col bg-[#F3F4F6]">
      <Header />
      <main className="flex-1">
        <Hero />

        {/* Trending Section Header is inside Hero or SearchFilter?
            Design shows "Trending 2026" above the list, but SearchFilter handles the list.
            I'll let ArticleSearchFilter handle the grid display.
        */}

        <ArticleSearchFilter articles={articles} />
      </main>
      <Footer />
    </div>
  );
}
