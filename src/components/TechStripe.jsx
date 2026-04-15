const techs = [
    { name: "React",      img: "/logos/react.png" },
    { name: "Node.js",    img: "/logos/nodejs.svg" },
    { name: "Express",    img: "/logos/express.svg" },
    { name: "JavaScript", img: "/logos/javascript.svg" },
    { name: "MongoDB",    img: "/logos/mongodb.svg" },
    { name: "Python",     img: "/logos/python.svg" },
    { name: "Java",       img: "/logos/java.svg" },
    { name: "PHP",        img: "/logos/php.svg" },
    { name: "HTML",       img: "/logos/html.svg" },
    { name: "CSS",        img: "/logos/css.svg" },
    { name: "SQL",        img: "/logos/sql.svg" },
]

const doubled = [...techs, ...techs]

function TechStripe() {
    return (
        <div className="border-y border-gray-900 bg-[#080810] py-5 overflow-hidden">
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#080810] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#080810] to-transparent z-10 pointer-events-none" />
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {doubled.map((tech, i) => (
                        <div
                            key={i}
                            className="mx-6 w-10 h-10 flex items-center justify-center opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-200"
                        >
                            <img
                                src={tech.img}
                                alt={tech.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStripe