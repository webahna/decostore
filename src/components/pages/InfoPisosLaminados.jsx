import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBroom,
  faDollarSign,
  faHandSparkles,
  faHome,
  faPalette,
  faShieldAlt,
  faShoePrints,
  faSplotch,
  faTools,
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

export const InfoPisosLaminados = ({ classes = "" }) => {
  return (
    <div className={`${classes}`}>
      <div className="max-w-[990px] mx-auto flex flex-col 1lg:pt-10">
        <div className="w-full aspect-video relative">
          <img
            src="/portada-pisos-laminados.webp"
            alt="Portada Pisos Laminados"
            className="w-full 1lg:rounded-lg"
          />

          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <h1 className="text-white font-semibold py-2 md:py-4 text-2xl 1sm:text-3xl md:text-6xl text-center px-5">
              Instalación de Pisos Laminados.
            </h1>
          </div>
        </div>

        <article className="pt-10 1sm:pt-12 md:pt-20">
          <ul className="px-5 md:px-10 grid grid-cols-2 md:grid-cols-3 1lg:grid-cols-2 gap-y-12 gap-x-2 1sm:gap-x-2 md:gap-x-4 1lg:gap-y-16">
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Estética moderna
              </strong>{" "}
              Imita madera, piedra o cerámica con estilo.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faShieldAlt}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Alta durabilidad
              </strong>{" "}
              Soporta rayones e impactos frecuentes.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faBroom}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Limpieza fácil
              </strong>{" "}
              Solo necesita barrer o pasar un trapo.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faTools}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Instalación sencilla
              </strong>{" "}
              Sistema rápido sin pegamento.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Económico
              </strong>{" "}
              Más accesible que la madera o mármol.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faHandSparkles}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Antialérgico
              </strong>{" "}
              No acumula polvo ni ácaros.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faSplotch}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Resiste manchas
              </strong>{" "}
              Derrames no lo dañan fácilmente.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faShoePrints}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Mayor confort
              </strong>{" "}
              Caminar se siente más cálido con subcapa.
            </li>
            <li className="text-deco-gray flex flex-col items-center text-center 1lg:text-2xl">
              <FontAwesomeIcon
                icon={faHome}
                className="text-4xl md:text-5xl 1lg:text-6xl text-deco-green"
              />
              <strong className="text-deco-green-title text-base mt-4 1lg:mt-10 md:text-xl 1lg:text-[32px] font-semibold">
                Versátil
              </strong>{" "}
              Úsalo en casa u oficina, en casi cualquier espacio.
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};
