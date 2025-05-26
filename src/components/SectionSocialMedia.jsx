import clsx from "clsx";
import { Title } from "./Title";
import { LinkButton } from "./LinkButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useIntersection } from "../hooks/useIntersection";
import {
  faInstagram,
  faFacebook,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const SectionSocialMedia = ({ classes = "" }) => {
  const [titleRef, isTitleIntersecting] = useIntersection({ threshold: 0.5 });

  const [instagramRef, isInstagramIntersecting] = useIntersection({
    threshold: 0.2,
  });
  const [facebookRef, isFacebookIntersecting] = useIntersection({
    threshold: 0.2,
  });
  const [tiktokRef, isTiktokIntersecting] = useIntersection({ threshold: 0.2 });
  const [youtubeRef, isYoutubeIntersecting] = useIntersection({
    threshold: 0.2,
  });

  return (
    <footer id="social-media" className={`${classes}`}>
      <div className="w-full max-w-[650px] mx-auto px-6 3sm:px-10 border-deco-gray">
        <div className="flex flex-col text-center gap-4 4sm:flex-row">
          <Title
            ref={titleRef}
            classes={clsx(
              "4sm:text-start 4sm:w-78 transition duration-500  ease-out",
              {
                "-translate-y-14 opacity-0": !isTitleIntersecting,
                "-translate-y-0 opacity-100": isTitleIntersecting,
              }
            )}
          >
            Conecta con nosotros en redes sociales.
          </Title>
          <div className="grid grid-cols-6 gap-4 md:flex md:flex-col">
            <div
              ref={instagramRef}
              className={clsx("transition duration-500 ease-out col-span-3", {
                "-translate-y-14 opacity-0": !isInstagramIntersecting,
                "-translate-y-0 opacity-100": isInstagramIntersecting,
              })}
            >
              <LinkButton
                href={
                  "https://www.instagram.com/decostore_mx?igsh=cjEyYWhtY2FoZHpj"
                }
                target="_blank"
                classes="w-full outline outline-deco-gray text-deco-gray hover:outline-0 hover:bg-[url(/bg-instagram.jpg)] hover:bg-cover hover:bg-center hover:text-[#FFFFFF] flex items-center justify-center "
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span className="pl-2 1lg:pl-4">Instagram</span>
              </LinkButton>
            </div>
            <div
              ref={facebookRef}
              className={clsx("transition duration-500 ease-out col-span-3", {
                "-translate-y-14 opacity-0": !isFacebookIntersecting,
                "-translate-y-0 opacity-100": isFacebookIntersecting,
              })}
            >
              <LinkButton
                href={
                  "https://www.facebook.com/share/162pwtbbqS/?mibextid=wwXIfr"
                }
                target="_blank"
                classes="w-full outline outline-deco-gray text-deco-gray hover:outline-0 hover:bg-[#1877F2] hover:text-[#FFFFFF] flex items-center justify-center  transition ease-out"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span className="pl-2 1lg:pl-4">Facebook</span>
              </LinkButton>
            </div>
            <div
              ref={tiktokRef}
              className={clsx("transition duration-500  ease-out col-span-3", {
                "-translate-y-14 opacity-0": !isTiktokIntersecting,
                "-translate-y-0 opacity-100": isTiktokIntersecting,
              })}
            >
              <LinkButton
                href={
                  "https://www.tiktok.com/@decostorepue?_t=ZS-8vd5Oq6tEXf&_r=1"
                }
                target="_blank"
                classes="w-full border border-deco-gray text-deco-gray hover:border-black hover:bg-black hover:text-[#FFFFFF] flex items-center justify-center transition ease-out"
              >
                <FontAwesomeIcon icon={faTiktok} />
                <span className="pl-2 1lg:pl-4">Tiktok</span>
              </LinkButton>
            </div>
            <div
              ref={youtubeRef}
              className={clsx("transition duration-500  ease-out col-span-3", {
                "-translate-y-14 opacity-0": !isYoutubeIntersecting,
                "-translate-y-0 opacity-100": isYoutubeIntersecting,
              })}
            >
              <LinkButton
                href={"https://youtube.com/@decostorepue?si=2CuSnACgMYaNigkF"}
                target="_blank"
                classes="w-full border border-deco-gray text-deco-gray hover:border-[#C4302B] hover:bg-[#B33636] hover:text-[#FFFFFF] flex items-center justify-center  transition ease-out"
              >
                <FontAwesomeIcon icon={faYoutube} />
                <span className="pl-2 1lg:pl-4">Youtube</span>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
