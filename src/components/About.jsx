import { personalInfo } from "../data/portfolio"

function About() {
    return (
        <section id="about" className="py-24 bg-gray-900 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-8"></div>
                <p className="text-gray-400 text-lg leading-relaxed">{personalInfo.bio}</p>
                <div className="mt-8 flex gap-4">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm underline">GitHub</a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 text-sm underline">LinkedIn</a>
                </div>
            </div>
        </section>
    )
}

export default About