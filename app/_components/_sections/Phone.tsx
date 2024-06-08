"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import iphone from "../../../public/phone/iphone.png";
import Header from "../_navbar/Header";
import search from "../../../public/icons/search.svg";
import dashboard from "../../../public/icons/dashboard.svg";
import { clothesData } from "../../_utils/clothesData";

interface ClothesItem {
  id: number;
  importPath: string;
  name: string;
  price: string;
}

const IPhone = () => {
  const [selectedButton, setSelectedButton] = useState("1");
  const [displayedItem, setDisplayedItem] = useState<ClothesItem | null>(null);

  useEffect(() => {
    const filteredItem = clothesData.find(
      (item) => item.id.toString() === selectedButton
    );
    setDisplayedItem(filteredItem || null);
  }, [selectedButton]);

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="relative flex w-full items-center gap-8">
      <div className="w-64 relative">
        <Image src={iphone} alt="iPhone" className="w-64 z-10" />

        <div className="absolute top-0 container p-6">
          <div className="flex justify-between">
            <div>
              <Header text="Muse" />
            </div>
            <div>
              <div className="flex justify-center gap-2">
                <Image
                  src={search}
                  alt="search"
                  className="-z-10 w-10 h-10 p-2.5 bg-neutral-100 rounded-lg justify-start items-start gap-2.5 inline-flex"
                />
                <Image
                  src={dashboard}
                  alt="search"
                  className="-z-10 w-10 h-10 p-2.5 bg-neutral-100 rounded-lg justify-start items-start gap-2.5 inline-flex"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center text-black text-lg font-bold font-playfair italic mt-4 leading-snug">
            Blazers
          </div>
          <div className="flex items-center gap-2 mt-4">
            <button
              className={`px-2.5 py-[5px] rounded justify-center items-center gap-2.5 inline-flex text-black text-sm font-medium font-['DM Sans'] leading-[16.80px] ${
                selectedButton === "1" ? "bg-black text-white" : "bg-stone-50"
              }`}
              onClick={() => handleButtonClick("1")}
            >
              Small
            </button>
            <button
              className={`px-2.5 py-[5px] rounded justify-center items-center gap-2.5 inline-flex text-black text-sm font-medium font-['DM Sans'] leading-[16.80px] ${
                selectedButton === "2" ? "bg-black text-white" : "bg-stone-50"
              }`}
              onClick={() => handleButtonClick("2")}
            >
              Black
            </button>
            <button
              className={`px-2.5 py-[5px] rounded justify-center items-center gap-2.5 inline-flex text-black text-sm font-medium font-['DM Sans'] leading-[16.80px] ${
                selectedButton === "3" ? "bg-black text-white" : "bg-stone-50"
              }`}
              onClick={() => handleButtonClick("3")}
            >
              White
            </button>
          </div>
          <div className="w-52 mt-4 rounded-tl-2xl rounded-tr-2xl inline-flex flex-col">
            {displayedItem && (
              <div
                key={displayedItem.id}
                className="w-52 rounded-tl-2xl rounded-tr-2xl inline-flex flex-col mb-4"
              >
                <Image
                  src={displayedItem.importPath}
                  alt={`Clothes ${displayedItem.id}`}
                  className="w-52 bg-neutral-100 h-64 rounded-tl-2xl rounded-tr-2xl"
                />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="text-black mt-4 text-sm flex justify-start font-medium font-dmSans leading-snug">
                      {displayedItem.name}
                    </div>
                    <div className="text-black text-xl font-bold font-dmSans leading-normal">
                      ₹{displayedItem.price}
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="bg-black text-white px-3 py-1 rounded-lg hover:scale-110 transition">
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="">
        {displayedItem && (
          <Image
            src={displayedItem.importPath}
            alt={`Clothes ${displayedItem.id}`}
            className="w-[300px] rounded-tl-2xl rounded-tr-2xl"
          />
        )}
      </div>
    </div>
  );
};

export default IPhone;