import { personalInfo } from "../data/portfolio"

function Contact() {
    return (
        <section id="contact" className="py-24 bg-gray-900 px-6">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
                <div className="w-12 h-1 bg-emerald-500 mb-8 mx-auto"></div>
                <p className="text-gray-400 mb-8">I'm open to opportunities, collaborations, or just a chat. Feel free to reach out.</p>
            <a
                href={`mailto:${personalInfo.email}`}
                className="inline-block bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                Say Hello
            </a>
            <div className="mt-8 flex justify-center gap-6">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">Email</a>
            </div>
            <p className="text-gray-600 text-xs mt-12">Built by Yunila Dissanayake</p>
        </div>
</section>
)
}

export default Contact