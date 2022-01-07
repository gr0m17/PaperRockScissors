import "./App.css";
import { GAME_DATA } from "./components/GameTree";
import DataTree from "./components/DataTree";
import VideoWindow from "./components/VideoWindow";
import { useState, useRef } from "react";
import VIDEO_ARRAY from "./components/VideoArray";

function App() {
  const [currentVideoID, setCurrentVideoID] = useState(1);
  const [nextVideo, setNextVideo] = useState(2);
  let [videoSrc, setVideoSrc] = useState(VIDEO_ARRAY[currentVideoID]);

  const nextVideoRef = useRef(nextVideo);
  const resetCurrentVideoHandler = (payload, now = 0) => {
    console.log("RESET THE CURRENT VIDEO: ", payload, " now?:", now);
    setNextVideo(payload);

    console.log("Next video:", payload);
    if (now) {
      // console.log("setting current Video id:", payload);
      setNextVideo(payload);

      endedHandler(null, payload);
    }
  };
  const endedHandler = (event = null, videoId) => {
    console.log(videoId);
    if (!videoId) {
      console.log("videoId = nextVideo;");
      videoId = nextVideo;
    }
    console.log("next video = ", videoId);
    setCurrentVideoID(videoId);
    setVideoSrc(VIDEO_ARRAY[videoId]);
    setNextVideo(currentVideoData(videoId).defaultNext);
  };
  const currentVideoData = (videoID) => {
    return Object.values(GAME_DATA)[videoID];
  };
  return (
    <div className="App">
      <VideoWindow
        currentVideoID={currentVideoID}
        endedHandler={() =>
          endedHandler(currentVideoData(currentVideoID).defaultNext)
        }
        src={videoSrc}
        nextVideo={nextVideo}
      />
      <DataTree
        BRANCH_DATA={currentVideoData(currentVideoID).branches}
        resetHandler={resetCurrentVideoHandler}
      />
      {/* <button onClick={() => endedHandler(nextVideo)}>enderHandler</button> */}
    </div>
  );
}

export default App;
