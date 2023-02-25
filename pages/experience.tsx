import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TransitionWrapper from "../components/TransitionWrapper";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {

  let ref = useRef(null);
  let horizontalRef = useRef(null);

  useEffect(() => {
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    const  ctx = gsap.context(() => {
      setTimeout(() => {
        t1.to(ref.current, {
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            markers: true,
          },
          height: `${scrollingElement.scrollWidth}px`,
          ease: "none",
        });

        t1.to(horizontalRef.current, {
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: `${pinWrapWidth} bottom`,
            scroller: ".App",
            scrub: 1,
            markers: true,
          },
          x: -pinWrapWidth,
          ease: "none"
        });

        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
    }, ref);

    return () => {
      t1.kill();
      ScrollTrigger.killAll();
      ctx && ctx.revert();
    }
  }, [])

  const mainContainer = {
    preTransition: {
      position: "absolute",
    },
    postTransition: {
      position: "initial",
    }
  }

  return (
    <>
      <TransitionWrapper />
      <motion.section
        variants={mainContainer}
        initial="preTransition"
        animate="postTransition"
        className="experience"
      >
        <div className="min-h-screen w-full bg-white dark:bg-gray-900">
          <div className="">
          </div>
        </div>
        <div
          className="experience min-h-screen h-auto w-full my-0 mx-auto overflow-hidden flex justify-start items-start relative bg-white dark:bg-gray-900"
          ref={ref}
        >
          <div className="experience__content--left h-full w-[35%] text-xl lg:text-2xl xl:text-3xl text-black dark:text-white z-10 fixed left-0 flex justify-center items-center bg-gray-600 dark:bg-gray-400">
            <p className="text-black dark:text-white text-xs md:text-sm lg:text-lg xl:text-2xl font-light md:w-[40%] lg:w-[80%] my-0 mx-auto">
              The brand new collection is currently being developed in USA. We
              create our products using best quality material, including the use of
              some of the pure fabrics to make our products. All products are made
              using the best materials, from the finest cotton to the finest
              fabrics.
              <br /> <br />
              We have lots of different clothing options like shoes, jackets and
              dresses. Not only clothes but we also provide unique Jewellery as
              well. It is great for us to carry our new clothes all around the
              country and look different.
            </p>
          </div>
          <div
            className="experience__content--right absolute top-0 left-0 min-h-screen flex justify-start items-center text-black dark:text-white"
            ref={horizontalRef}
          >
            <div className="experience__item inline-block w-screen">
              <h2 className="font-medium text-center cursor-pointer">Sweatshirts</h2>
            </div>
            <div className="experience__item inline-block w-screen">
              <h2 className="font-medium text-center cursor-pointer">Ethnic Wear</h2>
            </div>
          </div>
        </div>
    </motion.section>
    </>
  );
}

export default Experience;
