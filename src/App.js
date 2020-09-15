import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Register from "./pages/login-register/login-register.page";
import Landing from "./pages/landing/landing.page";
import Home from "./pages/home/home.page.jsx";
import Community from "./pages/community/community.page.jsx";
import Onboarding from "./pages/onboarding/onboarding.page.jsx";
import { Provider } from "react-redux";
import store from "./redux/redux";
import Logo from "./logo.svg";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Provider store={store}>
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
        <Route exact path="/community" component={Community} />
        <Route exact path='/onboarding' component={Onboarding}/>
      </div>
      <div className="navbar-fixed navbar-bottom">
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
    </Provider>
  );
}

export default App;
