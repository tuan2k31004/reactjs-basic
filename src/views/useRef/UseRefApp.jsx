import ClickCounter from "./ClickCounter/ClickCounter";
import PlayingVideo from "./PlayingVideo/PlayingVideo";
import StopWatch from "./StopWatch/StopWatch";

export let UseRefApp = [
  { id: 0, render: <ClickCounter />, name: "Click Counter" },
  { id: 1, render: <StopWatch />, name: "Stop Watch" },
  { id: 2, render: <PlayingVideo />, name: "Playing and pause video" },
];
