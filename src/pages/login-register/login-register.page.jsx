import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./logreg.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
// import UserRegister from '../../component/User/Register/register';
// import UserLogin from '../../component/User/Login/login';
// import UserRegister from "../../component/User/Register/register";
// import SignupStudent from '../../component/signup/signup.component';
// import SignupRecruiter from '../../component/signup/signup.component';
const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    padding: "0px 30rem 0px 30rem",
    [theme.breakpoints.down("sm")]: {
      padding: "0px 10rem 0px 10rem",
    },
  },
  mainform: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  option: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "20px",
    border: "ivory",
  },
}));
const Register = () => {
  let match = useRouteMatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
      <div className="row btns">
        <div className="col s12 center-align">
          <Link
            to={`/logreg/login`}
            className="waves-effect waves-light btn btn-base"
          >
            Login
          </Link>
          <Link
            to={`/logreg/register`}
            className="waves-effect waves-light btn btn-base"
          >
            Register
          </Link>
        </div>
      </div>
      <Switch>
        <Route path={`/logreg/register`}>{/* <UserRegister /> */}</Route>
        <Route path={`/logreg/login`}>{/* <UserLogin /> */}</Route>
      </Switch>
    </Router>
  );
};
export default Register;
