import React from "react";
import clsx from "clsx";

export const Title = React.forwardRef(({ children, classes = "" }, ref) => {
  return (
    <h2
      ref={ref}
      className={clsx(
        "text-deco-green-title font-semibold py-2 md:py-4 text-2xl 1sm:text-3xl md:text-4xl transition-all duration-500  ease-out",
        classes
      )}
    >
      {children}
    </h2>
  );
});
