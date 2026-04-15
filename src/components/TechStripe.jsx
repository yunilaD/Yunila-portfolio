const techs = [
    { name: "React",      img: "/logos/react.png" },
    { name: "Node.js",    img: "/logos/nodejs.png" },
    { name: "Express",    img: "/logos/express.jpg" },
    { name: "JavaScript", img: "/logos/javascript.jpg" },
    { name: "MongoDB",    img: "/logos/mongodb.png" },
    { name: "Python",     img: "/logos/python.png" },
    { name: "Java",       img: "/logos/java.png" },
    { name: "PHP",        img: "/logos/php.png" },
    { name: "HTML",       img: "/logos/html.jpg" },
    { name: "SQL",        img: "/logos/sql.png" },
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