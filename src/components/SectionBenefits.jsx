import { useEffect, useState } from "react";
import { MagnifyingGlass } from "./icons/MagnifyingGlass";
import { Typewriter } from "../hooks/TypeWriter";
import { useIntersection } from "../hooks/useIntersection";
import clsx from "clsx";

export const SectionBenefits = ({ classes }) => {
  const [magnifyingGlassWidth, setMagnifyingGlassWidth] = useState(0);
  const [width, setWidth] = useState(null);

  const [benefitsRef, isBenefitsRefIntersecting] = useIntersection({
    threshold: 0.3,
  });

  const [benefitOneRef, isBenefitOneIntersecting] = useIntersection({
    threshold: 0.2,
  });
  const [benefitTwoRef, isBenefitTwoIntersecting] = useIntersection({
    threshold: 0.2,
  });
  const [benefitThreeRef, isBenefitThreeIntersecting] = useIntersection({
    threshold: 0.2,
  });
  const [benefitFourRef, isBenefitFourIntersecting] = useIntersection({
    threshold: 0.2,
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width && width >= 320) setMagnifyingGlassWidth(20);
    if (width && width >= 768) setMagnifyingGlassWidth(40);
  }, [width]);

  return (
    <section id="benefits" className={`w-full ${classes}`} ref={benefitsRef}>
      <div className="md:max-w-[990px] mx-auto">
        <div
          className={clsx(
            "border-2 border-[#5D6652] rounded-lg w-14 h-14 md:h-[100px] md:rounded-[20px] mx-auto flex transition-all duration-300 ease-out",
            {
              "w-full opacity-100": isBenefitsRefIntersecting,
              "md:w-[100px] opacity-0": !isBenefitsRefIntersecting,
            }
          )}
        >
          <div
            className={clsx(
              "aspect-square h-full flex justify-center items-center transition-all duration-300 ease-out",
              {
                "border-r-2 border-[#5D6652]": isBenefitsRefIntersecting,
              }
            )}
          >
            <MagnifyingGlass width={magnifyingGlassWidth} color="#8FB336" />
          </div>
          {isBenefitsRefIntersecting && (
            <Typewriter text="¿Por qué elegir césped sintético?" delay={500} />
          )}
        </div>

        <div className="pt-8 md:pt-16 flex justify-center gap-4 1sm:gap-6 md:gap-20">
          <div className="flex flex-col gap-6 ">
            {/* ---------- */}
            <div
              ref={benefitOneRef}
              className={clsx(
                "text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold transition duration-300 ease-out",
                {
                  "opacity-0 -translate-x-20": !isBenefitOneIntersecting,
                  "opacity-100 -translate-x-0": isBenefitOneIntersecting,
                }
              )}
            >
              01.{" "}
              <span className="text-base 3sm:text-xl md:text-4xl text-deco-gray font-normal whitespace-pre">
                Siempre verde,
                <br />
                todo el año.
              </span>
            </div>
            {/* ---------- */}
            <div
              ref={benefitThreeRef}
              className={clsx(
                "text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold transition duration-300 ease-out",
                {
                  "opacity-0 -translate-x-20": !isBenefitThreeIntersecting,
                  "opacity-100 -translate-x-0": isBenefitThreeIntersecting,
                }
              )}
            >
              03.{" "}
              <span className="text-base 3sm:text-xl md:text-4xl text-deco-gray font-normal whitespace-pre">
                Fácil de limpiar y
                <br />
                resistente al clima.
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            {/* ---------- */}
            <div
              ref={benefitTwoRef}
              className={clsx(
                "text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold transition duration-300 ease-out",
                {
                  "opacity-0 -translate-x-20": !isBenefitTwoIntersecting,
                  "opacity-100 -translate-x-0": isBenefitTwoIntersecting,
                }
              )}
            >
              02.{" "}
              <span className="text-base 3sm:text-xl md:text-4xl text-deco-gray font-normal whitespace-pre">
                Ahorro de agua y
                <br />
                mantenimiento.
              </span>
            </div>
            {/* ---------- */}
            <div
              ref={benefitFourRef}
              className={clsx(
                "text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold transition duration-300 ease-out",
                {
                  "opacity-0 -translate-x-20": !isBenefitFourIntersecting,
                  "opacity-100 -translate-x-0": isBenefitFourIntersecting,
                }
              )}
            >
              04.{" "}
              <span className="text-base 3sm:text-xl md:text-4xl text-deco-gray font-normal whitespace-pre">
                Seguro para niños
                <br />y mascotas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
