import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";
import React from 'react';
import { PRIMARY, SECONDARY } from "../constants";

const Hero = () => {
  const terminalRef = useRef(null);
  const titles = ["coder", "rubik's_cuber", "builder", "problem_solver", "ideator"]
  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    // Typewriter effect for the terminal
    const text = "Yash";
    let index = 0;
    const speed = 500;
    const cursor = "_";
    let hasCursor = false;
    let titleIndex = 0;

    setInterval(() => {
      titleIndex = (titleIndex + 1) % titles.length;
      setTitle(titles[titleIndex]);
    }, 2500);

    const typeWriter = () => {
      if (terminalRef.current) {
        if (index < text.length) {
          terminalRef.current.innerHTML = text.substring(0, index + 1) + cursor;
          index++;
          setTimeout(typeWriter, speed);
        } else {
          setInterval(blinkCursor, 500);
        }
      }
    };

    const blinkCursor = () => {
      if (hasCursor) {
        terminalRef.current.innerHTML = text;
        hasCursor = false;
      } else {
        terminalRef.current.innerHTML = text + cursor;
        hasCursor = true;
      }
    };

    setTimeout(typeWriter, 500);
  }, []);

  const splineLink = "https://prod.spline.design/qBn4bUehIqcHffge/scene.splinecode";
  const githubLink = "https://github.com/RubiksCoder/Cadence";

  return (
    <div id='home' className='relative bg-[#252525]'>
      <div className="absolute inset-0 z-0">
        <Spline scene={splineLink} />
      </div>
      <div className="relative flex flex-col justify-center items-start h-[40rem] p-[12rem] z-10">
        <h1 className='mb-10 text-7xl text-white font-extrabold'>{"Hey, I'm "} 
          <span ref={terminalRef} className={'text-[' + PRIMARY + ']'}></span>
        </h1>
        <p className='text-lg text-white '>
          <span className={'text-2xl text-[#ffac68] font-extrabold'}>{"#" + title.toUpperCase()}</span>
        </p>
        <br></br>
        <p className='text-lg text-white max-w-[750px]'>
          I'm a Software Engineering student at the University of Waterloo. 
          I love to learn and create - I'm particularly interested in machine learning, robotics, and software architecture/design.
          Currently, I'm on a mission to create a <a href={githubLink} className='text-[#3bb399] hover:underline'>real-time database</a> from scratch.
        </p>
      </div>
    </div>
  );
};

export default Hero;
