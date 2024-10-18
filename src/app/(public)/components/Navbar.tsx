import Link from "next/link";
import React from "react";

export default function Page(){
    return (
        <nav className="flex justify-center item-right bg-black border-0 border-white-300 p-1 font-bold">
            <Link className="hover:text-red-500" href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link className="hover:text-red-600" href="/about">About</Link>&nbsp;|&nbsp;&nbsp;
            <Link className="hover:text-red-600" href="/projects">Project</Link>&nbsp;|&nbsp;&nbsp;
            <Link className="hover:text-red-600" href="/contact">Contact</Link>
        </nav>
    )
}