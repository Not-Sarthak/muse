import IPhone from "./Phone";
import { RoughNotation } from "react-rough-notation";

const Clothes = () => {
  return (
    <div className="w-full relative h-screen overflow-hidden grid place-items-center p-10">
      <div className="text-center flex flex-col">
        <span className="text-black text-2xl font-semibold font-playfair leading-[28.80px]">
          Discover your perfect blazer.
        </span>
        <span className="text-black text-2xl font-semibold font-playfair leading-[28.80px] italic">
          And the fact that you’ll need it soon.
        </span>
      </div>
      <div className="text-center mt-10">
        <IPhone />
      </div>
      <div className="hidden md:flex md:absolute top-80 left-40 -rotate-12">
        <RoughNotation
          type="circle"
          show={true}
          strokeWidth={1}
          animationDuration={400}
          animationDelay={1000}
          color="black"
        >
          <span className="font-serif italic main-text-in text-2xl">
            Shop in 2 clicks
          </span>
        </RoughNotation>
      </div>
    </div>
  );
};

export default Clothes;
