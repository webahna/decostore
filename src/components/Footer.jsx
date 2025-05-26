import { LinkButton } from "./LinkButton";
import { Title } from "./Title";

export const Footer = ({ classes = "", href }) => {
  return (
    <footer className={`${classes}`}>
      <div className="max-w-[990px] mx-auto text-center">
        <Title classes="">
          ¿Te animas a darle un nuevo estilo a tu espacio?
        </Title>
        <p className="text-deco-gray 1lg:text-xl">
          Escríbenos para una cotización.
        </p>
        <p className="text-deco-gray 1lg:text-xl">
          ¡Te respondemos en menos de 24 horas!
        </p>
        <LinkButton
          href={href}
          target="_blank"
          classes="bg-[#B33636] text-[#FFFFFF] mt-4"
        >
          Cotiza sin compromiso
        </LinkButton>
      </div>
    </footer>
  );
};
