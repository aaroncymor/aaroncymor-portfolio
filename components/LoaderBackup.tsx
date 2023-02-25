import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";

const Loader = () => {
  const loaderContainerRef = useRef(null);
  const tl = useRef(null);
  const q = gsap.utils.selector(loaderContainerRef);

  useEffect(() => {

    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      const typing1 = q(".typing--1st");
      const typing2 = q(".typing--2nd");
      const typing3 = q(".typing--3rd");

      tl.current = gsap.timeline()
        .to(typing1, {
          display: 'block'
        })
        .to(typing1, {
          delay: 2,
          border: 'none'
        })
        .to(typing2, {
          display: 'block'
        })
        .to(typing2, {
          delay: 2,
          border: 'none'
        })
        .to(typing3, {
          display: 'block'
        })
        .to(typing3, {
          delay: 3,
          border: 'none'
        });

    }, loaderContainerRef);

    return () => {
      ctx && ctx.revert();
    }

  },[]);

  return (
    <div className="loader h-screen w-screen bg-white dark:bg-gray-900 flex flex-row justify-between items-center font-mono">
      <div
        className="loader__container w-full max-w-[1440px] mx-auto ml-8 lg:ml-16"
        ref={loaderContainerRef}
      >
        <p className="loader__intro typing--1st">Hi! I am Aa</p>
        <p className="loader__intro typing--2nd">Nice to meet you!</p>
        <p className="loader__intro typing--3rd">I'm a Fullstack Developer.</p>
      </div>
    </div>
  );
}

export default Loader;
