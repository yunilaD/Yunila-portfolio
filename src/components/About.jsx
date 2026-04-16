import { personalInfo } from "../data/portfolio"

const stats = [
    { label: "Experience", value: "2+ Years" },
    { label: "Projects Built", value: "10+" }
]

function StatTile({ label, value }) {
    return (
        <div className="group bg-gradient-to-br from-[#0d0d16] to-[#0a0a12] border border-emerald-500/20 hover:border-emerald-500/40 rounded-lg px-6 py-4 text-center
            transition-all duration-300 hover:shadow-[0_8px_20px_rgba(16,185,129,0.12)] hover:scale-105">
            <p className="text-emerald-400/70 group-hover:text-emerald-400 text-xs font-medium tracking-wide uppercase transition-colors duration-300">
                {label}
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                {value}
            </p>
        </div>
    )
}

function About() {
    return (
        <section id="about" className="py-24 bg-gray-900 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">About Me</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-8 rounded-full shadow-lg shadow-emerald-500/50"></div>
                <p className="text-gray-300 text-lg leading-relaxed font-light">{personalInfo.bio}</p>
            </div>

            {/* Stats Section */}
            <div className="max-w-3xl mx-auto mt-10">
                <div className="grid md:grid-cols-2 gap-6">
                    {stats.map((stat, idx) => (
                        <div
                            key={stat.label}
                            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <StatTile label={stat.label} value={stat.value} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About