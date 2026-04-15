import { personalInfo } from "../data/portfolio"

function Contact() {
    return (
        <section id="contact" className="py-24 bg-gray-900 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Get In Touch</h2>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-8 mx-auto rounded-full shadow-lg shadow-emerald-500/50"></div>
                <p className="text-gray-300 mb-10 text-lg font-light">I'm open to opportunities, collaborations, or just a chat. Feel free to reach out.</p>
                <a
                    href={`mailto:${personalInfo.email}`}
                    className="inline-flex items-center gap-2 group relative bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-gray-950 font-semibold px-10 py-3 rounded-lg transition-all duration-200
                hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)] hover:-translate-y-1
                active:scale-95 active:translate-y-0 overflow-hidden"
                >
                    <span className="relative z-10">Say Hello</span>
                    <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
                <div className="mt-12 flex justify-center gap-8 flex-wrap">
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="group relative text-gray-400 hover:text-emerald-400 transition-all duration-300 text-sm font-medium">
                    <span className="flex items-center gap-2">
                        GitHub
                        <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                    </span>
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="group relative text-gray-400 hover:text-emerald-400 transition-all duration-300 text-sm font-medium">
                    <span className="flex items-center gap-2">
                        LinkedIn
                        <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                    </span>
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="group relative text-gray-400 hover:text-emerald-400 transition-all duration-300 text-sm font-medium">
                    <span className="flex items-center gap-2">
                        Email
                        <span className="w-0 group-hover:w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-300"></span>
                    </span>
                    </a>
                </div>
                <p className="text-gray-600 text-xs mt-12">Built by Yunila Dissanayake</p>
            </div>
        </section>
    )
}

export default Contact