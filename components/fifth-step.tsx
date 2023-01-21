import { useEffect } from "react";
import styles from "../styles/animations/fifth-step.module.css";

type Props = {
  updateStep: () => void;
};

const FifthStep = ({ updateStep }: Props) => {
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      updateStep();
    }, 15000);
    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute flex h-full w-full flex-col">
        <div
          className={`flex h-1/2 w-full ${styles.background}`}
          style={{ backgroundImage: "url('/assets/fifth-step/1.svg')" }}
        ></div>
        <div
          className={`flex h-1/2 w-full scale-y-[-1] ${styles.background}`}
          style={{ backgroundImage: "url('/assets/fifth-step/1.svg')" }}
        ></div>
      </div>
      <div
        className={`relative flex h-0 w-0 flex-col items-center justify-center bg-center bg-no-repeat ${styles.monogram}`}
        style={{ backgroundImage: "url('/assets/fifth-step/2.svg')" }}
      >
        <div
          className={`absolute flex w-[300px] scale-0 items-center justify-center opacity-0 ${styles.monogramText}`}
        >
          <div className="text-center text-2xl font-medium tracking-tighter">
            E todos esses dias somados
          </div>
        </div>

        <div className="absolute h-full px-4">
          <div className="flex h-full flex-col items-center justify-center gap-12">
            <div
              className={`relative flex h-[320px] w-[320px] scale-0 items-center justify-center bg-cover bg-center ${styles.image}`}
              style={{ backgroundImage: "url('/assets/fifth-step/3.svg')" }}
            ></div>
            <div
              className={`scale-0 text-center text-lg font-medium tracking-tighter opacity-0 ${styles.imageText}`}
            >
              Durante esses 3 meses, eu amei você por{" "}
              <span className="font-bold">132,480</span> minutos. Isso é mais
              que <span className="font-bold">100%</span> da média da população.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
