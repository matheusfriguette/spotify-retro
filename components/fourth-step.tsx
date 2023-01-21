import { useEffect } from "react";
import styles from "../styles/animations/fourth-step.module.css";

type Props = {
  updateStep: () => void;
};

const FourthStep = ({ updateStep }: Props) => {
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      updateStep();
    }, 18000);
    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <div
      className={`flex relative h-full w-full flex-col items-center justify-center overflow-hidden bg-yellow ${styles.background}`}
    >
      <div
        className={`absolute bottom-[-40px] z-40 h-32 w-full bg-repeat-x opacity-0 ${styles.firstCloud}`}
        style={{ backgroundImage: "url('/assets/fourth-step/1.svg')" }}
      ></div>
      <div
        className={`absolute bottom-[20px] z-30 h-32 w-full bg-repeat-x opacity-0 ${styles.secondCloud}`}
        style={{ backgroundImage: "url('/assets/fourth-step/2.svg')" }}
      ></div>
      <div
        className={`absolute bottom-[60px] z-20 h-32 w-full bg-repeat-x opacity-0 ${styles.thirdCloud}`}
        style={{ backgroundImage: "url('/assets/fourth-step/3.svg')" }}
      ></div>

      <div
        className={`absolute bottom-[80px] z-10 h-40 w-40 bg-no-repeat opacity-0 ${styles.firstSun}`}
        style={{ backgroundImage: "url('/assets/fourth-step/4.svg')" }}
      ></div>

      <div
        className={`absolute bottom-[280px] z-10 h-40 w-40 bg-no-repeat opacity-0 ${styles.secondSun}`}
        style={{ backgroundImage: "url('/assets/fourth-step/5.svg')" }}
      ></div>

      <div
        className={`absolute bottom-[700px] z-10 h-40 w-40 bg-no-repeat opacity-0 ${styles.thirdSun}`}
        style={{ backgroundImage: "url('/assets/fourth-step/6.svg')" }}
      ></div>

      <div
        className={`absolute z-50 mt-32 flex h-[calc(100vh-256px)] top-0 w-full flex-col items-center px-12 opacity-0 ${styles.firstText}`}
      >
        <div className="text-center text-lg font-medium tracking-tighter text-purple">
          Nossas manhãs começam
        </div>
        <div className="mt-2 flex flex-col items-center gap-4">
          <div className="text-center text-4xl font-medium tracking-tighter text-purple">
            Enrolando pra levantar por causa de beijinhos e carinhos
          </div>
        </div>
      </div>
      <div
        className={`absolute z-50 mt-32 flex h-[calc(100vh-256px)] top-0 w-full flex-col items-center px-12 opacity-0 ${styles.secondText}`}
      >
        <div className="text-center text-lg font-medium tracking-tighter text-black">
          Aproveitamos nosso dia
        </div>
        <div className="mt-2 flex flex-col items-center gap-4">
          <div className="text-center text-4xl font-medium tracking-tighter text-black">
            Cozinhando pratos divônicos, fofocando juntos e assistindo filmes e séries
          </div>
        </div>
      </div>

      <div
        className={`absolute z-50 mt-32 flex h-[calc(100vh-256px)] top-0 w-full flex-col items-center px-12 opacity-0 ${styles.thirdText}`}
      >
        <div className="text-center text-lg font-medium tracking-tighter text-yellow">
            E vamos curtir a noite
        </div>
        <div className="mt-2 flex flex-col items-center gap-4">
          <div className="text-center text-4xl font-medium tracking-tighter text-yellow">
            Indo para dates ou perigos noturnos para voltar e ver videos no tiktok antes de fazer nossa conchinha 
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthStep;
