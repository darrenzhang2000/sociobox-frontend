import 'materialize-css/dist/css/materialize.min.css';
import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Article from './components/articles/article';
import Podcast from './components/podcasts/podcast';
import Logo from './logo.svg';
import Community from "./pages/community/community.page.jsx";
import Home from './pages/home/home.page';
import Landing from './pages/landing/landing.page';
import Register from './pages/login-register/login-register.page';
import NewPost from './pages/new_post/new_post.page';
import Onboarding from './pages/onboarding/onboarding.page';
import SocialIssue from "./pages/social_issue/social_issue.page.jsx";

function App() {
  const dispatch = useDispatch()
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
      </div>



      <div className="navbar-fixed navbar-bottom navv">
        <nav className="black">
          <div class="nav-wrapper">
            <ul class="center">
              <li>
                <a href="sass.html">Site map</a>
              </li>
              <li>
                <a href="badges.html">Terms</a>
              </li>
              <li>
                <a href="badges.html">Privacy</a>
              </li>
              <li>
                <a href="badges.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}

export default App
