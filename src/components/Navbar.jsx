import { Link } from "react-scroll"

const navLinks = ["about", "skills", "projects", "experience", "contact"]

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 border-b border-gray-800">
            <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
                <span className="text-white font-semibold text-lg">Yunila.</span>
                <ul className="flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <Link
                                to={link}
                                smooth={true}
                                duration={500}
                                className="text-gray-400 hover:text-white capitalize cursor-pointer transition-colors text-sm"
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar