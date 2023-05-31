import Typed from 'typed.js'
import { useEffect, useRef } from "react";

export const TypedLobby = () => {
    const el = useRef(null);
    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
          "Sarah & Community"
        ],
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop: true,
      });
  
    const duration = 30000; // 1 minute in milliseconds
    const timeout = setTimeout(() => {
      typed.destroy();
    }, duration);

    // Clearing timeout and destroying Typed instance
    return () => {
      clearTimeout(timeout);
      typed.destroy();
    };
    }, []);
    return (
      <h3 className="text-center text-xl mt-12">
          Ask <span ref={el}></span>{" "}
      </h3>
    );
  };