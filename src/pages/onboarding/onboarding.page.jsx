import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import 'materialize-css/dist/css/materialize.min.css';
import { render } from '@testing-library/react';
import './onboarding.css';

function Onboarding(){
    return(
        <Router>
            <Switch>
                <Route path='/onboarding'>
                    <PreferredMedia/>
                </Route>
                <Route path='/customFeed'>
                    <CustomFeed/>
                </Route>
            </Switch>
        </Router>
    );
}

function PreferredMedia(){
    return(
        <div id="" className="row to-select">
            

            <div className="col s12 center-align">
                <h5>Select all preferred media </h5>
                
                
            </div>
            <div className="col s12 center-align">
                {/* <div  className="ck-btn">
                    <label>
                        <input type="checkbox" value="articles"/>
                    </label><span>Articles</span>
                </div> */}

                <button className="ck">
                    Articles
                </button>
                {/* <input id="test" type="checkbox"/>
                <label for="test" className="ck">test</label> */}
            </div>
            <div className="col s12 center-align">
                <button className="ck">
                    Video
                </button>
            </div>
            <div className="col s12 center-align">
                <button className="ck">
                    Broadcast
                </button>
            </div>
            <Link to="/customFeed" className="confirm waves-effect waves-light btn btn-base btn-radius">Confirm</Link>
        </div>
    );
}

function CustomFeed(){
    return(
        <div className="row to-select">
            <div className="col s12">
                <h5>Customize your feed</h5>
            </div>
            <div className="col s12">
                <h5>Frequency of updates</h5>
                <div id="updates-freq">
                    <a className="confirm waves-effect waves-light btn btn-base">Daily</a>
                    <a className="confirm waves-effect waves-light btn btn-base">Weekly</a>
                    <a className="confirm waves-effect waves-light btn btn-base">Monthly</a>
                </div>
            </div>
            <div className="col s12">
                <h5>Arrange in order of preference</h5>
                <div id="region">
                <a className="confirm waves-effect waves-light btn btn-base btn-radius">Daily</a>
                    <a className="confirm waves-effect waves-light btn btn-base btn-radius">Weekly</a>
                    <a className="confirm waves-effect waves-light btn btn-base btn-radius">Monthly</a>
                    
                </div>
            </div>
            <a href="/home" className="confirm waves-effect waves-light btn btn-base btn-radius">Confirm</a>
        </div>);
}

export default Onboarding;