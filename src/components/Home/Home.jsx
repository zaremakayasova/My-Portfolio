import classes from './Home.module.css';
import Typewriter from 'typewriter-effect';
import main from '../../assets/main1.svg';

const Home = () => {

    return (
        <div className={classes.Home} id='home'>
            <div className={classes.Container}>
                <h1 className={classes.Text}>Hi There! <span className={classes.Wave}>🖐🏻</span></h1>
                <h2>I'M ZAREMA KAYASOVA</h2>
                <Typewriter
                    options={{
                        strings: ['<h1>JUNIOR WEB DEVELOPER</h1>'],
                        autoStart: true,
                        loop: true
                    }}
                />
            </div>
            <img className={classes.Main} src={main} alt='main-img' />
        </div>
    );
}

export default Home;