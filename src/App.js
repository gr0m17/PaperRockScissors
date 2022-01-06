import "./App.css";
import { GAME_DATA } from "./components/GameTree";
import DataTree from "./components/DataTree";
import { useState } from "react";
function App() {
  const resetCurrentVideoHandler = (payload) => {
    console.log(payload);
    setCurrentVideoID(payload);
  };
  const [currentVideoID, setCurrentVideoID] = useState(3);
  const currentVideoData = (videoID) => {
    return [...Object.values(GAME_DATA)][videoID];
  };
  console.log(currentVideoData(currentVideoID));
  return (
    <div className="App">
      <DataTree
        BRANCH_DATA={currentVideoData(currentVideoID).branches}
        resetHandler={resetCurrentVideoHandler}
      />
    </div>
  );
}

const BRANCH_DATA = {
  b1: {
    name: "Branch 1",
    videoID: 1,
    buttonText: "Button Text 1",
    specialHandler: function () {
      console.log("clicked button 1");
    },
  },
  b2: {
    name: "Branch 2",
    videoID: 2,
    buttonText: "Button Text 2",
    specialHandler: function () {
      console.log("clicked button 2");
    },
  },
  b3: {
    name: "Branch 3",
    videoID: 3,
    buttonText: "Button Text 3",
    specialHandler: function () {
      console.log("clicked button 3");
    },
  },
};
export default App;
