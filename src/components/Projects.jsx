import { projects } from "../data/portfolio"

function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-900 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500 transition-colors">
                            <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs bg-gray-700 text-emerald-400 px-2 py-1 rounded">{t}</span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">GitHub →</a>
                                )}
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Live →</a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects