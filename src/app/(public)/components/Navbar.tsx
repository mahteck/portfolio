"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-40 mb-8">
      <nav className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 px-4 py-3 shadow-lg backdrop-blur sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 via-emerald-400 to-sky-500 text-sm font-bold text-slate-950 shadow-md">
            SM
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Portfolio
            </span>
            <span className="text-sm font-semibold text-slate-100">
              Shoaib Munir
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 sm:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors ${
                  isActive
                    ? "text-teal-300"
                    : "text-slate-300 hover:text-teal-200"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-1 h-px rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-sky-500" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
            Menu
          </span>
        </div>
      </nav>
    </header>
  );
}