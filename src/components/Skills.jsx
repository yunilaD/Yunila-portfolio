const skillCategories = [
    {
        id: 1,
        title: "Frontend",
        icon: "✦",
        skills: [
            { name: "React", level: 80, label: "Advanced" },
            { name: "JavaScript", level: 80, label: "Advanced" },
            { name: "HTML and CSS", level: 95, label: "Expert"},
            { name: "Tailwind CSS", level: 80, label: "Advanced" },
        ],
    },
    {
        id: 2,
        title: "Backend",
        icon: "⬡",
        skills: [
            { name: "Node.js",    level: 75, label: "Advanced" },
            { name: "Express.js", level: 75, label: "Advanced" },
            { name: "Java",       level: 80, label: "Advanced" },
            { name: "Python",     level: 80, label: "Advanced"     },
            { name: "PHP",        level: 70, label: "Intermediate"     },
        ],
    },
    {
        id: 3,
        title: "Databases",
        icon: "◈",
        skills: [
            { name: "MongoDB and Mongoose", level: 85, label: "Expert" },
            { name: "SQL",     level: 90, label: "Expert" },
            {name: "Firebase", level: 85, label: "Expert"     },
        ],
    },
    {
        id: 4,
        title: "Tools & Others",
        icon: "⊞",
        skills: [
            { name: "Git and GitHub",    level: 95, label: "Expert" },
            { name: "Postman", level: 60, label: "Intermediate" },
            {name: "Figma",    level: 85, label: "Advanced" },
            {name: "Vercel, Cloudflare and Railway", level: 80, label: "Advanced"     },
            {name: "Pandas", level: 20, label: "Beginner"},
            {name: "Matplotlib", level: 20, label: "Beginner"},
            {name: "Scikit-learn", level: 20, label: "Beginner"},

        ],
    },
]

const labelColor = {
    Beginner:     "text-red-600",
    Intermediate: "text-amber-400",
    Advanced:     "text-sky-400",
    Expert:       "text-emerald-500",
}

const barColor = {
    Beginner:     "bg-emerald-500",
    Intermediate: "bg-emerald-500",
    Advanced:     "bg-emerald-500",
    Expert:       "bg-emerald-500",
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
            </div>
        </section>
    )
}

export default Skills