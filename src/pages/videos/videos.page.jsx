import React, { useEffect } from "react";
import "./videos.css";
import ReactPlayer from "react-player";

const Videos = () => {
  return (
    <div className="videos">
      <ReactPlayer
        url="https://youtu.be/HQTUWK7CM-Y"
        width="100%"
        height="80vh"
      />
      <h2>How We Can Keep Plastics Out of Our Ocean</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud
      </p>
      <div className="upcoming container">
        <h3> Upcoming videos</h3>
        <div class="row">
          <div class="col s4">
            <ReactPlayer
              url="https://youtu.be/HQTUWK7CM-Y"
              width="100%"
              height="200px"
            />
          </div>
          <div class="col s8">
            <h4>How We Can Keep Plastics Out of Our Ocean</h4>
          </div>
        </div>
        <div class="row">
          <div class="col s4">
            <ReactPlayer
              url="https://youtu.be/HQTUWK7CM-Y"
              width="100%"
              height="200px"
            />
          </div>
          <div class="col s8">
            <h4>How We Can Keep Plastics Out of Our Ocean</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Videos;
