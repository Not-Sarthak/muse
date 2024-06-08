"use client";
import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";

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
}

const Analytics: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="relative w-full h-screen flex justify-center items-center bg-gray-100">
      {words.map((word, index) => (
        <AnimatedWord key={index} word={word} index={index} startAnimation={inView} />
      ))}
    </div>
  );
};

const AnimatedWord: React.FC<AnimatedWordProps> = ({ word, index, startAnimation }) => {
  const props = useSpring({
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: startAnimation ? { opacity: 1, transform: "translateY(0px)" } : { opacity: 0, transform: "translateY(-20px)" },
    delay: startAnimation ? index * 500 : 0,
    config: config.gentle,
  });

  const wordStyles = [
    index === 0 ? "" : "",
    index === 1 ? "" : "",
    index === 2 ? "" : "",
    index === 3 ? "" : "",
    index === 4 ? "" : "",
    index === 5 ? "" : "",
  ].join(" ");

  return (
    <animated.div style={props} className={wordStyles}>
      {word}
    </animated.div>
  );
};

export default Analytics;