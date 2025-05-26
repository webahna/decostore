import { useBanksDialogStore } from "../store/useBanksDialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const URLs = [
  "/cards/banorte.svg",
  "/cards/afirme.svg",
  "/cards/banbajio.svg",
  "/cards/mifel.svg",
  "/cards/banco-azteca.svg",
  "/cards/famsa.svg",
  "/cards/banjercito.svg",
  "/cards/banregio.svg",
  "/cards/falabella-soriana.svg",
  "/cards/hsbc.svg",
  "/cards/inbursa.svg",
  "/cards/invex.svg",
  "/cards/konfio.png",
  "/cards/liverpool.svg",
  "/cards/santander.svg",
  "/cards/scotiabank.svg",
];

export const Dialog = () => {
  const isBanksDialogOpen = useBanksDialogStore(
    (state) => state.isBanksDialogOpen
  );
  const closeBanksDialog = useBanksDialogStore(
    (state) => state.closeBanksDialog
  );

  return (
    <div className="w-full h-screen bg-black/60 fixed top-0 left-0 z-40 transition-all duration-500  ease-out pt-20 px-4">
      <div className="w-full max-w-[520px] mx-auto bg-white flex flex-col rounded-lg">
        <div className="flex justify-between items-center px-6 pt-6">
          <h5 className="text-xl md:text-2xl font-semibold text-deco-green-title">
            Bancos participantes
          </h5>
          <button
            onClick={closeBanksDialog}
            className="px-3 py-1 text-red-500 text-xl cursor-pointer"
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="grid grid-cols-4 px-6 py-6 gap-4 md:gap-8">
          {URLs.map((URL, i) => (
            <img src={URL} alt={"bank" + i} key={i} className="h-full" />
          ))}
        </div>
        {/* <div className="w-full flex justify-end px-4 py-4">
          <button
            className="px-6 h-11 rounded-lg bg-deco-green font-medium text-white"
            onClick={closeBanksDialog}
          >
            Cerrar
          </button>
        </div> */}
      </div>
    </div>
  );
};
