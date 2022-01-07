import VIDEO_ARRAY from "./VideoArray";
const VideoWindow = (props) => {
  console.log(props);

  return (
    <div>
      <video
        width="100%"
        id="videoPlayerID"
        onEnded={props.endedHandler}
        autoPlay={"autoplay"}
        muted
        controls=""
        playsInline
      >
        <source src={VIDEO_ARRAY[1]} />
      </video>
    </div>
  );
};

export default VideoWindow;
