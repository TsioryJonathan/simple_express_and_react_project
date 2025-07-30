import { ArrowRight } from "lucide-react";
import HeroCarousel from "./HeroCarousel";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center bg-background pb-12 relative overflow-x-hidden">
      {/* LEFT */}
      <div className="w-[60%] flex flex-col h-full items-start px-6 md:pl-4 gap-6 -mt-10">
        <h1 className="text-white text-4xl md:text-6xl leading-tight drop-shadow mb-1 font-bangers">
          DISCOVER THE MARVEL UNIVERSE <br />
          <span style={{ color: "#f8d32f" }}>MARVEL HEROES</span>
        </h1>
        <p className="text-white font-semibold mb-3 max-w-lg leading-relaxed font-comic text-lg">
          Dive into the latest adventures of your favorite Marvel heroes!
          Experience new sagas, face epic villains, and explore the vast
          multiverse with the legendary Avengers, X-Men, Guardians and more.
          Unleash your inner hero and start your next epic read!
        </p>
        <div className="flex gap-3 mb-1">
          <a
            href="#"
            className="bg-[#f8d32f] hover:bg-yellow-400 text-black font-bold px-6 py-2 rounded-sm shadow uppercase text-base tracking-wide transition flex items-center gap-2"
          >
            READ NOW <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="bg-transparent border border-[#f8d32f] hover:bg-[#f8d32f] hover:text-black text-[#f8d32f] font-bold px-6 py-2 rounded-sm shadow uppercase text-base tracking-wide transition"
          >
            DISCOVER MORE
          </a>
        </div>
      </div>

      <HeroCarousel />
    </section>
  );
}
