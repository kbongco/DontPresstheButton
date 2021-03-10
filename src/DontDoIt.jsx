import React, { useState } from "react";
import ReactPlayer from "react-player";

export default function DontDoIt() {
  const [playVid, setPlayVid] = useState(false);

  const played = () => {
    if (playVid === false) {
      return "Dont Click on me!";
    } else {
      return (
        <div className="container">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing="true"
            controls={false}
          />
        </div>
      );
    }
  };
  return (
    <>
      <h1>Don't press the button!</h1>
      <button className="dontdoit" onClick={(e) => setPlayVid(!playVid)}>
        {played()}
      </button>
    </>
  );
}
