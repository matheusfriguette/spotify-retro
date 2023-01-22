import Image from "next/image";
import styles from "../styles/animations/sixth-step.module.css";

const SixthStep = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-light-black">
      <div className="absolute flex h-full w-full flex-col">
        <div
          className={`absolute bottom-[60px] left-[100px] h-4 w-4 bg-cover bg-no-repeat ${styles.firstStar}`}
          style={{ backgroundImage: "url('/assets/sixth-step/1.svg')" }}
        ></div>
        <div
          className={`absolute top-[200px] left-[40px] h-4 w-4 bg-cover bg-no-repeat ${styles.secondStar}`}
          style={{ backgroundImage: "url('/assets/sixth-step/1.svg')" }}
        ></div>
        <div
          className={`absolute top-[150px] right-[50px] h-4 w-4 bg-cover bg-no-repeat ${styles.firstStar}`}
          style={{ backgroundImage: "url('/assets/sixth-step/1.svg')" }}
        ></div>
        <div
          className={`absolute bottom-[300px] right-[20px] h-4 w-4 bg-cover bg-no-repeat ${styles.secondStar}`}
          style={{ backgroundImage: "url('/assets/sixth-step/1.svg')" }}
        ></div>
      </div>

      <div
        className={`relative flex w-[240px] flex-col items-center justify-center opacity-0 ${styles.firstText}`}
      >
        <div className="text-center text-2xl font-medium tracking-tighter text-white">
          Espero comemorar essa data tão especial com você para sempre
        </div>
      </div>

      <div className="absolute flex h-full w-full flex-col items-center justify-center">
        <div
          className={`relative flex h-0 w-0 flex-col items-center justify-center bg-center bg-no-repeat ${styles.monogram}`}
          style={{ backgroundImage: "url('/assets/sixth-step/2.svg')" }}
        >
          <div
            className={`absolute mb-6 flex w-[300px] items-center justify-center opacity-0 ${styles.secondText}`}
          >
            <div className="text-center text-2xl font-bold tracking-tighter text-white">
              Te amo muito
            </div>
          </div>

          <div className="absolute top-0 mt-12 w-full overflow-hidden px-4">
            <div
              className={`relative z-[60] text-start text-xl font-medium leading-loose tracking-tighter opacity-0 ${styles.thirdText}`}
            >
              Muito obrigado por tudo
            </div>
            <div className="mt-2 flex flex-col justify-between gap-4">
              <div className="relative flex h-44 items-center justify-center">
                <div
                  className={`absolute flex h-44 w-44 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.firstImageMonogram}`}
                  style={{
                    backgroundImage: "url('/assets/sixth-step/3.svg')",
                  }}
                ></div>
                <Image
                  className={`absolute h-32 w-32 scale-0 object-cover ${styles.firstImage}`}
                  width={128}
                  height={128}
                  src="/image/IMG_0141.JPEG"
                  alt="star"
                />
              </div>
              <div className="relative flex h-44 items-center justify-center">
                <div
                  className={`absolute flex h-44 w-44 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.secondImageMonogram}`}
                  style={{
                    backgroundImage: "url('/assets/sixth-step/4.svg')",
                  }}
                ></div>
                <Image
                  className={`absolute h-32 w-32 scale-0 object-cover ${styles.secondImage}`}
                  width={128}
                  height={128}
                  src="/image/IMG_0194.JPG"
                  alt="star"
                />
              </div>
              <div className="relative flex h-44 items-center justify-center">
                <div
                  className={`absolute flex h-44 w-44 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.thirdImageMonogram}`}
                  style={{
                    backgroundImage: "url('/assets/sixth-step/5.svg')",
                  }}
                ></div>
                <Image
                  className={`absolute h-32 w-32 scale-0 object-cover ${styles.thirdImage}`}
                  width={128}
                  height={128}
                  src="/image/IMG_0230.JPG"
                  alt="star"
                />
              </div>
              <div
                className={`relative z-[60] text-center font-medium leading-loose tracking-tighter opacity-0 ${styles.fourthText}`}
              >
                <div>De Matheus para a melhor namorada do mundo</div>
                <div>22/01/2023</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthStep;
