import clsx from "clsx";
import { useIntersection } from "../hooks/useIntersection";
import { Title } from "./Title";

export const SectionAboutUs = ({ classes }) => {
  const [titleRef, isTitleIntersection] = useIntersection({
    threshold: 1.0,
  });
  const [subTitleRef, isSubTitleIntersection] = useIntersection({
    threshold: 1.0,
  });
  const [imageRef, isImageIntersection] = useIntersection({ threshold: 0.3 });

  return (
    <section id="aboutUs" className={`w-full ${classes}`}>
      <div className="flex flex-col 4sm:flex-row items-center md:max-w-[990px] md:mx-auto text-center md:text-start 4sm:gap-5">
        <div className=" lg:pr-10 flex flex-col md:justify-center">
          <Title
            ref={titleRef}
            classes={clsx({
              "translate-y-0 opacity-100": isTitleIntersection,
              "-translate-y-14 md:-translate-y-32 opacity-0":
                !isTitleIntersection,
            })}
          >
            Creamos espacios funcionales, estéticos y sustentables.
          </Title>
          <p
            ref={subTitleRef}
            className={clsx(
              "text-base md:text-xl text-deco-gray pt-2 md:pt-4 transition-all duration-500  ease-out",
              {
                "translate-y-0 opacity-100": isSubTitleIntersection,
                "-translate-y-14 md:-translate-y-32 opacity-0":
                  !isSubTitleIntersection,
              }
            )}
          >
            Somos especialistas en transformar entornos con diseño inteligente,
            materiales de calidad y compromiso con el medio ambiente.
          </p>
        </div>

        <div
          ref={imageRef}
          className={clsx(
            "w-[280px] 1sm:w-[335px] 4sm:min-w-[280px] lg:min-w-[400px] aspect-square mt-6 4sm:mt-0 overflow-hidden lg:rounded-[20px]  shadow-[0_4px_4px_0_rgba(0,0,0,.25)] transition-all duration-500  ease-out bg-amber-300",
            {
              "translate-y-0 opacity-100 md:scale-100": isImageIntersection,
              "-translate-y-14 md:scale-0 opacity-0": !isImageIntersection,
            }
          )}
        >
          <picture>
            <source
              type="image/avif"
              srcSet="
                /image-about-us-280px-x2.avif 560w,
                /image-about-us-400px-x2.avif 800w
              "
              sizes="
              (min-width: 976px) 400px,
              280px
            "
            />
            <img
              src="/image-about-us-400px-x2.avif"
              alt="DecoStore instalando cesped residencial"
              width="400"
              height="400"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
