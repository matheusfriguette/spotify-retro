import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/animations/fifth-step.module.css";

type Props = {
  updateStep: () => void;
};

const FifthStep = ({ updateStep }: Props) => {
  useEffect(() => {
    // const mainTimer = setTimeout(() => {
    //   updateStep();
    // }, 8000);
    // return () => {
    //   clearTimeout(mainTimer);
    // };
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
          <div className="text-center text-2xl font-bold tracking-tighter">
            Todo esse tempo se amando somou
          </div>
        </div>

        <div className="absolute h-full px-4">
          <div className="flex h-full flex-col items-center justify-center gap-12">
            <div
              className={`relative flex h-[320px] w-[320px] scale-0 items-center justify-center bg-cover bg-center ${styles.image}`}
              style={{ backgroundImage: "url('/assets/fifth-step/3.svg')" }}
            ></div>
            <div
              className={`scale-0 text-center text-lg font-bold tracking-tighter opacity-0 ${styles.imageText}`}
            >
              Nesses 3 meses
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
