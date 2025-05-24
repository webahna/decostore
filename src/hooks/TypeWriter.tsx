import { useState, useEffect } from "react";

export const Typewriter = ({
  text,
  speed = 40,
  delay = 100,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          const newText = text.slice(0, i + 1);
          setDisplayed(newText);
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, speed]);

  return (
    <div className="w-full h-full flex justify-center items-center font-semibold text-sm 1sm:text-base 3sm:text-xl md:text-3xl 1lg:text-4xl text-deco-green-title">
      {displayed}
    </div>
  );
};
