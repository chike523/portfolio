import React, { useEffect, useRef, useState } from "react";

const CHARS = "!<>-_\/[]{}—=+*^?#________";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function ScrambleGlitch({ text, interval = 40, glitchDuration = 600, repeatDelay = 3000 }) {
  const [display, setDisplay] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef(null);
  const repeatRef = useRef(null);

  function startScramble() {
    let running = true;
    let frame = 0;
    let scrambled = text.split("");
    setIsGlitching(true);

    function scramble() {
      if (!running) return;
      scrambled = scrambled.map((char, i) =>
        Math.random() < 0.5 ? randomChar() : text[i]
      );
      setDisplay(scrambled.join(""));
      frame++;
      if (frame < glitchDuration / interval) {
        timeoutRef.current = setTimeout(scramble, interval);
      } else {
        setDisplay(text);
        setIsGlitching(false);
        repeatRef.current = setTimeout(startScramble, repeatDelay);
      }
    }
    scramble();
    return () => {
      running = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (repeatRef.current) clearTimeout(repeatRef.current);
    };
  }

  useEffect(() => {
    const cleanup = startScramble();
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span
      className={isGlitching ? "glitch text-purple-accent" : "text-purple-accent"}
      data-text={text}
    >
      {display}
    </span>
  );
} 