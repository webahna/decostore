import { LinkButton } from "./LinkButton";
import clsx from "clsx";

const URL =
  "https://wa.me/5212219690933?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20una%20instalaci%C3%B3n.";

export const HeaderHome = () => {
  return (
    <header
      className={clsx(
        "w-full h-[320px] 1sm:h-[375px] 2sm:h-[425px] 3sm:h-[572px] 4sm:h-[680px] md:h-[750px] md:max-h-[750px] overflow-hidden bg-black flex items-center text-white text-center justify-center relative"
      )}
    >
      <picture className="absolute top-0 left-0 w-full h-full z-10">
        <source
          type="image/avif"
          srcSet="
      /hero/portada-hero-320.avif 320w,
      /hero/portada-hero-375.avif 375w,
      /hero/portada-hero-425.avif 425w,
      /hero/portada-hero.avif 1600w
    "
          sizes="(max-width: 425px) 100vw, 1600px"
        />
        <img
          src="/hero/portada-hero.avif"
          alt="hero"
          width="1600"
          height="750"
          className="w-full h-full object-cover object-bottom md:object-center"
          loading="eager"
        />
      </picture>
      <div className="flex flex-col items-center z-20">
        <a
          href="/"
          className="pb-4 1sm:pb-6 2sm:pb-8 md:pb-12 w-[100px] 1sm:w-[120px] md:w-[160px]"
        >
          <img
            src="/decostorelogo.svg"
            alt="logo decostore"
            loading="lazy"
            width={160}
            height={57.7}
          />
        </a>
        <h1 className="font-sigmar w-60 text-xl 1sm:w-72 1sm:text-2xl 2sm:w-[360px] 2sm:text-3xl/10 3sm:w-[500px] 3sm:text-[40px]/12 md:w-[630px] md:text-[52px]/16 1lg:w-[730px] 1lg:text-6xl/20 transition duration-100 ease-out">
          Transforma tu espacio con césped sintético de alta calidad
        </h1>
        <p className="w-76 1sm:w-80 text-xs 1sm:text-sm 3sm:w-[500px] 3sm:text-xl md:w-[550px] md:text-2xl 1lg:w-[730px] pt-3 md:pt-6 pb-5 md:pb-10 transition duration-100 ease-out">
          Instalación profesional, resultados duraderos y cero mantenimiento.
          ¡Ideal para jardines, terrazas, áreas de juego y más!
        </p>
        <LinkButton
          href={URL}
          target="_blank"
          classes="transition duration-100 ease-out bg-[#B33636] text-[#FFFFFF]"
        >
          Cotiza sin compromiso
        </LinkButton>
      </div>
    </header>
  );
};
