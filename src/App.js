import "materialize-css/dist/css/materialize.min.css";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Article from "./components/articles/article";
import Podcast from "./components/podcasts/podcast";
import Logo from "./logo.svg";
import Community from "./pages/community/community.page.jsx";
import Home from "./pages/home/home.page";
import Landing from "./pages/landing/landing.page";
import Register from "./pages/login-register/login-register.page";
import NewPost from "./pages/new_post/new_post.page.jsx";
import Onboarding from "./pages/onboarding/onboarding.page";
import SocialIssue from "./pages/social_issue/social_issue.page.jsx";
import { CustomFeed } from "./pages/onboarding/onboarding.page";
import Videos from "./pages/videos/videos.page";

function App() {
  const dispatch = useDispatch();
  const [display, setDisplay] = React.useState("block");

  return (
    <Fragment>
      <div className="navbar-fixed navbar-top">
        <nav className="white">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo left">
              <img src={Logo}></img>
            </a>
            <ul class="right">
              <li>
                <Link
                  to="/logreg/login"
                  class="waves-effect waves-light btn btn-base btn-small-radius"
                >
                  Login/ Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        {/* <Header /> */}
        {/* <Route exact path='/' component={Landing} />
      <Route exact path='/register' component={Register} /> */}
        {/* <Bottom /> */}
        <Route exact path="/" component={Landing} />
        <Route exact path="/logreg/login" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/community/forum" component={Community} />
        <Route exact path="/social_issue" component={SocialIssue} />
        <Route exact path="/onboarding" component={Onboarding} />
        <Route exact path="/podcast" component={Podcast} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/new_post" component={NewPost} />
        <Route exact path="/customFeed" component={CustomFeed} />
        <Route exact path="/videos" component={Videos} />
      </div>

      <div className="navbar-fixed navbar-bottom navv">
        <nav className="black">
          <div class="nav-wrapper">
            <ul class="center">
              <li>
                <a
                  href="https://devpost.com/software/sociobox?ref_content=user-portfolio&ref_feature=in_progress"
                  target="_blank"
                >
                  Site map
                </a>
              </li>
              <li>
                <a
                  href="https://devpost.com/software/sociobox?ref_content=user-portfolio&ref_feature=in_progress"
                  target="_blank"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="https://devpost.com/software/sociobox?ref_content=user-portfolio&ref_feature=in_progress"
                  target="_blank"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://devpost.com/software/sociobox?ref_content=user-portfolio&ref_feature=in_progress"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default App;
