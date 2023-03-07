import React, { useState, useEffect } from "react";

function VideoPlayer() {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (elapsedTime > 0 && elapsedTime % 6 === 0) {
      alert("Pop-up!");
    }
  }, [elapsedTime]);

  return (
    <div>
      <video controls>
        <source src="https://youtu.be/WNCl-69POro" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
