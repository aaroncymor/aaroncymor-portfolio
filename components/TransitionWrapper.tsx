import { useEffect, useRef } from "react";
import gsap from "gsap";

// https://greensock.com/react/
const TransitionWrapper = () => {

  const loadingTransitionRef = useRef(null);
  const tl = useRef(null);
  const q = gsap.utils.selector(loadingTransitionRef)

  useEffect(() => {

    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline()
        .to(q(".app__loading-part"), {
          width: "0%",
          ease: "power1.easeIn",
          stagger: {
            each: 0.05,
          }
        })

    }, loadingTransitionRef);

    return () => {
      ctx.revert();
    };
  });

  return (
    <div className="app__loading-container absolute" ref={loadingTransitionRef}>
      <div className="app__loading-overlay">
        <div className="app__loading-part part-1"></div>
        <div className="app__loading-part part-2"></div>
        <div className="app__loading-part part-3"></div>
        <div className="app__loading-part part-4"></div>
        <div className="app__loading-part part-5"></div>
        <div className="app__loading-part part-6"></div>
        <div className="app__loading-part part-7"></div>
        <div className="app__loading-part part-8"></div>
        <div className="app__loading-part part-9"></div>
        <div className="app__loading-part part-10"></div>
        <div className="app__loading-part part-11"></div>
        <div className="app__loading-part part-12"></div>
        <div className="app__loading-part part-13"></div>
        <div className="app__loading-part part-14"></div>
        <div className="app__loading-part part-15"></div>
        <div className="app__loading-part part-16"></div>
        <div className="app__loading-part part-17"></div>
        <div className="app__loading-part part-18"></div>
        <div className="app__loading-part part-19"></div>
        <div className="app__loading-part part-20"></div>
      </div>
    </div>
  );
};

export default TransitionWrapper;
