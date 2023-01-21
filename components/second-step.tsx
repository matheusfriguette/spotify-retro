import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/animations/second-step.module.css";

type Props = {
  updateStep: () => void;
};

const SecondStep = ({ updateStep }: Props) => {
  useEffect(() => {
    const mainTimer = setTimeout(() => {
      updateStep();
    }, 16000);

    return () => {
      clearTimeout(mainTimer);
    };
  }, []);

  return (
    <div className=" flex h-full w-full flex-col items-center justify-center overflow-hidden bg-yellow">
      <div
        className={`flex h-full w-full flex-col items-center justify-center overflow-hidden bg-contain ${styles.background}`}
        style={{ backgroundImage: "url('/assets/second-step/1.svg'" }}
      >
        <div
          className={`relative flex items-center justify-center bg-center bg-no-repeat px-4 ${styles.monogram}`}
          style={{ backgroundImage: "url('/assets/second-step/2.svg'" }}
        >
          <div
            className={`opacity-0 absolute flex w-[304px] flex-col items-center justify-center gap-6 text-center ${styles.firstText}`}
          >
            <div className="text-2xl font-medium tracking-tighter">
              Tivemos muitos momentos incríveis mas esses foram os meus
              favoritos
            </div>
            <div className="font-book tracking-tighter">
              Se é que da para escolher
            </div>
          </div>
          <div
            className={`opacity-0 absolute mt-16 pr-4 ${styles.secondText}`}
          >
            <div className="text-xl font-medium tracking-tighter">
              Meus momentos favoritos
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="flex items-center gap-4">
                <div className="w-7 min-w-[28px] text-4xl font-medium">1</div>
                <div>
                  <Image
                    src="/image/07fd0f9f-22f7-449f-a74a-c4ee44b9f1f0.JPG"
                    alt="Imagem 1"
                    width={112}
                    height={112}
                    className="aspect-square h-28 w-28 max-w-none object-cover"
                  />
                </div>
                <div className="text-lg font-medium tracking-tighter">
                  Aquele momento no show do Beach House...
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 min-w-[28px] text-4xl font-medium">2</div>
                <div>
                  <Image
                    src="/image/IMG_0234.JPG"
                    alt="Imagem 1"
                    width={112}
                    height={112}
                    className="aspect-square h-28 w-28 max-w-none object-cover"
                  />
                </div>
                <div className="text-lg font-medium tracking-tighter">
                  Passar o ano novo ao seu lado
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 min-w-[28px] text-4xl font-medium">3</div>
                <div>
                  <Image
                    src="/image/D2F67F01-B3D1-4515-96DF-3D1418703C64.JPG"
                    alt="Imagem 1"
                    width={112}
                    height={112}
                    className="aspect-square h-28 w-28 max-w-none object-cover"
                  />
                </div>
                <div className="text-lg font-medium tracking-tighter">
                  Curtir minha primeira vez na praia com você
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 min-w-[28px] text-4xl font-medium">4</div>
                <div>
                  <Image
                    src="/image/IMG_0557.JPG"
                    alt="Imagem 1"
                    width={112}
                    height={112}
                    className="aspect-square h-28 w-28 max-w-none object-cover"
                  />
                </div>
                <div className="text-lg font-medium tracking-tighter">
                  Ficar malucos juntos no forma Laurinha
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-7 min-w-[28px] text-4xl font-medium">5</div>
                <div>
                  <Image
                    src="/image/IMG_9663.JPEG"
                    alt="Imagem 1"
                    width={112}
                    height={112}
                    className="aspect-square h-28 w-28 max-w-none object-cover"
                  />
                </div>
                <div className="text-lg font-medium tracking-tighter">
                  Amassar um Outback
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
