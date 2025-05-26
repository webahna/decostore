import { useEffect, useState } from "react";
import { MagnifyingGlass } from "./icons/MagnifyingGlass";
import { Typewriter } from "../hooks/TypeWriter";

export const SectionBenefits = ({ classes }) => {
  const [magnifyingGlassWidth, setMagnifyingGlassWidth] = useState(0);
  const [width, setWidth] = useState(null);

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
    <section id="benefits" className={`w-full ${classes}`}>
      <div className="md:max-w-[990px] mx-auto">
        <div className="w-full border-2 border-deco-gray rounded-lg h-14 md:h-[100px] md:rounded-[20px] mx-auto flex">
          <div className="aspect-square h-full flex justify-center items-center border-r-2 border-deco-gray">
            <MagnifyingGlass width={magnifyingGlassWidth} color="#8FB336" />
          </div>

          <Typewriter text="¿Por qué elegir césped sintético?" delay={500} />
        </div>

        <div className="pt-8 md:pt-16 flex justify-center gap-4 1sm:gap-6 md:gap-20">
          <div className="flex flex-col gap-6 ">
            {/* ---------- */}
            <div className="text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold">
              01.{" "}
              <span className="text-base 3sm:text-xl md:text-4xl text-deco-gray font-normal whitespace-pre">
                Siempre verde,
                <br />
                todo el año.
              </span>
            </div>
            {/* ---------- */}
            <div className="text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold">
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
            <div className="text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold">
              02.{" "}
              <span className="text-base 3sm:text-xl md:text-4xl text-deco-gray font-normal whitespace-pre">
                Ahorro de agua y
                <br />
                mantenimiento.
              </span>
            </div>
            {/* ---------- */}
            <div className="text-4xl 3sm:text-5xl md:text-6xl text-deco-green-title flex flex-col gap-1 font-bold transition duration-300 ease-out">
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
