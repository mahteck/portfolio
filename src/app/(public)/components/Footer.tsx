export default function Footer(){
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 text-center py-4 mt-12">
            <p className="text-sm">&copy; {new Date().getFullYear()} Shoaib Munir. All rights reserved.</p>
            <div className="mt-2">
            <a
                href="https://www.linkedin.com/in/shoaibmunir88/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 mx-2 hover:text-teal-400"
            >
                LinkedIn
            </a>
            <a
                href="https://github.com/mahteck"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-500 mx-2 hover:text-teal-400"
            >
                GitHub
            </a>
            <a
                href="mailto:shoaib1244@gmail.com"
                className="text-teal-500 mx-2 hover:text-teal-400"
            >
                Contact
            </a>
            </div>
        </footer>
    </div>
    );
}