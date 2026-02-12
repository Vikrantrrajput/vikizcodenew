import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="flex min-h-screen flex-col bg-[#F3F4F6]">
            <Header />
            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-6 py-16">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                            About VikizCode
                        </h1>
                        <p className="text-xl text-zinc-600 leading-relaxed">
                            Your trusted source for cutting-edge technology insights, tutorials, and industry trends.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                At VikizCode, we're passionate about making complex technology accessible to everyone.
                                Whether you're a seasoned developer or just starting your coding journey, we provide
                                high-quality content that helps you stay ahead in the rapidly evolving tech landscape.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">What We Cover</h2>
                            <ul className="space-y-3 text-zinc-600">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Web Development & Modern Frameworks</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Artificial Intelligence & Machine Learning</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Cloud Computing & DevOps</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Mobile App Development</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Cybersecurity & Best Practices</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
                            <p className="leading-relaxed mb-6">
                                Stay updated with the latest tech trends, tutorials, and insights.
                                Follow us on social media and subscribe to our newsletter.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                                    Subscribe
                                </a>
                                <a href="/contact" className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
