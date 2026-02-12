export default function Hero() {
    return (
        <section className="w-full bg-white py-12 md:py-24 lg:py-32 border-b">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="flex flex-col justify-center space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                            2026 Tech Trends Explained Simply
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl">
                            AI, Web Dev, App Dev, Cloud & Startup Insights.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <a
                                className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                                href="#trending"
                            >
                                Explore Latest Trends
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto aspect-video sm:w-full lg:order-last relative flex items-center justify-center mt-12 lg:mt-0">
                        {/* Main Brand Container */}
                        <div className="relative w-full h-full max-w-lg aspect-square flex items-center justify-center">

                            {/* Abstract Background Orbs */}
                            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] animate-pulse"></div>
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[80px] animate-pulse delay-1000"></div>

                            {/* Central Glass Card */}
                            <div className="relative z-10 w-full bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden group hover:border-white/20 transition-all duration-500">
                                {/* Decorative "Circuit" Lines */}
                                <div className="absolute inset-0 opacity-10 pointer-events-none">
                                    <div className="absolute top-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
                                    <div className="absolute bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                                    <div className="absolute top-0 right-20 w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent"></div>
                                </div>

                                {/* Logo / Brand Representation */}
                                <div className="flex flex-col items-center text-center space-y-6">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 transform group-hover:rotate-12 transition-transform duration-500">
                                        <span className="text-4xl font-bold text-white">V</span>
                                    </div>

                                    <div className="space-y-2">
                                        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-gray-400 tracking-tight">
                                            VikizCode.in
                                        </h2>
                                        <div className="flex items-center justify-center gap-2 text-sm font-mono text-blue-300/80 bg-blue-900/20 px-4 py-1.5 rounded-full border border-blue-500/20">
                                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                                            <span>System.Online</span>
                                        </div>
                                    </div>

                                    {/* Tech Stack Grid */}
                                    <div className="grid grid-cols-2 gap-4 w-full mt-4">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs text-slate-400">Core</div>
                                                <div className="text-sm font-semibold text-slate-200">Engineering</div>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-3 hover:bg-white/10 transition-colors">
                                            <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44A.99.99 0 0112 2.05c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15z" /></svg>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-xs text-slate-400">Focus</div>
                                                <div className="text-sm font-semibold text-slate-200">Innovation</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
