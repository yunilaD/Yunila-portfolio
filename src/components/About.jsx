import { personalInfo } from "../data/portfolio"

function About() {
    return (
        <section id="about" className="py-24 bg-gray-900 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-8 rounded-full shadow-lg shadow-emerald-500/50"></div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">{personalInfo.bio}</p>
                <div className="mt-8 flex gap-6">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="group relative text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-all duration-300">
                        <span className="flex items-center gap-2">
                            GitHub
                            <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                        </span>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="group relative text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-all duration-300">
                        <span className="flex items-center gap-2">
                            LinkedIn
                            <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About