import classes from './About.module.css';

import PageHeader from '../PageHeader/PageHeader';
import me from '../../assets/photo.jpg';

const About = () => {
    return (
        <div className={classes.AboutMe} id='about'>
            <PageHeader title={'ABOUT ME'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I am Zarema.</h2>
                    <p>I am a passionate self-taught junior web developer currently based in North Bay, Ontario. I specialize in building user-friendly, modern, and semantic websites that are highly intuitive and responsive.
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