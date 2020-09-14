import React, {useEffect} from 'react';
import { Route, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import M from "materialize-css";
import './landing.css';
// import Header from '../../component/header/header.component';
// import Bottom from '../../component/bottom/bottom.component';
import Image from './images/background.jpg';
// import Signin from '../../component/signin/signin.component';
var styles = {
    backgroundImage: `url(${Image})`,
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const useStyles = makeStyles((theme) => ({
    mainback: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh'
    },
    mainimage: {
        position: 'relative',
        width: '75% !important',
        height: '100%',
        margin: '0px 5px 0px 0px'
    },
    signin: {
        position: 'relative',
        width: '25%',
        margin: '10% 5px 0px 5px',
        [theme.breakpoints.down('sm')]: {
            margin: '10% 5px 0px 5px'
        }
    },
    infor: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#c3d8f0',
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        left: '5%',
        padding: '10px'
    }
}));
  
const Landing = () => {
    
    const classes = useStyles();

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
          }
        };
        M.Carousel.init(carousel, {options});
    }, [])
      
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
            <div className="carousel carousel-slider center col s12">
                <div className="carousel-fixed-item center">
                <a className="btn waves-effect white grey-text darken-text-2">button</a>
                </div>
                <div className="carousel-item red white-text" href="#one!">
                <h2>First Panel</h2>
                <p className="white-text">This is your first panel</p>
                </div>
                <div className="carousel-item amber white-text" href="#two!">
                <h2>Second Panel</h2>
                <p className="white-text">This is your second panel</p>
                </div>
                <div className="carousel-item green white-text" href="#three!">
                <h2>Third Panel</h2>
                <p className="white-text">This is your third panel</p>
                </div>
                <div className="carousel-item blue white-text" href="#four!">
                <h2>Fourth Panel</h2>
                <p className="white-text">This is your fourth panel</p>
                </div>
            </div>

            <div className="col s12 center-align">
                <h3 className="t1">Stay on top of everything with </h3>
                <h3 className="t2">Sociobox</h3>
                <Link to="/logreg" class="waves-effect waves-light btn btn-base btn-small-radius">Login/ Register</Link>
            </div>
            
        </div>
    )
};
export default Landing;