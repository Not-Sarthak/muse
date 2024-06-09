import Image from "next/image";

export interface CardProps {
    firstWord: string;
    secondWord: string;
    description: string;
    color: string;
    bgColor: string;
    image: string;
  }

const Card: React.FC<CardProps> = ({
  firstWord,
  secondWord,
  description,
  color,
  bgColor,
  image,
}) => {
  return (
    <div className="flex justify-center items-center hover:scale-90 transition">
      <div
        className={`w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[318px] lg:h-[434px] px-5 py-10 sm:py-20 rounded-xl ${bgColor} shadow-inner border border-[#F5F5F5] flex flex-col justify-start items-start gap-6`}
      >
        <div className="relative w-12 h-14 sm:w-14 sm:h-16 md:w-16 md:h-18 lg:w-[52.96px] lg:h-[60px]">
          <Image src={image} alt="secure" layout="fill" objectFit="contain" />
        </div>
        <div className="text-left font-playfair text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold leading-tight">
          <span className={`${color} italic`}>{firstWord}</span>
          <span className="text-neutral-700"> {secondWord}</span>
        </div>
        <div
          className="text-neutral-700 text-sm sm:text-base md:text-[16px] font-normal font-dmSans"
          style={{ lineHeight: "1.2" }}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
