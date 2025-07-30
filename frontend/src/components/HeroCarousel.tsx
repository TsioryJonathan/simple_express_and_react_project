import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { assets } from "@/assets/assets";

const marvelSlides = [
  { title: "BLACK PANTHER", img: assets.blackpanther },
  { title: "CAPTAIN MARVEL", img: assets.captainmarvel },
  { title: "IRON MAN", img: assets.ironman },
  { title: "SPIDER-MAN", img: assets.spiderman },
];

export default function HeroCarousel() {
  return (
    <div className="w-full max-w-[450px] min-h-[640px] flex flex-col justify-center items-center relative px-2">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 3200, disableOnInteraction: false }}
        className="w-full h-[600px]"
      >
        {marvelSlides.map((hero, i) => (
          <SwiperSlide key={i}>
            <div className="relative flex flex-col items-center min-h-[600px]">
              <div className="w-[370px] h-[480px]  flex items-center justify-center rounded-lg overflow-hidden  relative backdrop-blur-sm">
                <div className="absolute -inset-2 z-0 bg-gradient-to-br from-blue-600/20 via-transparent to-red-600/20 blur-2xl" />
                <img
                  src={hero.img}
                  alt={hero.title}
                  className="relative z-10 w-full h-full object-cover object-center rounded-lg drop-shadow-2xl"
                />
              </div>
              <div className="w-full flex flex-col items-center mt-7">
                <span className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-white drop-shadow font-bangers text-center shadow-2xl bg-gradient-to-br from-blue-400/80 to-red-500/70 bg-clip-text">
                  {hero.title}
                </span>
                <div className="mt-1 w-12 h-1 rounded-full bg-gradient-to-r from-blue-500 via-white to-red-500 opacity-80"></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
