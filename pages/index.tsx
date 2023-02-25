import { useEffect, useRef } from "react";
import { useThemeContext } from "../context/theme";
import IntroLoader from "../components/IntroLoader";
import Blur from "../components/Blur";
import Blob from "../components/Blob";

const Index = () => {
  const { intro } = useThemeContext();
  const [introDone, setIntroDone] = intro;
  const blobRefs = useRef([]);

  // reset on re-renders
  blobRefs.current = [];

  useEffect(() => {
    // const { innerWidth, innerHeight } = window;
    // console.log(`innerWidth: ${innerWidth} innerHeight: ${innerHeight}`)
    // blobRefs.current.forEach(ref => ref.moveTo(innerWidth / 2, innerHeight/2));

    const onMove = ({ clientX, clientY }) => {
      // console.log(`clientX: ${clientX} clientY: ${clientY}`)
      blobRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };

    window.addEventListener("pointermove", onMove);

    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const addBlobRef = ref => {
    if (ref) {
      blobRefs.current.push(ref);
    }
  }

  return (
    <>
      {introDone == false ?
        (<IntroLoader introDone={introDone} setIntroDone={setIntroDone}/>)
        : (<></>)
      }

      <section className="me relative bg-white dark:bg-gray-900 h-screen w-screen overflow-hidden">
        <Blur />
        <Blob ref={addBlobRef} delay={0} />
        {/*<Blob size="w-[30px] h-[30px]" ref={addCircleRef} delay={0} />
        <Blob size="w-[60px] h-[60px]" ref={addCircleRef} delay={0.1} />
        <Blob size="w-[90px] h-[90px]" ref={addCircleRef} delay={0.2} />*/}
        <div className="me__content absolute z-[99]">
          <p className="text-black dark:text-white">wow</p>
        </div>
      </section>
    </>
  );
};

export default Index;
