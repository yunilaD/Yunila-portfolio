import { Link } from "react-scroll"

const navLinks = ["about", "skills", "projects", "contact"]

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-white font-bold text-xl bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Yunila.</span>
                <ul className="flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                                className="text-gray-400 hover:text-emerald-400 capitalize cursor-pointer transition-all duration-300 text-sm font-medium relative group"
                            >
                                {link}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar