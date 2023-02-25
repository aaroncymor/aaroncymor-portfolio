import { useEffect, useRef, useState, useImperativeHandle, forwardRef } from "react";
import { gsap } from "gsap/dist/gsap";

// inspired by Hyperplexed https://codepen.io/Hyperplexed/pen/KKBjvbG
// with GSAP react-advanced https://greensock.com/react-advanced/
const Blob = forwardRef(({ delay }, ref) => {
  const el = useRef(null);

  useImperativeHandle(ref, () => {

    // return our API
    return {
      moveTo(x, y) {
        console.log(`X: ${x}`);
        console.log(`Y: ${y}`);
        el.current.animate({
          left: `${x}px`,
          top: `${y}px`
        }, { duration: 3000, fill: "forwards"});
        // gsap.to(el.current, { x, y, delay });
      }
    };
  }, [delay]);
  // return <div className={`rounded-full flex items-center justify-center text-center bg-[#28A92B] font-semibold text-white  ${size} fixed top-0 left-0 opacity-[0.3] z-[99]`} ref={el}></div>;
  // return <div className={`h-[34vmax] bg-white bg-gradient-to-r from-[#71F0C5] to-[#8f6dd5] aspect-square absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.8] rounded-full`} ref={el}></div>;
  return <div className={`blob`} ref={el}></div>;
});

export default Blob;
