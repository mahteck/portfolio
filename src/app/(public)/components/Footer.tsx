export default function Footer(){
    return (
        <div className="mt-12 mb-4">
            <footer className="rounded-2xl border border-white/5 bg-black/50 px-4 py-5 text-center text-gray-300 shadow-inner backdrop-blur">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-slate-400">
                &copy; {new Date().getFullYear()} Shoaib Munir · Portfolio
            </p>
            <div className="mt-3 flex items-center justify-center gap-3 text-sm">
            <a
                href="https://www.linkedin.com/in/shoaibmunir88/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/mahteck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300"
            >
                GitHub
            </a>
            <a
                href="mailto:shoaib1244@gmail.com"
                className="text-teal-400 hover:text-teal-300"
            >
                Contact
            </a>
            </div>
        </footer>
    </div>
    );
}