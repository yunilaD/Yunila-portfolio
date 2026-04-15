const techs = [
    { name: "React",      img: "/logos/react.png",      isDark: false },
    { name: "Node.js",    img: "/logos/node.png",       isDark: false },
    { name: "Express",    img: "/logos/express.png",    isDark: true },
    { name: "JavaScript", img: "/logos/javascript.png", isDark: false },
    { name: "MongoDB",    img: "/logos/MongoDB.png",    isDark: false },
    { name: "Python",     img: "/logos/python.png",     isDark: false },
    { name: "Java",       img: "/logos/java.png",       isDark: false },
    { name: "PHP",        img: "/logos/php.png",        isDark: false },
    { name: "HTML and CSS",       img: "/logos/html.png",       isDark: false },
    { name: "SQL",        img: "/logos/sql.png",        isDark: false },
]

const tripled = [...techs, ...techs, ...techs]

function TechStripe() {
    return (
        <div className="border-y border-emerald-500/20 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 py-8 overflow-hidden">
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

                <div
                    className="flex whitespace-nowrap hover:[animation-play-state:paused]"
                    style={{
                        animation: "marquee-third 30s linear infinite",
                        width: "max-content",
                    }}
                >
                    {tripled.map((tech, i) => (
                        <div
                            key={i}
                            className={`mx-8 w-14 h-14 flex items-center justify-center rounded-xl transition-all duration-300 group cursor-pointer
                            ${tech.isDark
                                ? 'bg-white/5 hover:bg-white/15 shadow-lg shadow-white/10'
                                : 'bg-emerald-500/10 hover:bg-emerald-500/20 shadow-lg shadow-emerald-500/10'
                            }
                            hover:scale-120 hover:-translate-y-2`}
                        >
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className={`w-8 h-8 object-contain transition-all duration-300 ${
                                    tech.isDark
                                        ? 'invert group-hover:brightness-110'
                                        : 'group-hover:brightness-110'
                                }`}
                            />
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-emerald-500/30">
                                {tech.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                @keyframes marquee-third {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-33.3333%); }
                }
            `}</style>
        </div>
    )
}

export default TechStripe