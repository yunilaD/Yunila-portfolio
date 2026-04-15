const skillCategories = [
    {
        id: 1,
        title: "Frontend",
        icon: "✦",
        skills: [
            { name: "React",       level: 75, label: "Intermediate" },
            { name: "JavaScript",  level: 70, label: "Intermediate" },
            { name: "HTML",        level: 90, label: "Advanced"     },
            { name: "CSS",         level: 85, label: "Advanced"     },
        ],
    },
    {
        id: 2,
        title: "Backend",
        icon: "⬡",
        skills: [
            { name: "Node.js",    level: 65, label: "Intermediate" },
            { name: "Express.js", level: 65, label: "Intermediate" },
            { name: "Java",       level: 60, label: "Intermediate" },
            { name: "Python",     level: 55, label: "Beginner"     },
            { name: "PHP",        level: 50, label: "Beginner"     },
        ],
    },
    {
        id: 3,
        title: "Databases",
        icon: "◈",
        skills: [
            { name: "MongoDB", level: 65, label: "Intermediate" },
            { name: "SQL",     level: 60, label: "Intermediate" },
        ],
    },
    {
        id: 4,
        title: "Tools & Others",
        icon: "⊞",
        skills: [
            { name: "Git",    level: 70, label: "Intermediate" },
            { name: "REST API", level: 65, label: "Intermediate" },
        ],
    },
]

const labelColor = {
    Beginner:     "text-amber-400",
    Intermediate: "text-emerald-400",
    Advanced:     "text-sky-400",
}

const barColor = {
    Beginner:     "bg-amber-400",
    Intermediate: "bg-emerald-500",
    Advanced:     "bg-sky-400",
}

function SkillBar({ name, level, label }) {
    return (
        <div className="mb-5 last:mb-0 group">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors duration-300">{name}</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${labelColor[label]} bg-opacity-10 backdrop-blur`}>{label}</span>
            </div>
            <div className="w-full h-2 bg-[#1a1f2e] rounded-full overflow-hidden shadow-inner">
                <div
                    className={`h-full rounded-full ${barColor[label]} transition-all duration-1000 ease-out shadow-lg`}
                    style={{ width: `${level}%` }}
                />
            </div>
        </div>
    )
}

function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-950 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Tech Expertise</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-12 rounded-full shadow-lg shadow-emerald-500/50"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((cat, idx) => (
                        <div
                            key={cat.id}
                            className="bg-gradient-to-br from-[#0d0d16] to-[#0a0a12] border border-[#1e3a30]/30 hover:border-emerald-500/30 rounded-xl p-6
                         hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(16,185,129,0.15)]
                         transition-all duration-300 group animate-in fade-in slide-in-from-bottom-4"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-emerald-400 text-2xl group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                                <h3 className="text-white font-semibold text-base group-hover:text-emerald-400 transition-colors duration-300">{cat.title}</h3>
                            </div>
                            {cat.skills.map((skill) => (
                                <SkillBar key={skill.name} {...skill} />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex gap-8 mt-12 justify-center flex-wrap">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-amber-400 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-amber-400/50" />
                        <span className="text-xs text-gray-400 group-hover:text-amber-400 transition-colors duration-300 font-medium">Beginner</span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-emerald-500 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-emerald-500/50" />
                        <span className="text-xs text-gray-400 group-hover:text-emerald-400 transition-colors duration-300 font-medium">Intermediate</span>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-sky-400 group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-sky-400/50" />
                        <span className="text-xs text-gray-400 group-hover:text-sky-400 transition-colors duration-300 font-medium">Advanced</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills