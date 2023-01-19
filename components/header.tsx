import { useEffect, useRef } from "react";

type Props = {
  currentStep: 1 | 2 | 3 | 4 | 5;
};

const Header = ({ currentStep }: Props) => {
  const stepBarElements = {
    1: useRef<HTMLDivElement>(null),
    2: useRef<HTMLDivElement>(null),
    3: useRef<HTMLDivElement>(null),
    4: useRef<HTMLDivElement>(null),
    5: useRef<HTMLDivElement>(null),
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      stepBarElements[currentStep].current?.classList.add("w-full");
      stepBarElements[currentStep].current?.classList.remove("w-0");
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [currentStep]);

  return (
    <header className="absolute top-0 w-full bg-gradient-to-b from-neutral-800/80 px-4 pt-5 pb-8 z-10">
      <div className="flex gap-0.5">
        <div className="relative h-0.5 flex-grow">
          <div className="h-0.5 rounded-sm bg-white/30"></div>
          <div
            ref={stepBarElements[1]}
            className="absolute top-0 h-0.5 w-0 rounded-sm bg-white transition-[width] duration-[8000ms] ease-linear"
          ></div>
        </div>
        <div className="relative h-0.5 flex-grow">
          <div className="h-0.5 rounded-sm bg-white/30"></div>
          <div
            ref={stepBarElements[2]}
            className="absolute top-0 h-0.5 w-0 rounded-sm bg-white transition-[width] duration-[16000ms] ease-linear"
          ></div>
        </div>
        <div className="relative h-0.5 flex-grow">
          <div className="h-0.5 rounded-sm bg-white/30"></div>
          <div
            ref={stepBarElements[3]}
            className="absolute top-0 h-0.5 w-0 rounded-sm bg-white transition-[width] duration-[8000ms] ease-linear"
          ></div>
        </div>
        <div className="relative h-0.5 flex-grow">
          <div className="h-0.5 rounded-sm bg-white/30"></div>
          <div
            ref={stepBarElements[4]}
            className="absolute top-0 h-0.5 w-0 rounded-sm bg-white transition-[width] duration-[6000ms] ease-linear"
          ></div>
        </div>
        <div className="relative h-0.5 flex-grow">
          <div className="h-0.5 rounded-sm bg-white/30"></div>
          <div
            ref={stepBarElements[5]}
            className="absolute top-0 h-0.5 w-0 rounded-sm bg-white transition-[width] duration-[6000ms] ease-linear"
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
