import { ShieldAlert } from "lucide-react";

export default function Navbar() {
  return (
    <header
      role="banner"
      className="flex items-center justify-center gap-4 px-4 py-5 fixed top-0 left-0 w-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg z-50"
    >
      <ShieldAlert className="w-7 h-7 text-yellow-300 animate-pulse" />
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-center">
        Browse your favorite <span className="text-yellow-200">DC</span> and{" "}
        <span className="text-red-200">Marvel</span> Hero
      </h1>
    </header>
  );
}
