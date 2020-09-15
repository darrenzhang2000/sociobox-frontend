import React, { useEffect } from "react";
import { Route, Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import M from "materialize-css";
import "./landing.css";
// import Header from '../../component/header/header.component';
// import Bottom from '../../component/bottom/bottom.component';
import Image from "./images/background.jpg";
// import Signin from '../../component/signin/signin.component';
import { closeChatBot } from "../../redux/redux";
import { useDispatch, useSelector } from "react-redux";

var styles = {
  backgroundImage: `url(${Image})`,
  backgroundPositionX: "center",
  backgroundPositionY: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const useStyles = makeStyles((theme) => ({
  mainback: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: "100vh",
  },
  mainimage: {
    position: "relative",
    width: "75% !important",
    height: "100%",
    margin: "0px 5px 0px 0px",
  },
  signin: {
    position: "relative",
    width: "25%",
    margin: "10% 5px 0px 5px",
    [theme.breakpoints.down("sm")]: {
      margin: "10% 5px 0px 5px",
    },
  },
  infor: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#c3d8f0",
    position: "absolute",
    bottom: "20%",
    right: "5%",
    left: "5%",
    padding: "10px",
  },
}));

const Landing = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const chatbotOpen = useSelector((state) => state.chatbotOpen);

  const closeChatBox = (e) => {
    console.log("closechat");
    dispatch(closeChatBot(""));
  };

  //componentDidMount() {

  //Instance Plugin
  // let instance = M.Carousel.getInstance(this.Carousel);
  // instance.next(2);
  //};

  useEffect(() => {
    var carousel = document.querySelectorAll(".sidenav");
    const options = {
      fullWidth: true,
      indicators: true,
      onCycleTo: () => {
        console.log("New Slide");
      },
    };
    M.Carousel.init(carousel, { options });
  }, []);

  return (
    <div className="row">
      {/* <div className={classes.mainback}>
                <div className={classes.mainimage} style={styles}>
                    <div className={classes.infor}>
                        <Typography variant='h3' align='justify'>
                            <b>iProfile</b>
                        </Typography>
                        <Typography variant='h4' align='left'>
                            Take your resume to the next level
                        </Typography>
                    </div> 
                </div>
                <div className={classes.signin}>
                    <Signin/>
                </div> 
            </div> */}
      <img
        className="img1"
        src="https://user-images.githubusercontent.com/44158788/93164850-915f2a00-f6e8-11ea-8a04-aa0f14a67727.png"
      ></img>
      <div className="col s12 center-align">
        <h3 className="t1">Stay on top of everything with </h3>
        <h3 className="t2">Sociobox</h3>
        <Link
          to="/logreg/login"
          class="waves-effect waves-light btn btn-base btn-small-radius"
        >
          Login/ Register
        </Link>
      </div>

      {chatbotOpen ? (
        <div className="chat-wrapper">
          {/* Chat bot */}
          <div className="chat">
            <div>
              <button onClick={closeChatBox}>X</button>
            </div>
            <iframe
              allow="microphone;"
              width="350"
              height="430"
              src="https://console.dialogflow.com/api-client/demo/embedded/936f0a27-ec68-453f-941f-61b8d32b154e"
            ></iframe>
          </div>
        </div>
      ) : null}
      <div className="buttom"></div>
    </div>
  );
};
export default Landing;
