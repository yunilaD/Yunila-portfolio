function Hero() {
    const personalInfo = {
        name: "Yunila Dissanayake",
        role: "Full Stack Developer",
        bio: "I craft modern, scalable web applications with clean code and intuitive design. Passionate about turning ideas into reality.",
        resumeUrl: "/Yunila_Dissanayake_CV.pdf",
        email: "yunilad6@gmail.com",
        image: "/profilePic.jpeg",
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 px-6 pt-32 pb-12">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Side - Text Content */}
                    <div className="flex flex-col justify-center animate-in fade-in slide-in-from-left-4 duration-700">
                        <p className="text-emerald-400 text-sm mb-3 tracking-widest uppercase font-semibold animate-pulse">
                            Welcome to my portfolio
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
                            {personalInfo.name}
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-emerald-400 mb-6 font-light tracking-wide">
                            {personalInfo.role}
                        </h2>
                        <p className="text-gray-300 leading-relaxed mb-10 text-lg max-w-xl">
                            {personalInfo.bio}
                        </p>

                        <div className="flex gap-4 flex-wrap">
                            <a
                                href={personalInfo.resumeUrl}
                                download
                                className="group relative bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-gray-950 font-semibold px-8 py-4 rounded-lg text-base
                         transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.4)]
                         active:scale-95 active:translate-y-0 active:shadow-none overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Download CV
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </a>

                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="group border-2 border-emerald-500/30 hover:border-emerald-400 text-gray-300 hover:text-emerald-300 px-8 py-4 rounded-lg text-base
                        transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(16,185,129,0.2)]
                        active:scale-95 active:translate-y-0 relative overflow-hidden"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></span>
                                <span className="relative z-10 flex items-center gap-2">
                                    Get in Touch
                                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </span>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-6 mt-10">
                            <a href="https://github.com/yunilaD" className="group text-gray-400 hover:text-emerald-400 transition-all duration-300">
                                <span className="flex items-center gap-2 text-sm font-medium">
                                    GitHub
                                    <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/yunila-dissanayake" className="group text-gray-400 hover:text-emerald-400 transition-all duration-300">
                                <span className="flex items-center gap-2 text-sm font-medium">
                                    LinkedIn
                                    <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative animate-in fade-in slide-in-from-right-4 duration-700 delay-100 hidden md:flex">
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Animated Background Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-3xl blur-2xl animate-pulse"></div>
                            <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-3xl"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 group">
                                <img
                                    src={personalInfo.image}
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-transform duration-500"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-40"></div>
                            </div>

                            {/* Floating Elements */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero