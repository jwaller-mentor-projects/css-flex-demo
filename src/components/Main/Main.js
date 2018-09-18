import React, { Component } from "react";
import "./Main.css";

function Main() {
  return (
    <div className="left_panel">
      <h1>Dog Page</h1>
      <p>Welcome to my site</p>
      <div className="puppy_container">
        <img
          className="puppy_img"
          src="https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg"
        />
        <img
          className="puppy_img"
          src="https://www.rd.com/wp-content/uploads/2018/02/24_Adorable-Puppy-Pictures-that-Will-Make-You-Melt_512443759_thanai-asawaroengchai-760x506.jpg"
        />
        <img
          className="puppy_img"
          src="https://img.buzzfeed.com/buzzfeed-static/static/2015-02/18/10/enhanced/webdr09/enhanced-buzz-32241-1424274656-13.jpg?downsize=715:*&output-format=auto&output-quality=auto"
        />
        <img
          className="puppy_img"
          src="https://the-riotact.com/wp-content/uploads/2018/03/puppy-scam-810x723.jpg"
        />
      </div>
    </div>
  );
}

export default Main;
