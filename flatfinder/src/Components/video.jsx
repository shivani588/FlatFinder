import { useRef, useState } from "react";
import "./Video.css";

const Video = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <div className="row align-items-center g-4">
        {/* Left Flower Image */}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.homestratosphere.com/wp-content/uploads/2021/02/3-bedroom-two-story-coastal-cottage-home-with-bonus-room-feb242021-04-min-870x579.jpg"
              className="card-img-top vidimg"
              alt="Flower"
            />
          </div>
        </div>

        {/* Video in the center */}
        <div className="col-md-6">
          <div className="video-container text-center my-5 py-4">
            <video ref={videoRef} autoPlay loop className="video-responsive">
              <source src="/public/video.mp4" type="video/mp4" />
             
              Your browser does not support the video tag.
            </video>
            <div className="controls mt-3">
              <button onClick={togglePlayPause} className="butan">
                {isPlaying ? (
                  <i className="fas fa-pause fs-1"></i>
                ) : (
                  <i className="fas fa-play fs-1"></i>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Flower Image */}
        <div className="col-md-3">
          <div className="card">
            <img
              src="https://www.homestratosphere.com/wp-content/uploads/2021/02/3-bedroom-two-story-coastal-cottage-home-with-bonus-room-feb242021-04-min-870x579.jpg"
              className="card-img-top vidimg"
              alt="Flower"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;