import clsx from "clsx";
import { useIntersection } from "../hooks/useIntersection";
import { Title } from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export const SectionInstallations = ({ classes }) => {
  const [ourServicesRef, isOurServicesIntersecting] = useIntersection({
    threshold: 1,
  });
  const [titleRef, isTitleIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [subTitleRef, isSubTitleRef] = useIntersection({
    threshold: 1,
  });

  const [cespedResidRef, isCespedResidIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [cespedDepoRef, isCespedDepoIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [lambrinRef, isLambrinIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [persianasRef, isPersianasIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [murosVerdesRef, isMurosVerdesIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [pisosLamRef, isPisosLamIntersecting] = useIntersection({
    threshold: 0.5,
  });

  return (
    <section id="installations" className={`w-full  px-4 ${classes}`}>
      <div className="md:max-w-[990px] md:mx-auto text-center py-20 md:py-[120px]">
        <p
          ref={ourServicesRef}
          className={clsx(
            "text-deco-green font-semibold transition-all duration-1000 ease-out",
            {
              "-translate-y-14 opacity-0": !isOurServicesIntersecting,
              "-translate-y-0 opacity-100": isOurServicesIntersecting,
            }
          )}
        >
          NUESTROS SERVICIOS
        </p>
        <Title
          ref={titleRef}
          classes={clsx({
            "-translate-y-14 opacity-0": !isTitleIntersecting,
            "-translate-y-0 opacity-100": isTitleIntersecting,
          })}
        >
          Elige la instalación
          <br />
          que necesitas.
        </Title>
        <p
          ref={subTitleRef}
          className={clsx(
            "text-base md:text-xl transition-all duration-1000 ease-out text-deco-gray",
            {
              "-translate-y-14 opacity-0": !isSubTitleRef,
              "-translate-y-0 opacity-100": isSubTitleRef,
            }
          )}
        >
          Convertimos espacios comunes en lugares extraordinarios.
        </p>

        <div className="grid grid-cols-6 md:grid-cols-3 mt-4 md:mt-16 gap-y-8 gap-x-6 md:gap-x-0 max-w-[650px] mx-auto">
          {/* ---------- */}
          <div
            ref={cespedResidRef}
            className={clsx(
              "flex flex-col items-center col-span-2 col-start-2 md:col-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isCespedResidIntersecting,
                "-translate-y-0 opacity-100": isCespedResidIntersecting,
              }
            )}
          >
            <img
              src="/cesped-residencial.avif"
              alt="cesped residencial icono"
              className="w-[120px]"
              width={120}
              height={120}
            />
            <h3 className="text-base md:text-xl font-semibold text-deco-green-title">
              Césped Residencial
            </h3>
            <a
              href="/cesped-residencial"
              className="pt-2 text-sm font-bold text-deco-green-title"
            >
              Ver más
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-base pl-2"
              />
            </a>
          </div>

          {/* ---------- */}

          <div
            ref={cespedDepoRef}
            className={clsx(
              "flex flex-col items-center col-span-2 col-start-4 md:col-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isCespedDepoIntersecting,
                "-translate-y-0 opacity-100": isCespedDepoIntersecting,
              }
            )}
          >
            <img
              src="/cesped-deportivo.avif"
              alt="cesped deportivo icono"
              className="w-[120px]"
              width={120}
              height={120}
            />
            <h3 className="text-base md:text-xl font-semibold text-deco-green-title">
              Césped Deportivo
            </h3>
            <a
              href="/cesped-deportivo"
              className="pt-2 text-sm font-bold text-deco-green-title"
            >
              Ver más
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-base pl-2"
              />
            </a>
          </div>

          {/* ---------- */}

          <div
            ref={lambrinRef}
            className={clsx(
              "flex flex-col items-center col-span-2 col-end-4 md:col-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isLambrinIntersecting,
                "-translate-y-0 opacity-100": isLambrinIntersecting,
              }
            )}
          >
            <img
              src="/lambrin.avif"
              alt="lambrin icono"
              className="w-[120px]"
              width={120}
              height={120}
            />
            <h3 className="text-base md:text-xl font-semibold text-deco-green-title">
              Lambrín
            </h3>
            <a
              href="/lambrin"
              className="pt-2 text-sm font-bold text-deco-green-title"
            >
              Ver más
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-base pl-2"
              />
            </a>
          </div>

          {/* ---------- */}

          <div
            ref={persianasRef}
            className={clsx(
              "flex flex-col items-center col-span-2 col-end-6 md:col-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isPersianasIntersecting,
                "-translate-y-0 opacity-100": isPersianasIntersecting,
              }
            )}
          >
            <img
              src="/persianas.avif"
              alt="persianas icono"
              className="w-[120px]"
              width={120}
              height={120}
            />
            <h3 className="text-base md:text-xl font-semibold text-deco-green-title">
              Persianas
            </h3>
            <a
              href="/persianas"
              className="pt-2 text-sm font-bold text-deco-green-title"
            >
              Ver más
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-base pl-2"
              />
            </a>
          </div>

          {/* ---------- */}

          <div
            ref={murosVerdesRef}
            className={clsx(
              "flex flex-col items-center col-span-2 col-end-4 md:col-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isMurosVerdesIntersecting,
                "-translate-y-0 opacity-100": isMurosVerdesIntersecting,
              }
            )}
          >
            <img
              src="/muros-verdes.avif"
              alt="muros verdes icono"
              className="w-[120px]"
              width={120}
              height={120}
            />
            <h3 className="text-base md:text-xl font-semibold text-deco-green-title">
              Muros verdes
            </h3>
            <a
              href="/persianas"
              className="pt-2 text-sm font-bold text-deco-green-title"
            >
              Ver más
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-base pl-2"
              />
            </a>
          </div>
          {/* ---------- */}

          <div
            ref={pisosLamRef}
            className={clsx(
              "flex flex-col items-center col-span-2 col-end-6 md:col-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isPisosLamIntersecting,
                "-translate-y-0 opacity-100": isPisosLamIntersecting,
              }
            )}
          >
            <img
              src="/pisos-laminados.avif"
              alt="pisos laminados icono"
              className="w-[120px]"
              width={120}
              height={120}
            />
            <h3 className="text-base md:text-xl font-semibold text-deco-green-title">
              Pisos Laminados
            </h3>
            <a
              href="/persianas"
              className="pt-2 text-sm font-bold text-deco-green-title"
            >
              Ver más
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-base pl-2"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
