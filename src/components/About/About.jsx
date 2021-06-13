import classes from './About.module.css';

import PageHeader from '../PageHeader/PageHeader';
import me from '../../assets/photo.jpeg';

const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I am Zarema.</h2>
                    <p>I'm a junior web developer currently based in North Bay, Ontario. I specialize in building user friendly, responsive, and modern websites that are robust and fun.
                    </p>
                    <p>When I'm not coding, you can find me reading books, cooking, meditating, hiking and exploring nature with my husband.</p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt='me' />
                </div>
            </div>
        </div>
    );
}

export default About;