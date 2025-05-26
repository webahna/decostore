import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faFaceLaughBeam,
  faFan,
  faHandHoldingDollar,
  faLeaf,
  faTemperatureThreeQuarters,
  faUpDown,
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

export const InfoMurosVerdes = ({ classes = "" }) => {
  return (
    <div className={`${classes}`}>
      <div className="max-w-[990px] mx-auto flex flex-col 1lg:pt-10">
        <div className="w-full aspect-video relative">
          <img
            src="/portada-muros-verdes.webp"
            alt="Portada Muros Verdes"
            className="rounded-[20px]"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="text-white font-semibold py-2 md:py-4 text-xl 1sm:text-2xl 3sm:text-4xl md:text-6xl text-center px-5">
              Instalación de Muros Verdes.
            </h1>
          </div>
        </div>

        <article className="pt-10 1sm:pt-12 md:pt-20">
          <ul className="px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-2 md:gap-x-4 1lg:gap-y-16">
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Filtrado natural
              </strong>{" "}
              Las plantas eliminan contaminantes como formaldehído o benceno.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faTemperatureThreeQuarters}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Aislamiento térmico y acústico
              </strong>{" "}
              Ambiente más fresco y silencioso. Regula la temperatura y reduce
              el ruido.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faTemperatureThreeQuarters}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Humedad ambiental
              </strong>{" "}
              Aire menos seco. Las plantas liberan humedad que mejora el confort
              interior.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faFaceLaughBeam}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Bienestar y salud emocional
              </strong>{" "}
              Las plantas elevan el ánimo, el estrés y mejoran la concentración.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faBolt}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Ahorro energético
              </strong>{" "}
              Reduce el consumo energético gracias al aislamiento.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faPagelines}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Diseño biofílico y estética natural
              </strong>{" "}
              Conexión con la naturaleza. Embellece tus espacios con un toque
              vivo y verde.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Valor añadido a tu propiedad
              </strong>{" "}
              Mejora la percepción y el valor estético de tus espacios.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faUpDown}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Espacio verde vertical
              </strong>{" "}
              Verde sin ocupar espacio. Ideal para lugares con superficie
              limitada.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faFan}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Fomento de biodiversidad urbana
              </strong>{" "}
              Atrae polinizadores y contribuye al ecosistema urbano.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
