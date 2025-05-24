export const LinkButton = ({
  children,
  href,
  target = "_self",
  classes = "",
}) => {
  return (
    <a
      href={href}
      target={target}
      className={`inline-block px-6 pt-3 pb-3 md:px-9 rounded-full text-base md:text-2xl font-semibold ${classes}`}
    >
      {children}
    </a>
  );
};
