/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, LayoutGroup, cubicBezier  } from "framer-motion";

const ITEMS = [
  { id: "banana-1", src: "/images/ginger.png" },
  { id: "ginger-2", src: "/images/ginger.png" },
  { id: "banana-3", src: "/images/ginger.png" },
];


export default function ProductOverviewSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % ITEMS.length);
  const prev = () => setIndex((prev) => (prev - 1 + ITEMS.length) % ITEMS.length);

  // Logic Helper
  const leftItem = ITEMS[(index - 1 + ITEMS.length) % ITEMS.length];
  const centerItem = ITEMS[index];
  const rightItem = ITEMS[(index + 1) % ITEMS.length];

  // Setting animasi smooth (Elegant Style)
  // const transitionSettings = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  const transitionSettings = {
    duration: 0.6,
    ease: cubicBezier(0.25, 0.1, 0.25, 1),
  }


  return (
    <section id="product-overview" className="relative w-full">

      {/* BACKGROUND ROUNDED */}
      <div
        className="
          absolute inset-0
          -mt-8 md:-mt-12
          bg-[#E6FFCF]
          rounded-t-[45px] md:rounded-t-[60px]
        "
      />

      {/* CONTENT */}

      <div className="relative z-10 py-20 md:py-24 text-center">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-12 tracking-tight">
          Product Overview
        </h2>

        <div className="w-full relative overflow-visible">

          {/* LayoutGroup adalah 'lem' ajaib yang menyatukan animasi antar posisi */}
          <LayoutGroup>
            <div className="w-full flex items-center justify-center sm:gap-4 md:gap-6">

              {/* ======================= */}
              {/* POSISI KIRI             */}
              {/* ======================= */}
              <div
                className="group relative -translate-x-[25%] z-0"
                style={{ width: "clamp(200px, 30vw, 420px)" }}
              >
                <motion.div
                  key={leftItem.id}        // Wajib Unik
                  layoutId={leftItem.id}   // Wajib Sama dengan ID Item
                  transition={transitionSettings}
                  className="
                    border-[clamp(3px,0.8vw,5px)] border-[#003F38]
                    rounded-[clamp(22px,4vw,40px)]
                    p-[clamp(1px,0.7vw,5px)]
                    overflow-hidden
                    bg-[#E6FFCF]
                    group-hover:border-[#005947]
                  "
                >
                  <div className="relative rounded-[clamp(18px,3.5vw,32px)] overflow-hidden aspect-[1/1] md:aspect-[6/6]">
                    {/* Overlay */}
                    <a href="" className="absolute inset-0 z-20 bg-black/0 hover:bg-black/25 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 rounded-[inherit]">
                      <span className="text-[#E6FFCF] text-[13px] sm:text-[15px]">View Detail</span>
                    </a>

                    <motion.img
                      layoutId={`img-${leftItem.id}`} // Animasi Gambar
                      src={leftItem.src}
                      alt="Left"
                      className="w-full h-full object-cover scale-[1.03] opacity-80"
                    />

                     {/* DARK OVERLAY (inactive state) */}
                     <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
                  </div>
                </motion.div>
              </div>


              {/* BUTTON PREV */}
              <button onClick={prev} className="z-20 h-14 w-14 lg:h-16 lg:w-16 flex items-center justify-center rounded-full shadow-sm mr-2 cursor-pointer hover:scale-105 transition-transform">
                <img src="/icons/arrow-left.svg" alt="prev" />
              </button>


              {/* ======================= */}
              {/* POSISI TENGAH (ACTIVE)  */}
              {/* ======================= */}
              <div className="group relative z-10 w-[clamp(300px,40vw,500px)]">
                <motion.div
                  key={centerItem.id}       // ID ini tadinya ada di Kanan/Kiri
                  layoutId={centerItem.id}  // Framer Motion mendeteksi perpindahan ini
                  transition={transitionSettings}
                  className="
                    border-[clamp(3px,0.8vw,5px)] border-[#003F38]
                    rounded-[clamp(22px,4vw,40px)]
                    p-[clamp(1px,0.7vw,5px)]
                    bg-[#E6FFCF]
                    group-hover:border-[#005947]
                    group-hover:shadow-[0_0_22px_rgba(0,64,53,0.45)]
                  "
                >
                  <div className="relative rounded-[clamp(18px,3.5vw,32px)] overflow-hidden aspect-[1/1] md:aspect-[6/5]">
                    {/* Overlay */}
                    <a href="" className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 backdrop-blur-0 opacity-0 transition-all duration-300 group-hover:bg-black/25 group-hover:backdrop-blur-sm group-hover:opacity-100 rounded-[inherit]">
                      <span className="text-[#E6FFCF] text-[13px] sm:text-[15px]">Click to view detail</span>
                    </a>

                    <motion.img
                      layoutId={`img-${centerItem.id}`} // Animasi Gambar
                      src={centerItem.src}
                      alt="Main"
                      className="w-full h-full object-cover scale-[1.03] group-hover:scale-[1.12] transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>


              {/* BUTTON NEXT */}
              <button onClick={next} className="z-20 h-14 w-14 lg:h-16 lg:w-16 flex items-center justify-center rounded-full shadow-sm ml-2 cursor-pointer hover:scale-105 transition-transform">
                <img src="/icons/arrow-right.svg" alt="next" />
              </button>


              {/* ======================= */}
              {/* POSISI KANAN            */}
              {/* ======================= */}
              <div
                className="group relative translate-x-[25%] z-0"
                style={{ width: "clamp(200px, 30vw, 420px)" }}
              >
                <motion.div
                  key={rightItem.id}
                  layoutId={rightItem.id}
                  transition={transitionSettings}
                  className="
                    border-[clamp(3px,0.8vw,5px)] border-[#003F38]
                    rounded-[clamp(22px,4vw,40px)]
                    p-[clamp(1px,0.7vw,5px)]
                    overflow-hidden
                    bg-[#E6FFCF]
                    group-hover:border-[#005947]
                  "
                >
                  <div className="relative rounded-[clamp(18px,3.5vw,32px)] overflow-hidden aspect-[1/1] md:aspect-[6/6]">
                    {/* Overlay */}
                    <a href="" className="absolute inset-0 z-20 bg-black/0 hover:bg-black/25 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100 rounded-[inherit]">
                      <span className="text-[#E6FFCF] text-[13px] sm:text-[15px]">View Detail</span>
                    </a>

                    <motion.img
                      layoutId={`img-${rightItem.id}`}
                      src={rightItem.src}
                      alt="Right"
                      className="w-full h-full object-cover scale-[1.03] opacity-80 "
                    />

                     {/* DARK OVERLAY (inactive state) */}
                      <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none" />
                  </div>
                </motion.div>
              </div>

            </div>
          </LayoutGroup>
        </div>

        {/* Description Text */}
        <div className="container mx-auto mt-12 md:mt-16 px-7 md:px-10  text-left space-y-4 tracking-tight">
          {/* DESCRIPTION */} <p className="text-[15px] md:text-[17px] leading-[1.75] text-[#003F38] max-w-[720px] mx-auto mb-6"> Our fresh ginger is supplied as cleaned and sorted raw material, ready to be processed, blended, or further refined in your production line. We work with selected agricultural sources and collection points, emphasizing stability and clarity of specification. </p>

          {/* MINI SPECS */}
          <div className="text-left text-[#003F38] max-w-[720px] mx-auto text-[16px] leading-relaxed">
            <p>
              <span className="font-semibold">Product type:</span> fresh agricultural raw material
            </p>
            <p>
              <span className="font-semibold">Uses:</span> processing, blending, extraction, trading
            </p>
            <p>
              <span className="font-semibold">Supply model:</span> B2B, volume-based planning
            </p>
          </div>
        </div>

      </div>


    </section>
  );
}
