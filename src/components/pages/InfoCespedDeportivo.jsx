import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faScrewdriverWrench,
  faCalendarDays,
  faHouseMedicalCircleXmark,
  faCloudMoonRain,
  faEye,
  faRankingStar,
  faRotate,
  faLeaf,
} from "@fortawesome/free-solid-svg-icons";

export const InfoCespedDeportivo = ({ classes = "" }) => {
  return (
    <div className={`${classes}`}>
      <div className="max-w-[990px] mx-auto flex flex-col 1lg:pt-10">
        <div className="relative">
          <img
            src="/portada-cesped-deportivo.webp"
            alt="Portada Cesped Deportivo"
            className="w-full 1lg:rounded-lg"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="text-white font-semibold py-2 md:py-4 text-2xl 1sm:text-3xl md:text-6xl text-center px-5">
              Instalación de césped sintético para canchas deportivas.
            </h1>
          </div>
        </div>

        <article className="pt-10 1sm:pt-12 md:pt-20">
          <ul className="px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-2 md:gap-x-4 1lg:gap-y-16">
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faShieldHalved}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Resistencia al desgaste
              </strong>{" "}
              Soporta tráfico intenso, clima y uso continuo sin deterioro.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Rendimiento constante
              </strong>{" "}
              Perfecto para entrenamientos constantes sin interrupciones.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faScrewdriverWrench}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Ahorro en mantenimiento
              </strong>{" "}
              No requiere riego ni mantenimiento costoso como el pasto natural.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faHouseMedicalCircleXmark}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Mayor seguridad al jugar
              </strong>{" "}
              Reduce lesiones comunes como esguinces o torceduras.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faCloudMoonRain}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Uso bajo cualquier clima
              </strong>{" "}
              Se puede usar incluso después de la lluvia sin problemas.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faEye}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Aspecto profesional duradero
              </strong>{" "}
              Verde uniforme y atractivo durante todo el año.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faRankingStar}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Versatilidad deportiva
              </strong>{" "}
              Compatible con múltiples deportes y actividades.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faRotate}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Uso continuo sin desgaste
              </strong>{" "}
              No necesita tiempo de recuperación como el césped natural.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Solución sustentable y ecológica
              </strong>{" "}
              Ahorra agua y evita el uso de productos químicos.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
