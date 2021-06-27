import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';
import main from '../../assets/main3.svg';
import icon from '../../assets/icon.svg';

const Home = () => {

    return (
        <div className={classes.Home} id='home'>
            <div className={classes.Container}>
                <h1 className={classes.Name}>HI! I AM ZAREMA.</h1>
                <Typewriter
                    options={{
                        strings: ['<h1>JUNIOR WEB DEVELOPER</h1>'],
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>
            
            <img className={classes.Main} src={main} alt='main-img' />
            <img className={classes.Icon} src={icon} alt='icon-img' />
        </div>
    );
}

export default Home;