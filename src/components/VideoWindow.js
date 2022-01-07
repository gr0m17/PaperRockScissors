import VIDEO_ARRAY from "./VideoArray";
const VideoWindow = (props) => {
  console.log(props);

  return (
    <div className="">
      <video
        className="videoBox"
        id="videoPlayerID"
        onEnded={props.endedHandler}
        autoPlay={"autoplay"}
        muted
        controls=""
        playsInline
        src={props.src || VIDEO_ARRAY[1]}
      />
    </div>
  );
};

export default VideoWindow;
