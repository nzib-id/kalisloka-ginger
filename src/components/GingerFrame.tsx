/* eslint-disable @next/next/no-img-element */
"use client";

interface GingerFrameProps {
  src: string;
  halfCut?: "left" | "right" | null;
}

export default function GingerFrame({ src, halfCut = null }: GingerFrameProps) {
  return (
    <div
      className={`
        group relative
        w-[clamp(180px,40vw,380px)]
        rounded-[clamp(22px,4vw,40px)]
        border-[clamp(4px,1vw,8px)] border-[#003F38]
        p-[clamp(4px,1vw,10px)]
        overflow-visible
        transition-transform duration-300
        hover:scale-[1.04]
        ${halfCut === "left" ? "-translate-x-[26%]" : ""}
        ${halfCut === "right" ? "translate-x-[26%]" : ""}
      `}
    >
      {/* Overlay covers border + image */}
      <div
        className="
          absolute inset-0 z-20
          rounded-[clamp(22px,4vw,40px)]
          bg-black/0
          group-hover:bg-black/15
          group-hover:backdrop-blur-[3px]
          group-hover:shadow-[0_0_22px_rgba(0,64,53,0.45)]
          transition-all duration-300
          pointer-events-none
        "
      />

      <div
        className="
          relative z-10
          rounded-[clamp(18px,3.5vw,32px)]
          overflow-hidden
        "
      >
        <img
          src={src}
          alt="Ginger"
          className="
            w-full h-full object-cover
            scale-[1.03]
            group-hover:scale-[1.08]
            transition-all duration-300
          "
        />
      </div>
    </div>
  );
}
