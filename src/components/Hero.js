// import Spline from "@splinetool/react-spline";
import { useState, useEffect, useRef } from "react";
import React from 'react';
import { PRIMARY, SECONDARY } from "../constants";

const Hero = () => {
  const prefixRef = useRef(null);        // For typing "Hey,"
  const restStaticRef = useRef(null);    // For typing " I'm "
  const nameRef = useRef(null);          // For typing "Yash" in color
  const cursorRef = useRef(null);        // For a fixed-width blinking caret
  const titles = ["coder", "rubik's_cuber", "builder", "problem_solver", "ideator"]
  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    // Rotating hashtags below
    let titleIndex = 0;
    const titleInterval = setInterval(() => {
      titleIndex = (titleIndex + 1) % titles.length;
      setTitle(titles[titleIndex]);
    }, 2500);

    // Typing sequence for heading
    const firstPart = "Hey,";
    let i = 0;
    const typeSpeed = 120; // ms per character for "Hey,"

    let typeTimeoutId = null;
    let revealTimeoutId = null;
    let typeSecondTimeoutId = null;
    let cursorIntervalId = null;

    const typeFirstPart = () => {
      if (!prefixRef.current) return;
      if (i < firstPart.length) {
        prefixRef.current.textContent = firstPart.slice(0, i + 1);
        i += 1;
        typeTimeoutId = setTimeout(typeFirstPart, typeSpeed);
      } else {
        // Pause, then type the rest sequentially
        revealTimeoutId = setTimeout(() => {
          const secondPart1 = " I'm ";
          const secondPart2 = "Yash";
          let j = 0;
          let k = 0;

          const typeSecondPart = () => {
            // Type secondPart1 into restStaticRef
            if (restStaticRef.current && j < secondPart1.length) {
              restStaticRef.current.style.visibility = 'visible';
              restStaticRef.current.textContent = secondPart1.slice(0, j + 1);
              j += 1;
              typeSecondTimeoutId = setTimeout(typeSecondPart, typeSpeed);
              return;
            }

            // Then type secondPart2 into nameRef
            if (nameRef.current && k < secondPart2.length) {
              nameRef.current.style.visibility = 'visible';
              nameRef.current.textContent = secondPart2.slice(0, k + 1);
              k += 1;
              typeSecondTimeoutId = setTimeout(typeSecondPart, typeSpeed);
              return;
            }

            // After finishing typing, start cursor blink
            if (cursorRef.current && !cursorIntervalId) {
              cursorIntervalId = setInterval(() => {
                const el = cursorRef.current;
                if (!el) return;
                el.style.opacity = el.style.opacity === '0' ? '1' : '0';
              }, 800);
            }
          };

          typeSecondTimeoutId = setTimeout(typeSecondPart, typeSpeed);
        }, 1000);
      }
    };

    // Slight initial delay before typing begins
    typeTimeoutId = setTimeout(typeFirstPart, 500);

    return () => {
      clearInterval(titleInterval);
      if (typeTimeoutId) clearTimeout(typeTimeoutId);
      if (revealTimeoutId) clearTimeout(revealTimeoutId);
      if (typeSecondTimeoutId) clearTimeout(typeSecondTimeoutId);
      if (cursorIntervalId) clearInterval(cursorIntervalId);
    };
  }, []);

  // const splineLink = "https://prod.spline.design/qBn4bUehIqcHffge/scene.splinecode";
  const githubLink = "https://github.com/RubiksCoder/Cadence";

  return (
    <div id='home' className='relative bg-[#252525]'>
      <div className="relative flex flex-col justify-center items-center h-[40rem] p-[12rem] z-10">
        <h1 className='mb-10 text-7xl text-white font-extrabold'>
          <span ref={prefixRef}></span>
          <span ref={restStaticRef} style={{ visibility: 'hidden' }}></span>
          <span ref={nameRef} className={'text-[' + PRIMARY + ']'} style={{ visibility: 'hidden' }}></span>
          {/* Fixed-width cursor to prevent wobble */}
          <span
            ref={cursorRef}
            style={{
              display: 'inline-block',
              width: '1ch',
              marginLeft: '2px',
              opacity: 1,
              position: 'relative',
              top: '-4px',
            }}
          >
            |
          </span>
        </h1>
        <p className='text-lg text-white '>
          <span className={'text-2xl text-[#ffac68] font-extrabold'}>{"#" + title.toUpperCase()}</span>
        </p>
        <br></br>
        <p className='text-lg text-white max-w-[750px] text-center'>
          I'm a Software Engineering student at the University of Waterloo. 
          I love to learn and create - I'm particularly interested in machine learning, robotics, and software architecture/design.
          Currently, I'm on a mission to create a <a href={githubLink} className='text-[#3bb399] hover:underline'>real-time database</a> from scratch.
        </p>
      </div>
    </div>
  );
};

export default Hero;
