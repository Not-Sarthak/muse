import React, { useRef } from "react";
import Card from "../_cards/Card";
import { cardData } from "@/app/_utils/cardData";

const Features = () => {
  return (
    <div className="min-h-screen w-full p-16">
        <div className="flex justify-end">
      <div className="w-[666px] text-right text-black text-2xl font-semibold font-playfair leading-[28.80px]">
        It's like having a stylist and a mind-reader rolled into one, making
        shopping a breeze and rediscovering the joy of finding that perfect
        treasure.
      </div>
      </div>
      <div className="flex gap-8 items-end pt-20 flex-col lg:flex-row">
      {cardData.map((card, index) => (
        <Card
          key={card.id}
          firstWord={card.firstWord}
          secondWord={card.secondWord}
          description={card.description}
          color={card.color}
          bgColor={card.bgColor}
          image={card.image}
        />
      ))}
    </div>
    </div>
  );
};

export default Features;
