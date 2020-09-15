
import React, {useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../login-register.css';
import { Link } from 'react-router-dom';

function initialState(){
    return {user: '', password: ''};
}

function UserLogin() {
    const [values, setValues] = useState(initialState);

    function onChange(event) {
        const {values, name} = event.target;
    }

    return(
        <div className="row input-info">
            <form className="col s12">

                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate input-txt" placeholder="Email" onChange={onChange}/>
                        {/* <label for="email">Email</label> */}
                    </div>
                </div>

                <div className="row">
                    <div className=" input-field col s12">
                        
                        <input id="password" type="password" className="validate input-txt" placeholder="Password" onChange={onChange}/>
                        {/* <label for="password">Password</label> */}
                    </div>
                </div>

                <div className="row div-btn">
                    <div className="input-field col s12 center-align">
                        <a href='/onboarding'className="btn btn-base btn-radius ">Submit</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;