"use client";

import Image from "next/image";
import { clients } from "../../constants/dashboard";

export function ClientsSection() {
  return (
    <section className="py-16 sm:py-20 md:py-25 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-6 leading-[1.2em] tracking-wide">
            Our Valued Clients
          </div>
          <div className="text-[32px] font-normal leading-[1.2em] mb-5">
            Global Innovators in Life Sciences
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center group hover:opacity-80 transition-opacity duration-300 flex-shrink-0"
              style={{
                width: 'calc(50% - 1rem)', // 2 columns on mobile
                minWidth: '120px',
                maxWidth: '200px'
              }}
            >
              <div className="relative w-full  flex items-center justify-center p-2">
                <img
                  src={client.logo}
                  alt={client.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
