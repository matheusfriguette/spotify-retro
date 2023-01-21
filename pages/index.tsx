import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import FakeIntro from "../components/fake-intro";
import FirstStep from "../components/first-step";
import SecondStep from "../components/second-step";
import ThirdStep from "../components/third-step";
import FifthStep from "../components/fifth-step";
import FourthStep from "../components/fourth-step";
import SixthStep from "../components/sixth-step";

const Index = () => {
  const [showFakeIntro, setShowFakeIntro] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(6);

  const audioElement = useRef<HTMLAudioElement>(null);

  const onFakeButtonClick = () => {
    audioElement.current?.play();
    setShowFakeIntro(false);
  };

  const updateStep = () => {
    const nextStep = currentStep + 1;

    if (
      nextStep === 1 ||
      nextStep === 2 ||
      nextStep === 3 ||
      nextStep === 4 ||
      nextStep === 5 ||
      nextStep === 6
    ) {
      setCurrentStep(nextStep);
    }
  };

  return (
    <>
      <Head>
        <title>Spotify - Playlist In A Bottle</title>
      </Head>

      <section className="h-screen max-h-screen w-screen">
        {!showFakeIntro && <Header currentStep={currentStep} />}

        {showFakeIntro && <FakeIntro onFakeButtonClick={onFakeButtonClick} />}
        {!showFakeIntro && (
          <>
            {currentStep === 1 && <FirstStep updateStep={updateStep} />}
            {currentStep === 2 && <SecondStep updateStep={updateStep} />}
            {currentStep === 3 && <ThirdStep updateStep={updateStep} />}
            {currentStep === 4 && <FourthStep updateStep={updateStep} />}
            {currentStep === 5 && <FifthStep updateStep={updateStep} />}
            {currentStep === 6 && <SixthStep />}
          </>
        )}
      </section>

      <audio ref={audioElement}>
        <source src="/audio/Juliana.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Index;
