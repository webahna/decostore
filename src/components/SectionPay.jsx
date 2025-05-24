import clsx from "clsx";
import { Title } from "./Title";
import { LinkButton } from "../components/LinkButton";
import { useIntersection } from "../hooks/useIntersection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { Dialog } from "./Dialog";
import { useBanksDialogStore } from "../store/useBanksDialog";

// const images = [
//   "/cards/google-play.svg",
//   "/cards/apple-play.svg",
//   "/cards/visa.svg",
//   "/cards/mastercard.svg",
//   "/cards/carnet.svg",
//   "/cards/banorte.svg",
//   "/cards/famsa.svg",
//   "/cards/banco-azteca.svg",
//   "/cards/mifel.svg",
//   "/cards/afirme.svg",
// ];

export const SectionPay = ({ classes = "" }) => {
  const [titleRef, isTitleIntersecting] = useIntersection({
    threshold: 0.5,
  });
  const [cardsRef, isCardsIntersecting] = useIntersection({
    threshold: 0.3,
  });
  const [buttonsRef, isButtonsIntersecting] = useIntersection({
    threshold: 1,
  });

  const isOpenBanksDialog = useBanksDialogStore(
    (state) => state.isBanksDialogOpen
  );
  const openBanksDialog = useBanksDialogStore((state) => state.openBanksDialog);

  return (
    <>
      <section id="payment-info" className={`${classes}`}>
        <div className="w-full max-w-[990px] mx-auto px-4 3sm:px-10 text-center ">
          <Title
            ref={titleRef}
            classes={clsx({
              "-translate-y-14 opacity-0": !isTitleIntersecting,
              "-translate-y-0 opacity-100": isTitleIntersecting,
            })}
          >
            Aceptamos pagos con tarjetas de crédito.
          </Title>
          <div
            ref={cardsRef}
            className={clsx(
              "w-full overflow-hidden mt-4 md:mt-11 md:max-w-[600px] md:mx-auto transition-all duration-1000 ease-out",
              {
                "-translate-y-14 opacity-0": !isCardsIntersecting,
                "-translate-y-0 opacity-100": isCardsIntersecting,
              }
            )}
          >
            <div className="grid grid-cols-4 md:grid-cols-5 items-center gap-y-6 md:gap-x-6 ">
              <div className="flex justify-center items-center col-span-2 md:col-auto">
                <img
                  src="/cards/visa.svg"
                  alt="visa logo"
                  className="w-2/4 md:w-3/4"
                  width={80}
                  height={30}
                />
              </div>
              <div className="flex justify-center items-center col-span-2 md:col-auto">
                <img
                  src="/cards/mastercard.svg"
                  alt="mastercard logo"
                  className="w-2/4 md:w-3/4"
                  width={80}
                  height={60}
                />
              </div>
              <div className="flex justify-center items-center col-span-2 col-start-2 md:col-auto md:col-start-auto">
                <img
                  src="/cards/carnet.svg"
                  alt="carnet logo"
                  className="w-2/4 md:w-3/4"
                  width={80}
                  height={50}
                />
              </div>
              <div className="flex justify-center items-center col-span-2 md:col-auto">
                <img
                  src="/cards/google-pay.svg"
                  alt="google pay logo"
                  className="w-2/4 md:w-3/4"
                  width={80}
                  height={42}
                />
              </div>
              <div className="flex justify-center items-center col-span-2 md:col-auto">
                <img
                  src="/cards/apple-pay.svg"
                  alt="apple pay logo"
                  className="w-2/4 md:w-3/4"
                  width={80}
                  height={36}
                />
              </div>
            </div>
          </div>
          <div
            ref={buttonsRef}
            className={clsx("my-6 transition-all duration-1000 ease-out", {
              "-translate-y-14 opacity-0": !isButtonsIntersecting,
              "-translate-y-0 opacity-100": isButtonsIntersecting,
            })}
          >
            <button
              className="p-2 font-medium underline cursor-pointer text-base md:text-xl transition-all duration-1000 ease-out"
              onClick={openBanksDialog}
            >
              Ver bancos participantes
            </button>
          </div>
          <LinkButton
            href="/"
            classes={clsx(
              "bg-[#B33636] text-[#FFFFFF] transition-all duration-1000 ease-out inline-block md:mt-4",
              {
                "opacity-0": !isButtonsIntersecting,
                "opacity-100": isButtonsIntersecting,
              }
            )}
          >
            <FontAwesomeIcon icon={faCreditCard} />
            <span className="pl-2 1lg:pl-4">Pagar</span>
          </LinkButton>
        </div>
      </section>

      {isOpenBanksDialog && <Dialog />}
    </>
  );
};
