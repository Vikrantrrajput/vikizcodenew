"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
    const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitStatus("loading");

        const formData = new FormData(e.currentTarget);
        formData.append("form-name", "contact");

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData as any).toString(),
            });

            if (response.ok) {
                setSubmitStatus("success");
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            console.error("Contact submission error:", error);
            setSubmitStatus("error");
        }
    };

    return (
        <div className="flex min-h-screen flex-col bg-[#F3F4F6]">
            <Header />
            <main className="flex-1">
                <div className="container mx-auto px-4 md:px-6 py-16">
                    {/* Hero Section */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-zinc-600 leading-relaxed">
                            Have a question or want to collaborate? We'd love to hear from you.
                        </p>
                    </div>

                    {/* Contact Form & Info */}
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Contact Form */}
                        <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Send us a message</h2>
                            {submitStatus === "success" ? (
                                <div className="bg-green-50 text-green-700 p-8 rounded-xl border border-green-100 text-center animate-in fade-in zoom-in duration-300">
                                    <p className="font-bold text-2xl mb-2">Message Sent! 🚀</p>
                                    <p>Thanks for reaching out. We'll get back to you within 24-48 hours.</p>
                                    <button
                                        onClick={() => setSubmitStatus("idle")}
                                        className="mt-6 text-blue-600 font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form
                                    className="space-y-6"
                                    name="contact"
                                    data-netlify="true"
                                    onSubmit={handleContactSubmit}
                                >
                                    <input type="hidden" name="form-name" value="contact" />
                                    {submitStatus === "error" && (
                                        <p className="text-red-500 text-sm font-medium bg-red-50 p-3 rounded-lg border border-red-100">
                                            Something went wrong. Please try again later.
                                        </p>
                                    )}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-zinc-700 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-zinc-700 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
                                            placeholder="How can we help?"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-zinc-700 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-zinc-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitStatus === "loading"}
                                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-500/30 disabled:opacity-70"
                                    >
                                        {submitStatus === "loading" ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-white rounded-xl p-8 shadow-sm border border-zinc-200">
                                <h3 className="text-xl font-bold text-zinc-900 mb-4">Contact Information</h3>
                                <div className="space-y-4 text-zinc-600">
                                    <div className="flex items-start">
                                        <span className="text-blue-600 mr-3 mt-1">📧</span>
                                        <div>
                                            <p className="font-semibold text-zinc-900">Email</p>
                                            <p>contact@vikizcode.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-600 mr-3 mt-1">🌐</span>
                                        <div>
                                            <p className="font-semibold text-zinc-900">Website</p>
                                            <p>www.vikizcode.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-600 mr-3 mt-1">⏰</span>
                                        <div>
                                            <p className="font-semibold text-zinc-900">Response Time</p>
                                            <p>We typically respond within 24-48 hours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl p-8 text-white">
                                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                                <p className="mb-6 leading-relaxed">
                                    Stay connected with us on social media for the latest updates and tech insights.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://x.com/vikizcode_in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        𝕏
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/vikrant-rajput-986319226/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                                    >
                                        in
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                                        ▶
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
