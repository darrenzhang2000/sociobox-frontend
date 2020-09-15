import React, { useEffect } from "react";
import "./home.css";
import banner from "./images/Group 19.png";
const Home = () => {
  return (
    <div className="home">
      <div class="">
        {/* start search */}
        <div className="row">
          <form className="col s12" className="searchForm">
            <div className="row">
              <div className="col s4 offset-s8">
                <div className="row">
                  <div className="input-field col s11 ">
                    <input
                      type="text"
                      class="validate searchInput"
                      placeholder="Search"
                    />
                  </div>
                  <div className="col s1">
                    <i className="material-icons searchIcon">search</i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* end search */}
        {/* start banner */}
        <div className="homeBanner">
          <h3>This Month’s Focus is...</h3>
          <div className="bannerImg">
            <div className="bannerContainer">
              <h2>Plastic Pollution</h2>
              <a class="waves-effect">Learn More</a>
            </div>
            <img src={banner} className="homeBanner" />
          </div>
        </div>
        {/* end banner */}
        {/* start Involved */}
        <div className="Involved">
          <h3>Get Involved :</h3>
          <a class="waves-effect waves-light btn-large">
            <i class="material-icons left">chat_bubble_outline</i>Join the
            Conversation
          </a>
          <a class="waves-effect waves-light btn-large">
            <i class="material-icons left">event_note</i>Virtual Events
          </a>
        </div>
        {/* end Involved */}
      </div>
    </div>
  );
};
export default Home;
