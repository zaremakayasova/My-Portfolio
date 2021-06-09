import classes from './Home.module.css';
import girl from '../../assets/girl.svg';
import code from '../../assets/code.svg';


const Home = () => {
    return (
        <div className={classes.Home}>
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, World</h1>
                <h2 className={classes.Welcome}>Welcome to my website</h2>
            </div>
            <img className={classes.Code} src={code} alt='code-img' />
            <img className={classes.Girl} src={girl} alt='girl-img' />
        </div>
    );
}

export default Home;