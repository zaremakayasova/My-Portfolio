import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';
import main from '../../assets/main3.svg';
import icon from '../../assets/icon.svg';
import { FaAngleDoubleDown } from "react-icons/fa";

const Home = () => {
    return (
        <div className={classes.Home} id='home'>
            <div className={classes.Container}>
                <h1 className={classes.Name}>HI! I AM ZAREMA.</h1> 
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('<h1>JUNIOR WEB DEVELOPER</h1>')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('<h1>JUNIOR WEB DEVELOPER</h1>')
                            .pauseFor(1000)
                            .deleteAll()
                            .typeString('<h1>JUNIOR WEB DEVELOPER</h1>')
                            .start();
                    }}
                />
            </div>
            <FaAngleDoubleDown color='#ffffff' size='40px' style={{ position: 'absolute', top: '90%', left: '50%' }} />
            <img className={classes.Main} src={main} alt='main-img' />
            <img className={classes.Icon} src={icon} alt='icon-img' />
        </div>
    );
}

export default Home;