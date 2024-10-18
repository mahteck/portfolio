import Navbar from "../components/Navbar";

export default function Contact(){
    return (
        <div>
            <Navbar/>

            <main className="flex-grow p-2">
                <h1 className="flex justify-center item-center text-yellow text-2xl font-bold text-center mb-4">Contact Us</h1>

                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Your Name" className="w-full mb-4 p-1 text-black border rounded">
                    </input>

                    <input type="email" placeholder="Your Email" className="w-full mb-4 p-1 text-black border rounded">
                    </input>

                    <textarea placeholder="Your Message" className="w-full mb-4 p-1 text-black border rounded" rows={4}>
                    </textarea>

                    <button type="submit" className="w-full bg-black text-yellow py-2 mb-9 rounded">
                    Send Message
                    </button>

                </form>
            </main>    
        </div>
    );
}