import clsx from "clsx";
import { Title } from "./Title";
import { LinkButton } from "./LinkButton";
import { useIntersection } from "../hooks/useIntersection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTurnDown } from "@fortawesome/free-solid-svg-icons";

export const SectionMap = ({ classes = "" }) => {
  const [titleRef, isTitleIntersecting] = useIntersection({});
  const [subTitleRef, isSubTitleIntersecting] = useIntersection({
    threshold: 0.5,
  });

  const [imageRef, isImageIntersecting] = useIntersection({
    threshold: 0.6,
  });

  return (
    <section id="map" className={`${classes}`}>
      <div className="w-full max-w-[990px] mx-auto flex flex-col items-center 3sm:flex-row text-center 1lg:text-start">
        <div className="px-4 3sm:px-10 3sm:w-3/6 z-20">
          <Title
            ref={titleRef}
            classes={clsx({
              "-translate-y-14 opacity-0": !isTitleIntersecting,
              "-translate-y-0 opacity-100": isTitleIntersecting,
            })}
          >
            Visítanos en nuestra sucursal.
          </Title>
          <p
            ref={subTitleRef}
            className={clsx(
              "pt-1 pb-6 1lg:pb-12 transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isSubTitleIntersecting,
                "-translate-y-0 opacity-100": isSubTitleIntersecting,
              }
            )}
          >
            Calle 117 B Poniente, Heroica Puebla de Zaragoza, Puebla.
          </p>
          <LinkButton
            href="https://maps.app.goo.gl/9UfLiVPJ6GSSQpXQ9"
            target={"_blank"}
            classes={clsx(
              "bg-[#B33636] text-[#FFFFFF] transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isSubTitleIntersecting,
                "-translate-y-0 opacity-100": isSubTitleIntersecting,
              }
            )}
          >
            <FontAwesomeIcon icon={faTurnDown} className="-rotate-90" />
            <span className="pl-2 1lg:pl-4">Como llegar</span>
          </LinkButton>
        </div>
        <div
          ref={imageRef}
          className={clsx(
            "w-full 3sm:w-3/6 h-40 3sm:h-auto 3sm:aspect-square overflow-hidden z-10 1lg:rounded-3xl 1lg:rotate-[7.34deg] transition-all duration-1000 ease-out",
            {
              "-translate-x-20 md:scale-0 opacity-0": !isImageIntersecting,
              "-translate-x-0 md:scale-100 opacity-100": isImageIntersecting,
            }
          )}
        >
          <img
            src="/map.avif"
            alt="imagen de la ubicacion en mapa"
            width={600}
            height={600}
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
