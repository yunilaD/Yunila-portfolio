import { skills } from "../data/portfolio"

function Skills() {
    return (
        <section id="skills" className="py-24 bg-gray-950 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                        <span key={skill} className="bg-gray-800 text-gray-300 px-4 py-2 rounded-lg text-sm border border-gray-700">
              {skill}
            </span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills