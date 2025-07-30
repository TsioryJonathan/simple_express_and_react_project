import { assets } from "@/assets/assets";
import { useState } from "react";

const navLinks = [
  { name: "Browse Comics", href: "/comics" },
  { name: "Genre", href: "/genre" },
  { name: "Community", href: "/community" },
  { name: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background px-20">
      <nav className=" px-12 flex items-center justify-center h-16">
        <a href="/" className="flex items-center">
          <img
            src={assets.marvelLogo}
            alt="Marvel logo"
            className="h-22 w-32 object-cover"
          />
        </a>
        <ul className="hidden md:flex gap-10 items-center mx-auto">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="uppercase text-xl tracking-[3px] text-white px-2 py-1 transition-all hover:text-[#f8d32f] hover:underline underline-offset-8"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden bg-[#23272F] border-t border-black px-8 pt-4 pb-8 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block uppercase tracking-widest text-white/90 font-semibold text-lg hover:text-[#f8d32f] hover:underline underline-offset-8 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
