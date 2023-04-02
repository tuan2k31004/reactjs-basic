import { useRef, useState } from "react";

export default function PlayingVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const ref = useRef(null);
  return (
    <>
      <button
        onClick={() => {
          isPlaying ? ref.current.play() : ref.current.pause();
        }}
      >
        {isPlaying ? "play" : "pause"}
      </button>
      <br />
      <video
        width={500}
        height={300}
        onPlay={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(true)}
        ref={ref}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
