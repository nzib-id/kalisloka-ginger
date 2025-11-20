/* eslint-disable @next/next/no-img-element */
"use client";

const grades = [
  {
    title: "Grade A",
    image: "/images/ginger.svg",
    list: [
      "Larger roots",
      "Cleaner appearance",
      "Minimal visible defects",
      "Suitable where appearance and size are relevant",
    ],
  },
  {
    title: "Grade B",
    image: "/images/ginger.svg",
    list: [
      "Medium size roots",
      "Natural surface marks allowed",
      "Good for processing where appearance is less critical",
    ],
  },
];

export default function GradesSizingSection() {
  return (
    <section
      id="grades"
      className="w-full container mx-auto bg-[#E6FFCF] pt-40 md:pt-24 pb-20 md:pb-28"
    >
      {/* TITLE */}
      <div className="container mx-auto px-6 md:px-10 text-center max-w-4xl">
        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] xl:text-[96px] font-heading font-semibold text-[#004035] mb-4 tracking-tight">
          Grades & Sizing
        </h2>
        <p className=" text-[15px] md:text-[16px] mb-12">
          We provide grading to support consistent processing and trading.
        </p>
      </div>

      {/* GRID PRODUCT */}
      <div className="container mx-auto px-6 md:px-10">
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-10
          place-items-start
          items-stretch
          max-w-[850px]
          mx-auto
                  ">
          {grades.map((item, idx) => (
            <div
              key={idx}
              className="
                group
                w-full
                max-w-[460px]
                rounded-3xl
                border-[4px] border-[#004035]

                px-6 py-10
                transition-all duration-300 ease-in-out

                hover:bg-[#004035]
                hover:text-[#E6FFCF]
                hover:border-[#004035]
                hover:shadow-xl
              "
            >
              <div className="flex flex-col items-center">

                {/* IMAGE WRAPPER */}
                <div
                  className="
                    rounded-3xl
                    shadow-md overflow-hidden mb-6
                    border-[3px] border-[#004035]
                    transition-all duration-300

                    group-hover:border-[#E6FFCF]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      w-32 md:w-44 h-32 md:h-44 object-cover
                      transition-all duration-300
                      group-hover:brightness-110
                    "
                  />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    text-xl md:text-2xl font-heading font-bold text-[#004035]
                    text-center mb-8
                    transition-all duration-300

                    group-hover:text-[#E6FFCF]
                  "
                >
                  {item.title}
                </h3>


                {/* LIST */}
              <ul className="text-[14px] md:text-[15px] space-y-4 text-center">
                {item.list.map((point, i) => (
                  <div key={i}>
                    <li>{point}</li>

                    {/* Separator (jangan render setelah item terakhir) */}
                    {i < item.list.length - 1 && (
                      <div className="h-px bg-[#003F38]/20 w-3/4 mx-auto mt-4" />
                    )}
                  </div>
                ))}
              </ul>




              </div>
            </div>

          ))}
        </div>
      </div>
    </section>
  );
}
