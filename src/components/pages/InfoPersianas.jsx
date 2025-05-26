import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faChair,
  faFire,
  faHandBackFist,
  faLock,
  faPalette,
  faShieldHalved,
  faSun,
  faVolumeLow,
} from "@fortawesome/free-solid-svg-icons";

export const InfoPersianas = ({ classes = "" }) => {
  return (
    <div className={`${classes}`}>
      <div className="max-w-[990px] mx-auto flex flex-col 1lg:pt-10">
        <div className="w-full aspect-video relative">
          <img
            src="/portada-persianas.webp"
            alt="Portada Persianas"
            className="rounded-[20px]"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="text-white font-semibold py-2 md:py-4 text-xl 1sm:text-2xl 3sm:text-4xl md:text-6xl text-center px-5">
              Instalación de Persianas.
            </h1>
          </div>
        </div>

        <article className="pt-10 1sm:pt-12 md:pt-20">
          <ul className="px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-2 md:gap-x-4 1lg:gap-y-16">
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faSun}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Control de luz natural
              </strong>{" "}
              Disfruta de luz intensa, suave o total oscuridad según la hora del
              día.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faChair}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Protección de muebles y pisos
              </strong>{" "}
              Controla la exposición solar y alarga la vida útil de tus objetos.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faLock}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Privacidad garantizada
              </strong>{" "}
              Bloquea la vista desde el exterior, ideal para zonas urbanas.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Seguridad adicional
              </strong>{" "}
              Persiana cerrada es igual a más seguridad para intrusos.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faFire}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Aislamiento térmico
              </strong>{" "}
              Ahorra energía manteniendo el calor fuera en verano y dentro en
              invierno.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Estética y decoración
              </strong>{" "}
              Hay un diseño de persiana para cada espacio y gusto.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faVolumeLow}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Aislamiento acústico
              </strong>{" "}
              Perfecto si vives cerca de avenidas o zonas concurridas.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faBroom}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Fácil mantenimiento
              </strong>{" "}
              Limpieza rápida y sencilla. Solo necesitas un paño o plumero.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faHandBackFist}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Durabilidad
              </strong>{" "}
              Hechas para durar. Materiales resistentes que te acompañan por
              años.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
