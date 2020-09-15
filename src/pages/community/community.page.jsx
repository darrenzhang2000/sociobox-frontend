import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import 'materialize-css/dist/css/materialize.min.css';
import './community.css'
import UserSvg from "../../user.svg"; 

function Community() {
    let match = useRouteMatch();
    return(
        <Router>

            <Switch>
                <Route path="/community/forum">
                    <Forum/>
                </Route>
                <Route path="/community/post">
                    <Post/>
                </Route>
            </Switch>
        </Router>
    );
}

function Forum(){
    return(
        <div className="row forum">
            <div className="col s8">
                <h1>Plastic Pollution Community Forum</h1>
                <h5>Wecome to our online community! This is a safe space to share ideas and 
                    deepen your understanding of this month’s social issue -- plastic pollution.</h5>
                
                <h5>Please note that any response seen as disrespectful will be removed.</h5>
            </div>
            <div className="col s4">
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
                <a href="">+New Post</a>
            </div>
            <div id="discussion" className="col s12">
                <h6 id="title">General Discussions</h6>
                <ul claclassNamess="collection">
                    <li class="collection-item avatar">
                        <div className="disc-item">
                            <div>
                            <img src={UserSvg} alt="" class="circle"/>
                            <p>Should we be more concerned about plastic’s impact on the environment or our own health?</p>
                            </div>
                            <label>30 min ago</label>
                            {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
                        </div>
                        <a>32 comments</a>
                    </li>
                    <li class="collection-item avatar">
                         <div className="disc-item">
                            <div>
                            <img src={UserSvg} alt="" class="circle"/>
                            <p>What plastic products do you find hardest to live without?</p>
                            </div>
                            <label>2 hours ago</label>
                            {/* <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a> */}
                        </div>
                        <a>32 comments</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

function Post(){
    return(
        <div>
            <h1>Hey Post here</h1>
        </div>
    )
}

export default Community;