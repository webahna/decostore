export const Review = ({
  URLphoto,
  ALTphoto,
  author,
  company,
  classes,
  children,
}) => {
  return (
    <blockquote
      className={`w-full h-full text-white flex-col items-center justify-center 1lg:flex-row 1lg:gap-[120px] py-10 gap-4 ${classes} transition-all duration-500 ease-out`}
    >
      {/* foto */}
      <div className="min-w-18 min-h-18 1sm:min-w-24 3sm:min-w-40 1lg:min-w-1/4 aspect-square rounded-full relative">
        <div className="w-full h-full overflow-hidden rounded-full">
          <img
            src={URLphoto}
            alt={ALTphoto}
            className="w-full h-full"
            width={300}
            height={300}
          />
        </div>
        <div className="min-w-8 min-h-8 max-w-8 max-h-8 1sm:min-w-12 1sm:min-h-12 1sm:max-w-12 1sm:max-h-12 1lg:min-w-22 1lg:min-h-22 1lg:max-w-22 1lg:max-h-22 aspect-square absolute top-0 right-0 bg-[#EFF4E7] rounded-full flex items-center justify-center text-[100px] text-deco-green ">
          <img src="/comillas.svg" alt="Comillas" className="w-3/4" />
        </div>
      </div>
      {/* info */}
      <div className="h-full flex flex-col justify-center 1lg:w-3/4">
        <p className="text-center md:text-start text-xs 1sm:text-sm 3sm:text-base line-clamp-6 2sm:line-clamp-[9] 3sm:line-clamp-[10] 4sm:line-clamp-[7] md:line-clamp-[7] 1lg:line-clamp-none">
          {children}
        </p>
        <footer className="flex flex-col items-center 1lg:items-start pt-4">
          <strong>{author}</strong>
          <small>{company}</small>
        </footer>
      </div>
    </blockquote>
  );
};
