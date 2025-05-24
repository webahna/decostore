import { LinkButton } from "./LinkButton";
// import { useIntersection } from "../hooks/useIntersection";
import clsx from "clsx";

export const HeaderHome = () => {
  // const [headerHomeRef, isHeaderHomeIntersecting] = useIntersection

  return (
    <header
      // ref={headerHomeRef}
      className={clsx(
        "w-full h-[320px] 1sm:h-[375px] 2sm:h-[425px] 3sm:h-[572px] 4sm:h-[680px] md:h-[750px] md:max-h-[750px] overflow-hidden bg-black flex items-center text-white text-center justify-center relative"
        // {
        //   "opacity-0": !isHeaderHomeIntersecting,
        //   "opacity-100": isHeaderHomeIntersecting,
        // }
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
          className={clsx(
            "pb-4 1sm:pb-6 2sm:pb-8 md:pb-12 transition duration-100 ease-out"
            // {
            //   "-translate-y-32 opacity-0": !isHeaderHomeIntersecting,
            //   "-translate-y-0 opacity-100": isHeaderHomeIntersecting,
            // }
          )}
        >
          <img
            src="/decostorelogo.png"
            alt="DecoStore Logo"
            className="w-28 1sm:w-32 md:w-40 1lg:w-44"
            width={44}
            height={17} // Ajustado proporcionalmente (44/180 * 70)
            loading="lazy"
          />
        </a>
        <h1
          className={clsx(
            "font-sigmar w-60 text-xl 1sm:w-72 1sm:text-2xl 2sm:w-[360px] 2sm:text-3xl/10 3sm:w-[500px] 3sm:text-[40px]/12 md:w-[630px] md:text-[52px]/16 1lg:w-[730px] 1lg:text-6xl/20 transition duration-100 ease-out"
            // {
            //   "scale-0 opacity-0": !isHeaderHomeIntersecting,
            //   "scale-100 opacity-100": isHeaderHomeIntersecting,
            // }
          )}
        >
          Transforma tu espacio con césped sintético de alta calidad
        </h1>
        <p
          className={clsx(
            "w-76 1sm:w-80 text-xs 1sm:text-sm 3sm:w-[500px] 3sm:text-xl md:w-[550px] md:text-2xl 1lg:w-[730px] pt-3 md:pt-6 pb-5 md:pb-10 transition duration-100 ease-out"
            // {
            //   "scale-100 opacity-100": isHeaderHomeIntersecting,
            //   "scale-0 opacity-0": !isHeaderHomeIntersecting,
            // }
          )}
        >
          Instalación profesional, resultados duraderos y cero mantenimiento.
          ¡Ideal para jardines, terrazas, áreas de juego y más!
        </p>
        <LinkButton
          href="/"
          classes={clsx(
            "transition duration-100 ease-out bg-[#B33636] text-[#FFFFFF]"
            // {
            //   "-translate-y-32 opacity-0": !isHeaderHomeIntersecting,
            //   "-translate-y-0 opacity-100": isHeaderHomeIntersecting,
            // }
          )}
        >
          Cotiza sin compromiso
        </LinkButton>
      </div>
    </header>
  );
};
