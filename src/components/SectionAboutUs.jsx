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
      <div className="flex flex-col 4sm:flex-row justify-between md:max-w-[990px] md:mx-auto text-center md:text-start">
        <div className="px-4 3sm:px-10 lg:px-0 lg:pr-10 flex flex-col md:justify-center">
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
              "text-base md:text-xl text-deco-gray pt-2 md:pt-4 transition-all duration-1000 ease-out",
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
            "w-full aspect-square mt-6 4sm:mt-0 overflow-hidden lg:rounded-[20px] 4sm:rotate-[-2deg] shadow-[0_4px_4px_0_rgba(0,0,0,.25)] transition-all duration-1000 ease-out",
            {
              "translate-y-0 opacity-100 md:scale-100": isImageIntersection,
              "-translate-y-14 md:scale-0 opacity-0": !isImageIntersection,
            }
          )}
        >
          <img
            src="/image-about-us.avif"
            alt="equipo decostore trabajando"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
