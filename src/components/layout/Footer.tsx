import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        w-full
        bg-[#004035]
        text-[#E6FFCF]
        pt-10 pb-14
      "
    >
      {/* DIVIDER LINE */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="w-full h-[1px] bg-[#E8FAD9]/40 mb-10"></div>
      </div>

      <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2">

        {/* LEFT SIDE */}
        <div>
          <img src="/logo-bottom.svg" className="w-40 mb-4" />

          <p className="text-sm opacity-90 mb-4">
            Agricultural Raw Material Supply & Trade Partner.
          </p>

          <p className="text-sm opacity-90">Email: hello@kalisloka.com</p>
          <p className="text-sm opacity-90">
            Phone / WhatsApp: +62-812-3456-7890
          </p>
        </div>

        {/* RIGHT SIDE (OFFICE LOCATION) */}
        {/* RIGHT SIDE — Office Location + Copyright */}
        <div
          className="
            w-full
            md:w-auto
            flex flex-col
            justify-center md:justify-end
            items-end
            mt-10 md:mt-0
            text-center md:text-right
          "
        >
          <p className="text-sm opacity-80">Office Location</p>
          <p className="text-sm font-semibold opacity-90">Cianjur, West Java</p>

          {/* SPACING */}
          <div className="h-6"></div>

          {/* COPYRIGHT */}
          <p className="text-sm opacity-70">© 2025 Kalisloka. All rights reserved.</p>
          <p className="text-sm opacity-70">
            Legal entity registered as PT Sujana Kalis Loka.
          </p>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
