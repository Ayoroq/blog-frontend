import "./reset.css";
import { Outlet } from "react-router";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ReactLenis } from "lenis/react";
import { PostProvider } from "./context/PostContext.jsx";

function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}></ReactLenis>
        <PostProvider>
          <Outlet />
        </PostProvider>
    </>
  );
}

export default App;