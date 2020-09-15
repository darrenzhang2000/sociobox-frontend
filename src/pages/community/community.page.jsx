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
                <Route path={`${match.url}/forum`}>
                    <Forum/>
                </Route>
            </Switch>
        </Router>
    );
}

function Forum(){

}

function Post(){

}

export default Community;