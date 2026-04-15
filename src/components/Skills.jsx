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
        <div className="mb-4 last:mb-0">
            <div className="flex justify-between items-center mb-1.5">
                <span className="text-sm text-gray-300">{name}</span>
                <span className={`text-[11px] font-medium ${labelColor[label]}`}>{label}</span>
            </div>
            <div className="w-full h-1.5 bg-[#1a1f2e] rounded-full overflow-hidden">
                <div
                    className={`h-full rounded-full ${barColor[label]} transition-all duration-700 ease-out`}
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
                <h2 className="text-3xl font-bold text-white mb-2">Tech Expertise</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-12"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.id}
                            className="bg-[#0d0d16] border border-[#131320] rounded-xl p-6
                         hover:border-[#1e3a30] hover:-translate-y-1
                         hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]
                         transition-all duration-200"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-emerald-500 text-lg">{cat.icon}</span>
                                <h3 className="text-white font-semibold text-base">{cat.title}</h3>
                            </div>
                            {cat.skills.map((skill) => (
                                <SkillBar key={skill.name} {...skill} />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="flex gap-6 mt-8 justify-end">
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <span className="text-xs text-gray-500">Beginner</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                        <span className="text-xs text-gray-500">Intermediate</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                        <span className="text-xs text-gray-500">Advanced</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills