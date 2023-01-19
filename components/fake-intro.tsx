import SpotifyIcon from "./icons/spotify";

type Props = {
  onFakeButtonClick: () => void;
};

const FakeIntro = ({ onFakeButtonClick }: Props) => {
  return (
    <>
      <div className="bg-black px-4 py-4">
        <SpotifyIcon />
      </div>

      <div className="flex h-[calc(100vh-56px)] flex-col justify-between bg-pink px-4 pt-20 pb-14">
        <div className="mt-20 text-center text-8xl font-bold tracking-tighter text-black">
          Playlist in a Bottle
        </div>

        <div className="flex flex-col items-center">
          <div className="mt-20 text-center text-xl font-bold tracking-tight text-black">
            Create a musical time capsule to be locked away until 2024.
          </div>

          <button
            onClick={() => onFakeButtonClick()}
            className="mt-10 rounded-full bg-black py-4 px-12 text-lg font-bold text-pink"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
};

export default FakeIntro;
