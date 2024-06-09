"use client";
import { useState, useEffect, useRef } from "react";
import Header from "../_navbar/Header";
import Content from "./Content";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import Image from "next/image";
import hero from "../../../public/hero/hero.svg"

const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const [showNotification, setShowNotification] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col md:min-h-screen h-screen relative">
      <audio ref={audioRef} loop>
        <source src="/music/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <div className="pt-10">
        <Header text="Muse" />
      </div>

      <div className="flex flex-1 flex-col-reverse justify-end md:flex-row">
        <div className="w-full md:w-1/2 px-4 md:px-48 flex justify-center items-center">
          <Content
            title="The future of retail."
            subtitle="where you see only what you want"
          />
        </div>
        <div className="w-full md:w-1/2 flex lg:justify-center lg:items-center justify-start">
          <Image src={hero} alt="hero"  />
        </div>
      </div>
      <button
        onClick={togglePlay}
        className="absolute bottom-8 right-4 lg:bottom-4 lg:right-4 border-2 rounded-full text-black p-2"
      >
        {isPlaying ? <HiOutlineSpeakerWave className="text-2xl"/> : <HiOutlineSpeakerXMark className="text-2xl"/>}
      </button>
    </div>
  );
};

export default Hero;
