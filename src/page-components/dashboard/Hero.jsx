"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[440px] sm:h-[500px] md:h-[587px] bg-cover bg-center bg-no-repeat overflow-hidden">
      <Image
        src="/images/hero/herobg.jpg"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        priority
        width={1920}
        height={100}
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-[1150px] mt-[-13px] mx-auto z-10 flex items-center justify-start h-full px-4 sm:px-6 md:px-8">
        <div className="">
          <div className="text-[14px] sm:text-[16px] md:text-[18px] font-bold uppercase tracking-[1.2px] mb-8 sm:mb-10 md:mb-12 text-[#F5F5F5]">
            WELCOME TO NYQUISTAI
          </div>
          <div className="text-[32px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-semibold capitalize leading-[1.2em] text-[#F5F5F5]">
            Connecting Data,
            <span className="block">Igniting Discovery.</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-[48px]">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-2 rounded-full font-semibold transition-colors duration-200 text-sm sm:text-base">
              SCHEDULE A DEMO
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-2 rounded-full font-semibold transition-colors duration-200 flex items-center justify-center gap-2 text-sm sm:text-base">
              WATCH VIDEO
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
