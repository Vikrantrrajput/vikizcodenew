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
                            VikizCode is a student-driven tech growth platform built for engineering students who want more than just a degree.
                        </p>
                    </div>

                    {/* Content Section */}
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Our Mission</h2>
                            <p className="text-zinc-600 leading-relaxed">
                                Our mission is to help engineering students build real skills, think clearly, and position themselves strongly in a competitive tech world.

                                We focus on understanding concepts deeply, using tools responsibly, and building projects that actually matter.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">What We Cover</h2>
                            <ul className="space-y-3 text-zinc-600">
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Practical Web Development & Modern Tools</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>AI Tools & Responsible Usage for Students</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Real Project Building & GitHub Strategy</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Learning Systems & Consistency Frameworks</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-600 mr-3 mt-1">▸</span>
                                    <span>Internship Strategy & Career Positioning</span>
                                </li>
                            </ul>
                        </div>

                        {/* 
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
                         */}

                        <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Let's Connect</h2>
                            <p className="text-zinc-600 leading-relaxed mb-6">
                                If you liked our content, I'd love to stay in touch. Follow me for more insights on tech growth and connect with me on LinkedIn to discuss real-world skills, career positioning, or just to say hi.
                            </p>
                            <a
                                href="https://www.linkedin.com/in/vikrant-rajput-986319226/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-[#0077B5] text-white rounded-lg font-semibold hover:bg-[#006097] transition-all hover:scale-[1.02] active:scale-[0.98] gap-2 shadow-sm"
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
