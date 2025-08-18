"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[440px] sm:h-[500px] md:h-[587px] bg-cover bg-center bg-no-repeat overflow-hidden py-16 sm:py-20 md:py-25">
      <Image
        src="/images/hero/herobg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        priority
        width={1920}
        height={100}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-[1250px] mt-20 sm:mt-[-13px] mx-auto z-10 flex items-center justify-center sm:justify-start h-full px-4 sm:px-6 md:px-8">
        <div className="">
          <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold uppercase tracking-[1.2px] mb-8 sm:mb-10 md:mb-12 text-[#F5F5F5]">
            WELCOME TO NYQUISTAI
          </div>
          <div className="text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] xl:text-[72px] font-semibold capitalize leading-[1.2em] text-[#F5F5F5]">
            Connecting Data,
            <span className="block">Igniting Discovery.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-[48px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 text-sm sm:text-base">
              SCHEDULE A DEMO
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2 rounded-full font-semibold cursor-pointer group hover:translate-y-[-2px] transition-transform duration-300 flex items-center justify-center gap-2 text-sm sm:text-base">
              WATCH VIDEO <img src="/images/icons/play-icon.svg" alt="Play icon" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
