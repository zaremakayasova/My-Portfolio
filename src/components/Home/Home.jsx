import classes from './Home.module.css';
import main from '../../assets/main.svg';
import icon from '../../assets/icon.svg';


const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World</h1>
                <h1 className={classes.Welcome}>Welcome to my website</h1>
            </div>
            <img className={classes.Main} src={main} alt='main-img' />
            <img className={classes.Icon} src={icon} alt='icon-img' />
        </div>
    );
}

export default Home;