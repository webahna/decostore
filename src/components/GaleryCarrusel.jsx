import clsx from "clsx";
import { Title } from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faExpand,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export const GaleryCarrusel = ({ classes = "", imagesURL = [""] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagesURL.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagesURL.length - 1 ? 0 : prev + 1));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Bloquear scroll al abrir modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Limpieza si se desmonta el componente con modal abierto
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <section id="galery" className={`${classes} px-5`}>
      <div className="max-w-[990px] mx-auto flex flex-col 4sm:flex-row items-center 4sm:items-start gap-6 4sm:gap-12 md:gap-20">
        <Title classes="text-center 4sm:text-start 4sm:w-2/4">
          Échale un vistazo a nuestro trabajo.
        </Title>
        <div
          className="w-60 rounded-2xl overflow-hidden relative 4sm:w-2/4"
          style={{ aspectRatio: "178 / 267" }}
        >
          <div className="w-full h-full">
            <img
              src={imagesURL[currentIndex]}
              alt={"carrusel-" + currentIndex}
              className={"w-ful h-full object-cover"}
            />

            {/* Controles */}
            <div className="absolute top-4 left-4 flex gap-2">
              <button
                onClick={prevSlide}
                className="w-8 aspect-square bg-[#EFF4E7] rounded-full cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 aspect-square bg-[#EFF4E7] rounded-full cursor-pointer"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            <button
              onClick={openModal}
              className="absolute top-4 right-4 w-8 aspect-square bg-[#EFF4E7] rounded-full cursor-pointer"
            >
              <FontAwesomeIcon icon={faExpand} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imagesURL[currentIndex]}
              alt="Imagen ampliada"
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 bg-[#EFF4E7] px-2 aspect-square rounded-full shadow hover:bg-gray-200 text-red-500 text-xl cursor-pointer"
              onClick={closeModal}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <div></div>
          </div>
        </div>
      )}
    </section>
  );
};
