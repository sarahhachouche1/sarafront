import Typed from 'typed.js'
import { useEffect, useRef } from "react";

export const TypedTitle = () => {
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "Full stack developer",
          "Front-end developer",
          "React Developer",
        ],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true,
      });
  
      // Destroying
      return () => {
        typed.destroy();
      };
    }, []);
    return (
      <h3 className="mono text-light">
          I am <span ref={el}></span>{" "}
      </h3>
    );
  };