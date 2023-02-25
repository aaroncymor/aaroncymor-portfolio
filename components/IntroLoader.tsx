import { useEffect, useRef } from "react";
import gsap from "gsap/dist/gsap";

// const IntroLoader = ({ introDone, setIntroDone }) => {
const IntroLoader = ({ introDone, setIntroDone }) => {

  const introAnimationRef = useRef(null);
  const tl = useRef(null);
  const q = gsap.utils.selector(introAnimationRef);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();

      const introText1 = q(".intro-text-1");
      const introText2 = q(".intro-text-2");

      tl.current = gsap.timeline()
        .to(introText1, { display: 'block', duration: 2 })
        .to(introText1, { display: 'none', duration: 0.2 })
        .to(introText2, { display: 'block', duration: 2 })
        .to(introText2, { display: 'none', duration: 0.2 });

      const introBlockLeft = q(".intro-block--left");
      const introBlockRight = q(".intro-block--right")

      gsap.to(introBlockLeft, { left: '-50%', delay: 4.5, duration: 2.5 });
      gsap.to(introBlockRight, {
        right: '-50%',
        delay: 4.5,
        duration: 2.5,
        onComplete() {
          setIntroDone(true);
        }
      });
    }, introAnimationRef);

    return () => ctx && ctx.revert();
  }, []);

  return (
    <div
      className="loader-intro"
      ref={introAnimationRef}
    >
      <h1 className="intro-text-1 fixed w-[8ch] z-[100] text-black text-2xl lg:text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blinking-caret animate-typing-intro-1 overflow-hidden border-r-2 border-r-black border-solid whitespace-nowrap mx-auto my-0 hidden">
        Hi! I am Aa.
      </h1>
      <h1 className="intro-text-2 fixed w-[18ch] z-[100] text-black text-2xl lg:text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-typing-intro-2 overflow-hidden border-r-2 border-r-neon-green border-solid whitespace-nowrap mx-auto my-0 hidden">
        I'm a Fullstack Developer.
      </h1>
      <div className="intro-block--left fixed z-[99] bg-white h-full w-1/2 top-0 overflow-hidden left-0"></div>
      <div className="intro-block--right fixed z-[99] bg-white h-full w-1/2 top-0 overflow-hidden right-0"></div>
    </div>
  );
}

export default IntroLoader;
