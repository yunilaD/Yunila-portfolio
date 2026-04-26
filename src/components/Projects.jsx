import { useState } from "react"
import { projects } from "../data/portfolio"

function Projects() {
    const [current, setCurrent] = useState(0)

    const visible = 1
    const total = projects.length

    const canPrev = current > 0
    const canNext = current + visible < total

    const prev = () => { if (canPrev) setCurrent(c => c - 1) }
    const next = () => { if (canNext) setCurrent(c => c + 1) }

    // ✅ FIXED VALUES
    const CARD_WIDTH = 420
    const GAP = 24
    const MOVE = CARD_WIDTH + GAP

    return (
        <section id="projects" className="py-24 bg-gray-900">

            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-10"></div>
            </div>

            {/* SLIDER */}
            <div className="overflow-hidden w-full">

                <div
                    className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    style={{
                        transform: `translateX(-${current * MOVE}px)`,
                        paddingLeft: "calc((100vw - min(896px, 100vw - 48px)) / 2 + 24px)",
                        gap: `${GAP}px`,
                    }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={project.id}
                            style={{
                                minWidth: `${CARD_WIDTH}px`,
                                maxWidth: `${CARD_WIDTH}px`,
                            }}
                            className={`bg-[#0d0d16] rounded-2xl border transition-all duration-300 overflow-hidden flex-shrink-0
                ${idx === current || idx === current + 1
                                ? "border-[#1e2535] opacity-100"
                                : "border-[#131320] opacity-40"
                            }
                hover:border-[#1e3a30] hover:shadow-[0_20px_48px_rgba(0,0,0,0.5)]`}
                        >
                            {project.cover ? (
                                <div className="w-full h-48 overflow-hidden">
                                    <img
                                        src={project.cover}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                            ) : (
                                <div className="w-full h-48 bg-[#0a0a14] flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-xl border border-[#1e2535] flex items-center justify-center text-emerald-500 text-xl font-bold">
                                        {project.title[0]}
                                    </div>
                                </div>
                            )}

                            <div className="p-6">
                                <h3 className="text-white font-semibold text-lg mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-500 text-sm mb-5">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="text-[11px] bg-[#0a1f16] text-emerald-500 px-2 py-1 rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 pt-4 border-t border-[#131320]">

                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-500 hover:text-white text-xs"
                                        >
                                            GitHub →
                                        </a>
                                    )}

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-gray-500 hover:text-emerald-400 text-xs"
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

            {/* CONTROLS */}
            <div className="max-w-4xl mx-auto px-6 mt-10 flex justify-center gap-5">

                <button
                    onClick={prev}
                    disabled={!canPrev}
                    className={`w-10 h-10 rounded-full border
                    ${canPrev ? "border-gray-600 hover:border-emerald-500" : "opacity-30"}`}
                >
                    ←
                </button>

                <button
                    onClick={next}
                    disabled={!canNext}
                    className={`w-10 h-10 rounded-full border
                    ${canNext ? "border-gray-600 hover:border-emerald-500" : "opacity-30"}`}
                >
                    →
                </button>

            </div>

        </section>
    )
}

export default Projects