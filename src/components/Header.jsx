import clsx from "clsx";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="w-full bg-deco-blue h-20 font-sfpd px-4 sticky top-0 z-30">
      <nav className="max-w-[990px] mx-auto h-full flex justify-between items-center relative">
        <button className="md:hidden w-10 p-2 opacity-0 text-2xl col-span-1 col-start-12 flex items-center justify-center">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <a href="/" className="w-28">
          <img
            src="/decostorelogo.svg"
            alt="DecoStore Logo"
            loading="lazy"
            width={112}
            height={40.48}
          />
        </a>

        <div className="text-white font-medium flex md:gap-10 h-full">
          <a href="/" className="hidden md:flex sm:items-center">
            INICIO
          </a>
          <div className="hover-services">
            {/* ---------- */}
            <div className="hidden md:flex md:items-center gap-3">
              <span className="flex items-center text-white">SERVICIOS</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>

            <div
              className={clsx(
                "container-services bg-white absolute top-20 right-0 py-4 px-2 shadow-[0_0_8px_2px_rgba(0,0,0,.1)]",
                {
                  hidden: !isActive,
                  block: isActive,
                }
              )}
            >
              {/* ---------- */}
              <a
                href="/cesped-residencial"
                className="flex items-center gap-3 hover:bg-[#EFF4E7] rounded px-2"
              >
                <img
                  src="/cesped-residencial.avif"
                  alt="icono de cesped residencial"
                  className="w-12"
                />
                <p className="text-base text-deco-green-title">
                  Césped Residencial
                </p>
              </a>
              {/* ---------- */}
              <a
                href="/cesped-deportivo"
                className="flex items-center gap-3 hover:bg-[#EFF4E7] rounded px-2"
              >
                <img
                  src="/cesped-deportivo.avif"
                  alt="icono de cesped deportivo"
                  className="w-12"
                />
                <div className="text-base text-deco-green-title">
                  Césped Deportivo
                </div>
              </a>
              {/* ---------- */}
              <a
                href="/lambrin"
                className="flex items-center gap-3 hover:bg-[#EFF4E7] rounded px-2"
              >
                <img
                  src="/lambrin.avif"
                  alt="icono de lambrin"
                  className="w-12"
                />
                <div className="text-base text-deco-green-title">Lambrín</div>
              </a>
              {/* ---------- */}
              <a
                href="/persianas"
                className="flex items-center gap-3 hover:bg-[#EFF4E7] rounded px-2"
              >
                <img
                  src="/persianas.avif"
                  alt="icono de persianas"
                  className="w-12"
                />
                <div className="text-base text-deco-green-title">Persianas</div>
              </a>
              {/* ---------- */}
              <a
                href="/muros-verdes"
                className="flex items-center gap-3 hover:bg-[#EFF4E7] rounded px-2"
              >
                <img
                  src="/muros-verdes.avif"
                  alt="icono de muros verdes"
                  className="w-12"
                />
                <div className="text-base text-deco-green-title">
                  Muros Verdes
                </div>
              </a>
              {/* ---------- */}
              <a
                href="/pisos-laminados"
                className="flex items-center gap-3 hover:bg-[#EFF4E7] rounded px-2"
              >
                <img
                  src="/pisos-laminados.avif"
                  alt="icono de pisos laminados"
                  className="w-12"
                />
                <div className="text-base text-deco-green-title">
                  Pisos Laminados
                </div>
              </a>
              {/* ---------- */}
            </div>

            {/* <div className="w-56 h-full bg-white fixed top-0 left-0"></div> */}
          </div>
          {/* Boton Barra en Movil */}
          <button
            onClick={() => setIsActive(!isActive)}
            className="bars md:hidden p-2 text-white w-10 text-2xl col-span-1 col-start-12 flex items-center justify-center"
          >
            {isActive ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};
