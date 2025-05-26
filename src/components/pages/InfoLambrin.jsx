import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBrush,
  faChartLine,
  faEyeSlash,
  faPalette,
  faShieldAlt,
  faSoap,
  faTemperatureLow,
  faTools,
} from "@fortawesome/free-solid-svg-icons";

export const InfoLambrin = ({ classes = "" }) => {
  return (
    <div className={`${classes}`}>
      <div className="max-w-[990px] mx-auto flex flex-col 1lg:pt-10">
        <div className="w-full aspect-video relative">
          <img
            src="/portada-lambrin.webp"
            alt="Portada Lambrin"
            className="rounded-[20px]"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="text-white font-semibold py-2 md:py-4 text-xl 1sm:text-2xl 3sm:text-4xl md:text-6xl text-center px-5">
              Instalación de Lambrín.
            </h1>
          </div>
        </div>

        <article className="pt-10 1sm:pt-12 md:pt-20">
          <ul className="px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-2 md:gap-x-4 1lg:gap-y-16">
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faBrush}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Estética elegante
              </strong>{" "}
              Transforma tus espacios con texturas y acabados que elevan
              cualquier estilo.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faTemperatureLow}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Aislamiento acústico y térmico
              </strong>{" "}
              Reduce ruido y regula la temperatura para un mayor confort.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faSoap}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Fácil de limpiar
              </strong>{" "}
              Requiere poco mantenimiento y resiste humedad y manchas.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faChartLine}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Valor agregado
              </strong>{" "}
              Mejora estética que incrementa la percepción y valor del inmueble.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Protege tus paredes
              </strong>{" "}
              Evita daños por roces, golpes o manchas.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faEyeSlash}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Oculta imperfecciones
              </strong>{" "}
              Cubre paredes dañadas o irregulares con un acabado limpio.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Diseño personalizable
              </strong>{" "}
              Úsalo como decoración total o parcial según tu estilo.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faTools}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Instalación práctica
              </strong>{" "}
              Fácil de colocar o instalar con ayuda profesional.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
