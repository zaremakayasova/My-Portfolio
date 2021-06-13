import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';
import main from '../../assets/main.svg';
import icon from '../../assets/icon.svg';


const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Name}>Hi! I am Zarema.</h1>
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
            <img className={classes.Main} src={main} alt='main-img' />
            <img className={classes.Icon} src={icon} alt='icon-img' />
        </div>
    );
}

export default Home;