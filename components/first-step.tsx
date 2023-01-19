import { useEffect, useRef } from "react";

type Props = {
  updateStep: () => void;
};

const FirstStep = ({ updateStep }: Props) => {
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      updateStep();
    }, 8000);

    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-contain"
      style={{ backgroundImage: "url('/assets/first-background.svg')" }}
    >
      <div className="absolute flex h-full w-full flex-col">
        <div className="firstStep-background1 h-1/2"></div>
        <div className="firstStep-background2 h-1/2"></div>
      </div>
      <div className="relative z-10 flex h-96 w-96 items-center justify-center text-center text-xl font-bold tracking-tighter">
        <div
          className="firstStep-circle absolute h-96 w-96"
          style={{ backgroundImage: "url('/assets/first-circle.svg')" }}
        ></div>
        <div className="firstStep-text1 absolute w-[304px] opacity-100">
          Feliz 3 meses de namoro!
        </div>

        <div className="firstStep-text2 absolute w-[304px] opacity-0">
          Bem-vinda a  retropesctiva desses meses maravilhosos que passamos juntos
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
