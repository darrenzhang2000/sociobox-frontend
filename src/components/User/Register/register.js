
import React, {useState} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import '../login-register.css';

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

                <div class="row">
                    <div class="input-field col s12">
                        <input id="email" type="email" class="validate input-txt" placeholder="Email" onChange={onChange}/>
                        {/* <label for="email">Email</label> */}
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                        <input id="fullname" type="text" class="validate input-txt" placeholder="FullName" onChange={onChange}/>
                        {/* <label for="fullname">Fullname</label> */}
                    </div>
                </div>


                <div className="row">
                    <div className=" input-field col s12">
                        
                        <input id="password" type="password" class="validate input-txt" placeholder="Password" onChange={onChange}/>
                        {/* <label for="password">Password</label> */}
                    </div>
                </div>

                <div className="row">
                    <div className=" input-field col s12">
                        
                        <input id="conpassword" type="password" class="validate input-txt"  placeholder="Confirm password" onChange={onChange}/>
                        {/* <label for="conpassword">Confirm password</label> */}
                    </div>
                </div>

                <div className="row div-btn">
                    <div className="input-field col s12 center-align">
                        <a href='/onboarding' className="btn btn-base btn-radius ">Submit</a>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UserLogin;