import { useEffect } from "react";
import styles from "../styles/animations/first-step.module.css";

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
      className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-contain bg-purple"
      style={{ backgroundImage: "url('/assets/first-step/1.svg')" }}
    >
      <div className="absolute flex h-full w-full flex-col">
        <div className={`h-1/2 ${styles.firstBackground}`}></div>
        <div className={`h-1/2 ${styles.secondBackground}`}></div>
      </div>
      <div className="relative z-10 flex h-96 w-96 items-center justify-center text-center text-xl font-medium tracking-tighter">
        <div
          className={`absolute h-96 w-96 ${styles.monogram}`}
          style={{ backgroundImage: "url('/assets/first-step/2.svg')" }}
        ></div>
        <div className={`absolute w-[304px] opacity-100 ${styles.firstText}`}>
          Feliz 3 meses de namoro!
        </div>

        <div className={`absolute w-[304px] opacity-0 ${styles.secondText}`}>
          Bem-vinda a nossa retropesctiva desses meses maravilhosos
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
