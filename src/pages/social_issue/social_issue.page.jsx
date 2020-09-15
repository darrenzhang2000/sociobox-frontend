import React, { useEffect } from "react";
import "./social_issue.css";
import banner from "./images/Group 19.png";
const SocialIssue = () => {
  return (
    <div className="socialIssues">
      <h2 className="socialIssuesHeader">Plastic Pollution</h2>
      <h3 className="socialIssuesSubheader">Let’s get started!</h3>
      <div class="row">
        <div class="col s4 issueColumn">
          <div className="boxCheckTop">
            <i className="material-icons cheack">check</i>
          </div>
          <h5>Articles</h5>
          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>

          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>

          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>
        </div>
        <div class="col s4 issueColumn">
          <div className="boxCheckTop">
            <i className="material-icons cheack" style={{ display: "none" }}>
              check
            </i>
          </div>
          <h5>Videos</h5>
          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>

          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>

          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>
        </div>
        <div class="col s4 issueColumn">
          <div className="boxCheckTop">
            <i className="material-icons cheack" style={{ display: "none" }}>
              check
            </i>
          </div>
          <h5>Podcasts</h5>
          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>

          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>

          <div className="issueBox">
            <p>
              <label>
                <input type="checkbox" class="filled-in" checked="checked" />
                <span>
                  Could Plant-Based Plastics Help Tackle Waste Pollution?
                </span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="socialIssuesButton">
        <a class="waves-effect waves-light btn-large">Take our short quiz</a>
      </div>
    </div>
  );
};
export default SocialIssue;
