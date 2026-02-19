"use client";

import { useState } from "react";

export default function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // Simulating API call for developer feedback
        setTimeout(() => {
            setStatus("success");
            setEmail("");
        }, 1500);
    };

    return (
        <section className="mt-16 p-8 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 z-0 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-50 rounded-full -ml-12 -mb-12 z-0 opacity-40"></div>

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-6 shadow-lg shadow-blue-200">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
                    Stay Updated with VikizCode 🚀
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    Join us to get fresh web dev guides, AI tools, and deployment tips directly in your inbox.
                </p>

                {status === "success" ? (
                    <div className="bg-green-50 text-green-700 p-6 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-300">
                        <p className="font-bold text-xl mb-1">Welcome aboard! 📧</p>
                        <p className="text-sm opacity-90">We'll notify you whenever a new blog post is uploaded.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            required
                            placeholder="Ente your email address"
                            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 bg-gray-50/50"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="px-8 py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl disabled:opacity-70 flex items-center justify-center min-w-[160px] group"
                        >
                            {status === "loading" ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Joining...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    Stay Updated
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                    </svg>
                                </span>
                            )}
                        </button>
                    </form>
                )}
                <p className="mt-6 text-xs text-gray-400 font-medium uppercase tracking-wider">
                    NO SPAM. JUST PURE GEEKY GOODNESS.
                </p>
            </div>
        </section>
    );
}
