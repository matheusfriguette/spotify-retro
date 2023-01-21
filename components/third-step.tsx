import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/animations/third-step.module.css";

type Props = {
  updateStep: () => void;
};

const ThirdStep = ({ updateStep }: Props) => {
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      updateStep();
    }, 10000);
    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute flex h-full w-full flex-col">
        <div className="flex h-1/2 w-full">
          <div
            className={`h-full w-1/2 ${styles.firstBackground}`}
            style={{ backgroundImage: "url('/assets/third-step/1.svg'" }}
          ></div>
          <div
            className={`h-full w-1/2 ${styles.secondBackground}`}
            style={{ backgroundImage: "url('/assets/third-step/1.svg'" }}
          ></div>
        </div>
        <div className="flex h-1/2 w-full">
          <div
            className={`h-full w-1/2 ${styles.thirdBackground}`}
            style={{ backgroundImage: "url('/assets/third-step/1.svg'" }}
          ></div>
          <div
            className={`h-full w-1/2 ${styles.fourthBackground}`}
            style={{ backgroundImage: "url('/assets/third-step/1.svg')" }}
          ></div>
        </div>
      </div>
      <div
        className={`relative flex h-16 w-16 items-center justify-center bg-center px-4 ${styles.monogram}`}
        style={{ backgroundImage: "url('/assets/third-step/2.svg')" }}
      >
        <div
          className={`absolute flex w-[304px] flex-col items-center justify-center gap-6 text-center opacity-0 ${styles.firstText}`}
        >
          <div className="text-2xl font-medium tracking-tighter">
            Também cozinhamos e comemos muitas coisas deliciosas juntos, mas uma foi especial
          </div>
        </div>
        <div className="absolute h-full pr-4">
          <div className="flex h-full flex-col items-center justify-center gap-12">
            <div className="relative flex h-80 items-center justify-center">
              <div
                className={`absolute flex h-80 w-80 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.firstImageMonogram}`}
                style={{
                  backgroundImage: "url('/assets/third-step/3.svg')",
                }}
              ></div>
              <div
                className={`absolute flex h-80 w-80 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.secondImageMonogram}`}
                style={{
                  backgroundImage: "url('/assets/third-step/4.svg')",
                }}
              ></div>
              <div
                className={`absolute flex h-80 w-80 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.thirdImageMonogram}`}
                style={{
                  backgroundImage: "url('/assets/third-step/5.svg')",
                }}
              ></div>
              <Image
                className={`absolute h-64 w-64 max-w-none scale-0 object-cover ${styles.image}`}
                width={256}
                height={256}
                src="/image/IMG_9075.JPEG"
                alt="star"
              />
            </div>
            <div
              className={`text-center text-lg font-medium tracking-tighter opacity-0 ${styles.secondText}`}
            >
              Amo quando você me faz provar novas coisas e o seu risoto foi a
              melhor primeira coisa que já comi
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
