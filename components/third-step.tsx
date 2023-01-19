import Image from "next/image";
import { useEffect, useRef } from "react";

type Props = {
  updateStep: () => void;
};

const ThirdStep = ({ updateStep }: Props) => {
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      updateStep();
    }, 8000);
    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <div className="thirdStep-background flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute flex h-full w-full flex-col">
        <div className="flex h-1/2 w-full">
          <div
            className="thirdStep-background1 h-full w-1/2"
            style={{ backgroundImage: "url('/assets/third-background.svg'" }}
          ></div>
          <div
            className="thirdStep-background2 h-full w-1/2"
            style={{ backgroundImage: "url('/assets/third-background.svg'" }}
          ></div>
        </div>
        <div className="flex h-1/2 w-full">
          <div
            className="thirdStep-background3 h-full w-1/2"
            style={{ backgroundImage: "url('/assets/third-background.svg'" }}
          ></div>
          <div
            className="thirdStep-background4 h-full w-1/2"
            style={{ backgroundImage: "url('/assets/third-background.svg')" }}
          ></div>
        </div>
      </div>
      <div
        className="thirdStep-circle relative flex h-[800px] w-[800px] items-center justify-center bg-center px-4"
        style={{ backgroundImage: "url('/assets/third-circle.svg')" }}
      >
        <div className="thirdStep-text1 absolute flex w-[304px] flex-col items-center justify-center gap-6 text-center opacity-0">
          <div className="text-2xl font-bold tracking-tighter">
            Cozinhamos e comemos muitas coisas deliciosas juntos, mas uma marcou
          </div>
        </div>
        <div className="absolute h-full pr-4">
          <div className="flex h-full flex-col items-center justify-center gap-12">
            <div
              className="thirdStep-cover relative flex h-[358px] w-[358px] scale-0 items-center justify-center bg-center"
              style={{ backgroundImage: "url('/assets/third-cover.svg')" }}
            >
              <Image
                src="/image/IMG_9075.JPEG"
                alt="Imagem 1"
                width={256}
                height={256}
                className="aspect-square h-64 w-64 max-w-none object-cover"
              />
            </div>
            <div className="thirdStep-text2 text-center text-lg font-bold tracking-tighter opacity-0">
              O risoto que você fez foi tão gostoso que ainda consigo lembrar do
              gostinho dele
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
