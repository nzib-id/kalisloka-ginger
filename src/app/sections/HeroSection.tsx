/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="
        relative w-full
        min-h-[110vh] sm:min-h-[110vh] md:min-h-[120vh] lg:min-h-[125vh]
        flex items-center
        overflow-hidden
      "
    >
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/hero-ginger.png"
        alt="Fresh Ginger Background"
        className="
          absolute inset-0
          w-full h-full
          object-cover
          object-[center_10%]

          sm:object-[center_5%]

          md:object-[center_10%]
          lg:object-[center_15%]

        "
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/45"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto">
        <div
          className="
            max-w-[750px]
            text-left
            lg:mt-10
            h-screen flex flex-col justify-center pb-[100px] lg:pb-[150px]
          "
        >
          {/* HEADLINE */}
          <h1
            className="
              text-white
              font-heading
              text-[32px] sm:text-[42px] md:text-[54px] lg:text-[62px]
              font-bold
              leading-tight
              tracking-tight
              mb-6
            "
          >
            Fresh Ginger– Commercial <br />
            Raw Material Supply
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              text-white text-[14px] sm:text-[15px] md:text-[16px]
              leading-relaxed
              max-w-[720px]
              mb-10
            "
          >
            <span className="font-semibold">Kalisloka</span> supplies fresh ginger as agricultural raw material for food, beverage, herbal, and wellness production.
            <br />
            We focus on clear specifications, consistent handling, and practical cooperation for
            commercial buyers.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {/* Primary CTA */}
            <Button
              variant="white"
              className="
                px-6 py-3 text-sm font-semibold
                rounded-full
                shadow-md
                hover:opacity-90 transition
              "
            >
              Request Specifications & Pricing
            </Button>

            {/* Outline CTA */}
            <Button
              variant="outline-light"
              className="
                px-6 py-3 text-sm font-semibold
                rounded-full
                border border-white
                text-white
                hover:bg-white/10 transition
              "
            >
              Ask About Trial Shipment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
