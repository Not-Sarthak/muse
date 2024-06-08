"use client";
import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import splash from "../../../public/icons/splash.svg";
import splashEnd from "../../../public/icons/splashEnd.svg";
import arrow from "../../../public/icons/center-arrow.svg";

const words: string[] = [
  "Browsing history",
  "Past order history",
  "Calendar reminders",
  "Weather forecasts",
  "Shopping carts across apps",
  "Social media analytics",
];

interface AnimatedWordProps {
  word: string;
  index: number;
  startAnimation: boolean;
  onAnimationEnd: () => void;
  animationCompleted: boolean;
}

const Analytics: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [animationCounter, setAnimationCounter] = useState(0);

  const handleAnimationEnd = () => {
    setAnimationCounter((prev) => prev + 1);
  };

  useEffect(() => {
    if (animationCounter === words.length) {
      setTimeout(() => {
        setAnimationCompleted(true);
      }, 3000); 
    }
  }, [animationCounter]);

  return (
<div ref={ref} className={`relative w-full h-screen flex ${animationCompleted ? "flex-col items-start justify-end p-10" : "justify-center items-center"}`}>
  {animationCompleted && (
    <>
    <div className="absolute top-0 left-0 mt-10 ml-10">
      <div className="text-black text-2xl font-semibold font-playfair leading-[28.80px]">A intelligent shopping buddy that uses all your data to save your time</div>
    </div>
      <div className="absolute inset-0 flex justify-center items-center">
      <Image src={arrow} alt="Center Image" width={300} height={300} />
    </div>
  
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
      <div>Right Image</div>
    </div>
    </>
  )}

  {words.map((word, index) => (
    <AnimatedWord key={index} word={word} index={index} startAnimation={inView} onAnimationEnd={handleAnimationEnd} animationCompleted={animationCompleted} />
  ))}
</div>
  );
};

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index, startAnimation, onAnimationEnd, animationCompleted }) => {
  const [animationDone, setAnimationDone] = useState(false);

  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: startAnimation ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(-20px)" },
    delay: startAnimation ? index * 500 : 0,
    config: config.gentle,
    onRest: () => setAnimationDone(true),
  });

  useEffect(() => {
    if (animationDone) {
      onAnimationEnd();
    }
  }, [animationDone, onAnimationEnd]);

  const wordStyles = [
    index === 0 ? "text-black lg:text-5xl font-medium font-dmSans leading-[57.60px] flex flex-row items-end absolute lg:top-10 lg:left-32 top-0 left-0 text-3xl" : "",
    index === 1 ? "text-black lg:text-5xl font-medium font-dmSans leading-[57.60px] absolute lg:top-36 lg:right-48 text-3xl top-[12rem] right-12" : "",
    index === 2 ? "text-black lg:text-5xl font-medium font-dmSans leading-[57.60px] absolute lg:top-72 lg:left-[400px] top-36 left-10 text-3xl top-[20rem] left-10" : "",
    index === 3 ? "text-black lg:text-5xl font-medium font-dmSans leading-[57.60px] absolute lg:top-[23rem] lg:right-[100px] top-[30rem] right-10 text-3xl" : "",
    index === 4 ? "text-black lg:text-5xl font-medium font-dmSans leading-[57.60px] absolute lg:top-[29rem] lg:left-[200px] top-[38rem] left-2 text-3xl" : "",
    index === 5 ? "text-black lg:text-5xl font-medium font-dmSans leading-[57.60px] flex flex-row-reverse absolute lg:bottom-[10rem] xl:bottom-0 lg:right-[200px] bottom-10 text-3xl" : "",
  ].join(" ");

  const finalStyles = animationCompleted ? "text-black text-[22px] lg:text-[40px] font-medium font-dmSans my-2 fade-in slide-in leading-[28px]" : wordStyles;

  return (
    <animated.div style={props} className={finalStyles}>
      {index === 0 && !animationCompleted && <Image src={splash} alt="Splash image" width={100} height={100} />}
      {index === 5 && !animationCompleted && <Image src={splashEnd} alt="SplashEnd image" width={100} height={100} />}
      <div className="">{word}</div>
    </animated.div>
  );
};

export default Analytics;