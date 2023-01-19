import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import "../styles/index.css";
import "../styles/animations.css";

const spotifyFont = localFont({
  src: [
    {
      path: "../public/font/GothamLight.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/font/GothamBook.ttf",
      weight: "350",
      style: "normal",
    },
    {
      path: "../public/font/GothamMedium.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/GothamBold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-spotify",
});

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${spotifyFont.variable} font-sans text-black`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
