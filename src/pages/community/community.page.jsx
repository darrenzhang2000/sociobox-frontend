import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

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
        <div>
            <h1>Hey Forum here</h1>
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