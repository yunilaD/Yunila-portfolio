import { projects } from "../data/portfolio"

function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-900 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-[#0d0d16] rounded-xl border border-[#131320]
                         hover:border-[#1e3a30] hover:-translate-y-1
                         hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]
                         transition-all duration-200 overflow-hidden"
                        >
                            {project.cover && (
                                <div className="w-full h-44 overflow-hidden">
                                    <img
                                        src={project.cover}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500"
                                    />
                                </div>
                            )}

                            <div className="p-6">
                                <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs bg-[#0f2a20] text-emerald-400 px-2 py-1 rounded"
                                        >
                      {t}
                    </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-500 hover:text-white text-sm transition-colors"
                                        >
                                        GitHub →
                                        </a>
                                        )}
                                    {project.live && (
                                        <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-gray-500 hover:text-white text-sm transition-colors"
                                        >
                                        Live →
                                        </a>
                                        )}
                                </div>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Projects