import { useState, useRef } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }
  return (
    <>
      <h1>Time passed: {secondsPassed}</h1>
      <button
        onClick={() => {
          setStartTime(Date.now());
          setNow(Date.now());
          clearInterval(intervalRef.current);
          intervalRef.current = setInterval(() => {
            setNow(Date.now());
          }, 10);
        }}
      >
        Start
      </button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Stop
      </button>
    </>
  );
}
