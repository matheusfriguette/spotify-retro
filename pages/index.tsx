import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Header from "../components/header";
import FakeIntro from "../components/fake-intro";
import FirstStep from "../components/first-step";
import SecondStep from "../components/second-step";
import ThirdStep from "../components/third-step";
import FifthStep from "../components/fifth-step";

const Index = () => {
  const [showFakeIntro, setShowFakeIntro] = useState(true);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  const audioElements = {
    1: useRef<HTMLAudioElement>(null),
    2: useRef<HTMLAudioElement>(null),
    3: useRef<HTMLAudioElement>(null),
    4: useRef<HTMLAudioElement>(null),
    5: useRef<HTMLAudioElement>(null),
  };

  const onFakeButtonClick = () => {
    audioElements[1].current?.play();
    setShowFakeIntro(false);
  };

  const updateStep = () => {
    audioElements[currentStep].current?.pause();

    const nextStep = currentStep + 1;

    if (
      nextStep === 1 ||
      nextStep === 2 ||
      nextStep === 3 ||
      nextStep === 4 ||
      nextStep === 5
    ) {
      audioElements[nextStep].current?.play();
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
            {currentStep === 5 && <FifthStep updateStep={updateStep} />}
          </>
        )}
      </section>

      <audio ref={audioElements[1]}>
        <source src="/audio/Lovers Rock.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={audioElements[2]}>
        <source src="/audio/Melting.mp3" type="audio/mpeg" />
      </audio>

      <audio ref={audioElements[3]}>
        <source src="/audio/Dreams Tonite.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
};

export default Index;
