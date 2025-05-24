import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faTintSlash,
  faShieldAlt,
  faChildReaching,
  faShoePrints,
  faHome,
  faFaceSmile,
  faSoap,
  faPaw,
  faEye,
  faCubes,
  faRedo,
  faShieldDog,
  faGem,
  faPersonFalling,
  faMinus,
  faTemperatureLow,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons";

export const InfoCespedResidencial = ({ classes = "" }) => {
  const [active, setActive] = useState("25");

  return (
    <div className={`${classes}`}>
      <div className="max-w-[990px] mx-auto flex flex-col pt-10">
        <h1 className="text-deco-green-title font-semibold py-2 md:py-4 text-2xl 1sm:text-3xl md:text-4xl text-center px-5">
          Instalación de césped sintético residencial.
        </h1>

        <div className="flex justify-center">
          <div className="flex font-semibold">
            <button
              onClick={() => setActive("25")}
              className={clsx("py-3 px-5 border-b-2 cursor-pointer", {
                "border-gray-200 text-deco-gray": active !== "25",
                "border-deco-green text-deco-green": active === "25",
              })}
            >
              25 cm
            </button>
            <button
              onClick={() => setActive("35")}
              className={clsx("py-3 px-5 border-b-2 cursor-pointer", {
                "border-gray-200 text-deco-gray": active !== "35",
                "border-deco-green text-deco-green": active === "35",
              })}
            >
              35 cm
            </button>
          </div>
        </div>

        {active === "25" && (
          <article>
            <img
              src="/25cm.jpg"
              alt="Cesped Residencial de 25 cm"
              className="w-full"
            />

            <ul className="pt-5 px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-0 md:gap-x-4 1lg:gap-y-16">
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faBroom}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Mínimo mantenimiento
                </strong>{" "}
                No necesita cortar, regar ni fertilizar.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faTintSlash}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Ahorro de agua
                </strong>{" "}
                No necesita riego, cuidando tu bolsillo y el ambiente.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faShieldAlt}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Alta resistencia y durabilidad
                </strong>{" "}
                Soporta uso diario, juegos y clima sin desgastarse.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faChildReaching}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Seguro y confortable
                </strong>{" "}
                Superficie suave que evita caídas y resbalones.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faShoePrints}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Áreas de alto tránsito
                </strong>{" "}
                Mantiene forma y estética donde hay mucho paso.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faHome}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Mejora cualquier espacio
                </strong>{" "}
                Embellece patios, balcones, jardines y terrazas.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faFaceSmile}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Hipoalergénico
                </strong>{" "}
                Ideal para personas sensibles al polen o pasto.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faSoap}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Fácil de limpiar
                </strong>{" "}
                Solo barre o enjuaga con agua.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faPaw}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Pet-friendly
                </strong>{" "}
                Cómodo y resistente para tus mascotas.
              </li>
            </ul>
          </article>
        )}

        {active === "35" && (
          <article>
            <img
              src="/35cm.jpg"
              alt="Cesped Residencial de 35 cm"
              className="w-full"
            />

            <ul className="pt-5 px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-0 md:gap-x-4 1lg:gap-y-16">
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Apariencia natural y confort
                </strong>{" "}
                Luce y se siente como pasto real recién cortado.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faCubes}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Durabilidad superior
                </strong>{" "}
                Fibra más densa que resiste más tiempo.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faRedo}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Excelente recuperación
                </strong>{" "}
                Vuelve a su forma tras ser pisado.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faShieldDog}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Seguro para niños y mascotas
                </strong>{" "}
                Superficie amortiguada que reduce impactos.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faGem}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Aspecto visual de alta gama
                </strong>{" "}
                Añade un toque elegante y lujoso.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faPersonFalling}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Mayor absorción de impactos
                </strong>{" "}
                Ideal para juegos y evitar lesiones.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faMinus}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Menor necesidad de relleno
                </strong>{" "}
                Menor uso de materiales para su instalación.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faTemperatureLow}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Aislamiento térmico y acústico
                </strong>{" "}
                Reduce calor y ruido ambiental.
              </li>
              <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
                <FontAwesomeIcon
                  icon={faMugHot}
                  className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
                />
                <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                  Ideal para zonas de descanso
                </strong>{" "}
                Perfecto para relajarse, leer o tomar el sol.
              </li>
            </ul>
          </article>
        )}
      </div>
    </div>
  );
};
