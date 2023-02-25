import { useRouter } from "next/router";
import { useRef } from "react";
import { useThemeContext } from "../context/theme";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ScrollTriggerProxy from "../components/ScrollTriggerProxy";

import Header from "../components/Header";

export default function Layout({ children }) {

  const { asPath } = useRouter();
  const containerRef = useRef(null);
  const { theme } = useThemeContext();
  const [darkMode, setDarkMode] = theme;

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      watch={[]}
      location={asPath}
      onLocationChange={(scroll: any) =>
        scroll.scrollTo(0, { duration: 0, disableLerp: true })
      }
      containerRef={containerRef}
    >
      <main
        data-scroll-container
        className={darkMode ? "App dark" : "App"}
        ref={containerRef}
      >
        <ScrollTriggerProxy />
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </main>
    </LocomotiveScrollProvider>
  );

};
