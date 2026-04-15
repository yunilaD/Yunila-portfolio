import { projects } from "../data/portfolio"

function Projects() {
    return (
        <section id="projects" className="py-24 bg-gray-900 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Projects</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-8 rounded-full shadow-lg shadow-emerald-500/50"></div>
                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="bg-gradient-to-br from-[#0d0d16] to-[#0a0a12] rounded-xl border border-[#1e3a30]/30 hover:border-emerald-500/30
                         hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(16,185,129,0.2)]
                         transition-all duration-300 overflow-hidden group animate-in fade-in slide-in-from-bottom-4"
                            style={{ animationDelay: `${idx * 100}ms` }}
                        >
                            {project.cover && (
                                <div className="w-full h-44 overflow-hidden relative">
                                    <img
                                        src={project.cover}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d16] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            )}

                            <div className="p-6">
                                <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-emerald-400 transition-colors duration-300">{project.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-xs bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 hover:from-emerald-500/30 hover:to-cyan-500/30 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/30 transition-all duration-300 font-medium"
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
                                            className="group/link text-gray-400 hover:text-emerald-400 text-sm transition-all duration-300 font-medium flex items-center gap-1"
                                        >
                                            GitHub <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group/link text-gray-400 hover:text-cyan-400 text-sm transition-all duration-300 font-medium flex items-center gap-1"
                                        >
                                            Live <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
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