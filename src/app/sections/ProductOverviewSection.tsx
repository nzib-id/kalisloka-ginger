/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

const IMAGES = [
  "/images/ginger.svg",
  "/images/banana.svg",
  "/images/ginger.svg",
];

export default function ProductOverviewSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % IMAGES.length);
  const prev = () => setIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);

  const [slideDir, setSlideDir] = useState(null);
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

        {/* TITLE */}
        <h2 className="font-heading text-[38px] sm:text-[46px] md:text-[52px] font-bold text-[#003F38] mb-12">
          Product Overview
        </h2>

        {/* SLIDER WRAPPER                */}
        <div className="w-full relative overflow-visible">

          <div
            className="
              w-full flex items-center justify-center
              gap-2 sm:gap-4 md:gap-8
            "
          >

            {/* LEFT SIDE IMAGE               */}
            <div
              className="group relative -translate-x-[25%]"
              style={{ width: "clamp(170px, 30vw, 300px)" }}
            >
              {/* OUTER FRAME */}
              <div
                className="
                  border-[clamp(3px,0.8vw,6px)] border-[#003F38]
                  rounded-[clamp(22px,4vw,40px)]
                  p-[clamp(3px,0.7vw,7px)]
                  overflow-hidden
                  transition-all duration-300
                  group-hover:border-[#005947]
                "
              >
                {/* INNER FRAME + IMAGE */}
                <div className="relative rounded-[clamp(18px,3.5vw,32px)] overflow-hidden">

                  {/* OVERLAY */}
                  <a href=""
                    className="
                      absolute inset-0 z-20 rounded-[inherit]
                      bg-black/0 backdrop-blur-0
                      opacity-0
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-black/25
                      group-hover:backdrop-blur-sm
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-[#E6FFCF] text-[13px] sm:text-[15px]">
                      Click to view detail
                    </span>
                  </a>

                  {/* IMAGE */}
                  <img
                    src={IMAGES[(index - 1 + IMAGES.length) % IMAGES.length]}
                    alt="Left"
                    className="
                      w-full h-full object-cover
                      scale-[1.03] opacity-80
                      transition-all duration-300
                      group-hover:scale-[1.07]
                    "
                  />
                </div>
              </div>
            </div>

            {/* LEFT ARROW                    */}
            <button
              onClick={prev}
              className="
                h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16
                flex items-center justify-center
                rounded-full bg-[#E6FFCF]
                shadow-sm mr-2
              "
            >
              <img src="/icons/arrow-left.svg" />
            </button>


            {/* CENTER IMAGE */}
            <div
              className="
                group relative
                w-[clamp(270px,40vw,380px)]
                border-[clamp(3px,0.8vw,6px)] border-[#003F38]
                rounded-[clamp(22px,4vw,40px)]
                p-[clamp(3px,0.7vw,7px)]
                transition-all duration-300
                group-hover:scale-[1.04]
                group-hover:border-[#005947]
                group-hover:shadow-[0_0_22px_rgba(0,64,53,0.45)]
              "
            >

              {/* INNER FRAME (TEMPAT GAMBAR + OVERLAY) */}
              <div
                className="
                  relative
                  rounded-[clamp(18px,3.5vw,32px)]
                  overflow-hidden
                  z-10
                "
              >

                {/* OVERLAY — hanya di area gambar */}
                <a href=""
                  className="
                    absolute inset-0 z-20
                    flex items-center justify-center
                    bg-black/0 backdrop-blur-0
                    opacity-0
                    rounded-[inherit]
                    transition-all duration-300
                    group-hover:bg-black/25
                    group-hover:backdrop-blur-sm
                    group-hover:opacity-100
                  "
                >
                  <span className="text-[#E6FFCF] text-[13px] sm:text-[15px]">
                    Click to view detail
                  </span>
                </a>

                {/* IMAGE */}
                <img
                  src={IMAGES[index]}
                  alt="Main"
                  className="
                    w-full h-full object-cover
                    scale-[1.03]
                    transition-all duration-300
                    group-hover:scale-[1.12]
                  "
                />
              </div>
            </div>


            {/* RIGHT ARROW                   */}
            <button
              onClick={next}
              className="
                h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16
                flex items-center justify-center
                rounded-full bg-[#E6FFCF]
                shadow-sm ml-2
              "
            >
              <img src="/icons/arrow-right.svg" />
            </button>

            {/* RIGHT SIDE IMAGE              */}
            <div
              className="group relative translate-x-[25%]"
              style={{ width: "clamp(170px, 30vw, 300px)" }}
            >
              <div
                className="
                  border-[clamp(3px,0.8vw,6px)] border-[#003F38]
                  rounded-[clamp(22px,4vw,40px)]
                  p-[clamp(3px,0.7vw,7px)]
                  overflow-hidden
                  transition-all duration-300
                  group-hover:border-[#005947]
                "
              >
                <div className="relative rounded-[clamp(18px,3.5vw,32px)] overflow-hidden">

                  {/* OVERLAY */}
                  <a href=""
                    className="
                      absolute inset-0 z-20 rounded-[inherit]
                      bg-black/0 backdrop-blur-0 opacity-0
                      flex items-center justify-center
                      transition-all duration-300
                      group-hover:bg-black/25
                      group-hover:backdrop-blur-sm
                      group-hover:opacity-100
                    "
                  >
                    <span className="text-[#E6FFCF] text-[13px] sm:text-[15px]">
                      Click to view detail
                    </span>
                  </a>

                  <img
                    src={IMAGES[(index + 1) % IMAGES.length]}
                    alt="Right"
                    className="
                      w-full h-full object-cover
                      scale-[1.03] opacity-80
                      transition-all duration-300
                      group-hover:scale-[1.07]
                    "
                  />
                </div>
              </div>
            </div>

          </div>
        </div>


        <div className="container mx-auto text-left mt-12 md:mt-16">
          {/* DESCRIPTION */} <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#003F38] max-w-[720px] mx-auto mb-6"> Our fresh ginger is supplied as cleaned and sorted raw material, ready to be processed, blended, or further refined in your production line. We work with selected agricultural sources and collection points, emphasizing stability and clarity of specification. </p>

          {/* MINI SPECS */}
          <div className="text-left text-[#003F38] max-w-[720px] mx-auto text-[15px] leading-relaxed">
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
