import clsx from "clsx";
import { Review } from "./Review";
import { useIntersection } from "../hooks/useIntersection";

export const SectionReviews = ({ classes = "" }) => {
  const [containerRef, isContainerIntersecting] = useIntersection({
    threshold: 1,
  });
  return (
    <>
      <section
        id="reviews"
        ref={containerRef}
        className={`w-full aspect-square 4sm:h-[500px] 4sm:max-h-[500px] overflow-hidden bg-[url(/reviews.avif)] bg-cover bg-center px-5 3sm:px-10 ${classes}`}
      >
        <div
          className={clsx(
            "max-w-[990px] h-full mx-auto transition-all duration-500 ease-out",
            {
              "scale-0 opacity-0": !isContainerIntersecting,
              "scale-100 opacity-100": isContainerIntersecting,
            }
          )}
        >
          <Review
            URLphoto={"/review.avif"}
            ALTphoto={""}
            author={"Emilia Herrera"}
            company={"Industrias Herrera"}
            classes={"flex"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled. of type and scrambled. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry’s standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </Review>
          <Review
            URLphoto={"/review.avif"}
            ALTphoto={""}
            author={"Claudia Herrera"}
            company={"Industrias Claudina"}
            classes={"hidden opacity-0"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. scrambled.
          </Review>
        </div>
      </section>
    </>
  );
};
