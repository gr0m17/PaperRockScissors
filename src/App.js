import "./App.css";
import { GAME_DATA } from "./components/GameTree";
import DataTree from "./components/DataTree";
import VideoWindow from "./components/VideoWindow";
import { useState, useEffect } from "react";
import VIDEO_ARRAY from "./components/VideoArray";
function App() {
  let videoPlayer;
  useEffect(() => {
    //once the video player exists on the page, attach to it.
    videoPlayer = document.getElementById("videoPlayerID");
    // console.log(videoPlayer);
  }, []);
  const [currentVideoID, setCurrentVideoID] = useState(1);
  const [nextVideo, setNextVideo] = useState(2);
  // const currentVideoIDRef = useRef(currentVideoID);
  // const nextVideoRef = useRef(nextVideo);
  const resetCurrentVideoHandler = (payload, now = 0) => {
    console.log("RESET THE CURRENT VIDEO: ", payload, " now?:", now);
    setNextVideo(payload);

    console.log("Next video:", payload);
    if (now) {
      console.log("setting current Video id:", payload);
      setNextVideo(payload);
      const reactStateRace = setTimeout(endedHandler, 100);
    }
  };
  const videoPlay = () => {
    videoPlayer = document.getElementById("videoPlayerID");
    videoPlayer.play();
  };
  const endedHandler = (event) => {
    console.log("next video = ", nextVideo);
    setCurrentVideoID(nextVideo);
    videoPlayer = document.getElementById("videoPlayerID");
    videoPlayer.src = VIDEO_ARRAY[nextVideo];
    // setNextVideo(currentVideoData(nextVideo).defaultNext);
  };
  const currentVideoData = (videoID) => {
    return [...Object.values(GAME_DATA)][videoID];
  };
  // console.log(currentVideoData(currentVideoID));
  return (
    <div className="App">
      <VideoWindow
        currentVideoID={currentVideoID}
        endedHandler={endedHandler}
      />
      <DataTree
        BRANCH_DATA={currentVideoData(currentVideoID).branches}
        resetHandler={resetCurrentVideoHandler}
        defaultNext={currentVideoData(currentVideoID).defaultNext}
      />
      <button onClick={endedHandler}>enderHandler</button>
      <div>
        {" "}
        <button onClick={videoPlay}>PLAY</button>
      </div>
    </div>
  );
}

// const BRANCH_DATA = {
//   b1: {
//     name: "Branch 1",
//     videoID: 1,
//     buttonText: "Button Text 1",
//     specialHandler: function () {
//       console.log("clicked button 1");
//     },
//   },
//   b2: {
//     name: "Branch 2",
//     videoID: 2,
//     buttonText: "Button Text 2",
//     specialHandler: function () {
//       console.log("clicked button 2");
//     },
//   },
//   b3: {
//     name: "Branch 3",
//     videoID: 3,
//     buttonText: "Button Text 3",
//     specialHandler: function () {
//       console.log("clicked button 3");
//     },
//   },
// };
export default App;
