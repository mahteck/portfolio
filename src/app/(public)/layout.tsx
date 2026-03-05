import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shoaib Munir | Portfolio",
  description:
    "Portfolio of Shoaib Munir – Application Developer & IT Team Lead with 15+ years of experience in ERP, web apps, and MIS solutions.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_55%)]">
          <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}