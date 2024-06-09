import React from "react";
import BlackButton from "../_buttons/BlackButton";

const CashbackMessage = () => {
  return (
    <div className="text-center flex flex-col">
      <span className="text-black text-3xl md:text-5xl font-semibold font-playfair leading-3xl">
        Earn a <span className="italic"> cashback </span> of 5% for every
        purchase,
      </span>
      <span className="text-black text-3xl md:text-5xl font-semibold font-playfair leading-3xl">
        I mean, it was <span className="italic"> your </span> data after all.
      </span>
    </div>
  );
};

const End = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-10 p-2">
      <div>
        <CashbackMessage />
      </div>
      <div className="h-32 w-[1px] bg-black hidden md:flex"></div>
      <div className="h-[1px] w-32 bg-black md:hidden flex"></div>
      <div className="flex gap-4 md:gap-2 items-center flex-col md:flex-row">
        <button className="w-56 px-8 py-5 rounded-lg bg-neutral-200 hover:scale-110 transition-transform duration-300">
            Or tell people
        </button>
        <button className="w-56 px-8 py-5 rounded-lg bg-black text-white hover:scale-110 transition-transform duration-300">
            Start smart buying
        </button>
      </div>
    </div>
  );
};

export default End;
