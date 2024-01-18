import React, { useState } from "react";

export default function VideoPlayer({videoSrc}) {
 // const [url, setUrl] = useState();
  const [playing, setPlaying] = useState(true);

  return (
    <video
      width="680"
      height="360"
      autoPlay	     
      loop
      controls
      src={videoSrc}
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)} className="video"
    >
      {playing ? "Reproduciendo" : "En pausa"}
    </video>
  );
}