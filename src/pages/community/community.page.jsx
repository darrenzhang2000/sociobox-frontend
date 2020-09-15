import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

import "materialize-css/dist/css/materialize.min.css";
import "./community.css";
import UserSvg from "../../user.svg";
import { useSelector } from "react-redux";
import axios from "axios";

function Community() {
  let match = useRouteMatch();
  return (
    <Router>
      <Switch>
        <Route path="/community/forum">
          <Forum />
        </Route>
        <Route path="/community/post">
          <Post />
        </Route>
      </Switch>
    </Router>
  );
}

function Forum() {
  const socialIssueOfTheMonth = useSelector(
    (state) => state.socialIssueOfTheMonth
  );
  const socialIssueOfTheMonthId = useSelector(
    (state) => state.socialIssueOfTheMonthId
  );

  const getDiscussions = () => {
    axios.get(
      "http://localhost:5000/messages/discussions",
      {
        params: {
          forumId: socialIssueOfTheMonthId,
        },
      },
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log("res", res);
          return res;
        }
      }
    );
  };

  useEffect(() => {
    console.log("forum useeff");
    console.log(getDiscussions());
  }, []);

  return (
    <div className="row forum">
      <div className="col s8">
        <h1>{socialIssueOfTheMonth} Community Forum</h1>
        <h5>
          Wecome to our online community! This is a safe space to share ideas
          and deepen your understanding of this month’s social issue -- plastic
          pollution.
        </h5>

        <h5>
          Please note that any response seen as disrespectful will be removed.
        </h5>
      </div>
      <div id="option" className="col s4">
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
        <Link to="/new_post">
          <span className="waves-effect waves-light btn btn-base btn-small-radius">
            +New Post
          </span>
        </Link>
      </div>
      <div id="discussion" className="col s12">
        <h6 id="title">General Discussions</h6>
        <ul classNames="collection">
          <li className="collection-item avatar">
            <Link to="/community/post">
              {" "}
              <div className="disc-item">
                <div>
                  <img src={UserSvg} alt="" class="circle" />
                  <p>
                    Should we be more concerned about plastic’s impact on the
                    environment or our own health?
                  </p>
                </div>
                <a
                  href="#"
                  className="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  +New Post
                </a>
              </div>
              <div id="discussion" className="col s12">
                <h6 id="title">General Discussions</h6>
                <ul classNames="collection">
                  <li className="collection-item avatar">
                    <Link to="/community/post">
                      {" "}
                      <div className="disc-item">
                        <div>
                          <img src={UserSvg} alt="" className="circle" />
                          <p>
                            Should we be more concerned about plastic’s impact
                            on the environment or our own health?
                          </p>
                        </div>
                        <label>30 min ago</label>
                        {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
                      </div>
                      <a>32 comments</a>
                    </Link>
                  </li>
                  <li className="collection-item avatar">
                    <div className="disc-item">
                      <div>
                        <img src={UserSvg} alt="" class="circle" />
                        <p>
                          What plastic products do you find hardest to live
                          without?
                        </p>
                      </div>
                      <label>2 hours ago</label>
                      {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
                    </div>
                    <a>32 comments</a>
                  </li>
                </ul>
                <label>30 min ago</label>
                {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
              </div>
              <a>32 comments</a>
            </Link>
          </li>
          <li className="collection-item avatar">
            <div className="disc-item">
              <div>
                <img src={UserSvg} alt="" class="circle" />
                <p>
                  What plastic products do you find hardest to live without?
                </p>
              </div>
              <label>2 hours ago</label>
              {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
            </div>
            <a>32 comments</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Post() {
  return (
    <div className="row post">
      <div className="col s12 post-data">
        <div id="post-head">
          <img src={UserSvg} alt="" class="circle" />
          <h2>
            Should we be more concerned about plastic’s impact on the
            environment or our own health?{" "}
          </h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit auctor
          pretium donec convallis. Duis vel non in in tincidunt. Et senectus
          aliquam eget nulla nunc nulla porta vel ac. Ornare id velit, ut semper
          ut arcu. Mauris, lectus amet, mi quis vitae nisi. Adipiscing risus
          mollis dui posuere. In non quisque faucibus vel dictum accumsan in. In
          vel, cursus odio tellus semper dui. Enim nibh orci cursus id tellus
          pharetra erat eleifend integer. Habitant hac massa morbi risus urna
          eget nulla cras. Et cras consequat magna mauris, malesuada
          pellentesque.
        </p>
        <div className="right-align">
          <a className="waves-effect waves-light btn btn-base btn-radius">
            +New Post
          </a>
        </div>
      </div>
      <div className="col s12 input-comment">
        <div id="user-row">
          <div id="user-reply">
            <img src={UserSvg} alt="" class="circle" />
            <textarea id="textarea1" class="materialize-textarea"></textarea>
          </div>
          <a className="waves-effect waves-light btn btn-base btn-radius">
            Submit
          </a>
        </div>
      </div>
      <div className="col s12 comments">
        <ul classNames="collection">
          <li className="collection-item avatar">
            <Link to="/community/post">
              {" "}
              <div className="disc-item">
                <div>
                  <img src={UserSvg} alt="" class="circle" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    id viverra ipsum, lectus ante faucibus lacus est. Adipiscing
                    sit at sit viverra netus mauris vel. Molestie ac tortor mi
                    velit eget semper.
                  </p>
                </div>
                <label>30 min ago</label>
                {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
              </div>
              <a>32 comments</a>
            </Link>
          </li>
          <li className="collection-item avatar">
            <div className="disc-item">
              <div>
                <img src={UserSvg} alt="" class="circle" />
                <p>
                  Dolor sit amet, consectetur adipiscing elit. Lectus mi,
                  pellentesque ut dolor. Odio egestas malesuada semper felis.
                </p>
              </div>
              <label>2 hours ago</label>
              {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
            </div>
            <a>32 comments</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Community;
