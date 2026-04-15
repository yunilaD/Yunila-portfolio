import { personalInfo } from "../data/portfolio"

function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-950 px-6">
            <div className="text-center max-w-2xl">
                <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-6 flex items-center justify-center text-gray-500 text-sm border-2 border-gray-600">
                    Photo
                </div>
                <p className="text-emerald-400 text-sm mb-2 tracking-widest uppercase">Hello, I'm</p>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-3">{personalInfo.name}</h1>
                <h2 className="text-xl text-gray-400 mb-6">{personalInfo.role}</h2>
                <p className="text-gray-400 leading-relaxed mb-8">{personalInfo.bio}</p>
                <div className="flex gap-4 justify-center flex-wrap">
                <a
                    href={personalInfo.resumeUrl}
                    download
                    className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-6 py-3 rounded-lg text-sm
             transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)]
             active:scale-[0.97] active:translate-y-0 active:shadow-none"
                >
                    Download CV
                </a>

                <a
                    href={`mailto:${personalInfo.email}`}
                    className="border border-gray-700 hover:border-gray-500 text-gray-400 hover:text-white px-6 py-3 rounded-lg text-sm
                    transition-all duration-150 hover:-translate-y-0.5
                    active:scale-[0.97] active:translate-y-0"
                    >
                    Get in Touch
                </a>
        </div>
</div>
</section>
)
}

export default Hero