import Image from "next/image";
import styles from "../styles/animations/sixth-step.module.css";

const SixthStep = () => {
  return (
    <div className="flex relative h-full w-full flex-col items-center justify-center overflow-hidden bg-light-black">
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

          <div className="absolute mt-10 overflow-hidden w-full px-4">
            <div
              className={`text-start text-2xl font-medium tracking-tighter opacity-0 ${styles.thirdText}`}
            >
              Muito obrigado por tudo
            </div>
            <div className="flex flex-col justify-between gap-8 mt-4">
              <div className="relative flex h-56 items-center justify-center">
                <div
                  className={`absolute flex h-56 w-56 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.firstImageMonogram}`}
                  style={{
                    backgroundImage: "url('/assets/sixth-step/3.svg')",
                  }}
                ></div>
                <Image
                  className={`absolute h-40 w-40 scale-0 object-cover ${styles.firstImage}`}
                  width={160}
                  height={160}
                  src="/image/IMG_0141.JPEG"
                  alt="star"
                />
              </div>
              <div className="relative flex h-56 items-center justify-center">
                <div
                  className={`absolute flex h-56 w-56 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.secondImageMonogram}`}
                  style={{
                    backgroundImage: "url('/assets/sixth-step/4.svg')",
                  }}
                ></div>
                <Image
                  className={`absolute h-40 w-40 scale-0 object-cover ${styles.secondImage}`}
                  width={160}
                  height={160}
                  src="/image/IMG_0194.JPG"
                  alt="star"
                />
              </div>
              <div className="relative flex h-56 items-center justify-center">
                <div
                  className={`absolute flex h-56 w-56 scale-0 items-center justify-center bg-center bg-no-repeat opacity-0 ${styles.thirdImageMonogram}`}
                  style={{
                    backgroundImage: "url('/assets/sixth-step/5.svg')",
                  }}
                ></div>
                <Image
                  className={`absolute h-40 w-40 scale-0 object-cover ${styles.thirdImage}`}
                  width={160}
                  height={160}
                  src="/image/IMG_0230.JPG"
                  alt="star"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthStep;
