import classes from './About.module.css';
import { FaInstagramSquare, FaLinkedin, FaGithub, FaAngleDoubleDown, FaHandPointRight, FaUserAlt } from "react-icons/fa";


import PageHeader from '../PageHeader/PageHeader';
import me from '../../assets/photo.jpg';

const About = () => {
    const handleUrl = url => {
        return () => window.open(url, '_blank')
    };
    return (
        <div className={classes.AboutMe} id='about'>
            <PageHeader title={'ABOUT ME'} icon={<FaUserAlt size='5%' />} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello! I am Zarema.</h2>
                    <p>I am a passionate self-taught junior web developer currently based in North Bay, Ontario. I specialize in building user-friendly, modern, and semantic websites that are highly intuitive and responsive.
                    </p>
                    <p>When I'm not coding, you can find me: </p>
                    <ul>
                        <li>
                            <FaHandPointRight color='#fbe3e5' style={{ marginRight: '2%' }} />
                            reading books
                        </li>
                        <li>
                            <FaHandPointRight color='#fbe3e5' style={{ marginRight: '2%' }} />
                            cooking
                        </li>
                        <li>
                            <FaHandPointRight color='#fbe3e5' style={{ marginRight: '2%' }} />
                            meditating
                        </li>
                        <li>
                            <FaHandPointRight color='#fbe3e5' style={{ marginRight: '2%' }} />
                            hiking and exploring nature with my partner
                        </li>
                    </ul>
                </div>
                <div className={classes.Photo}>
                    <div className={classes.Front}>
                        <img className={classes.Me} src={me} alt='me' />
                        <FaAngleDoubleDown color='#575988' size='35px' style={{ position: 'absolute', top: '85%', left: '50%' }} />
                    </div>

                    <div className={classes.Back}>
                        <img className={classes.MyPic} src={me} alt='me' />
                        <h2>Zarema Kayasova</h2>
                        <p>Junior Web Developer</p>
                        <div className={classes.Icons}>
                            <FaLinkedin color='#ffffff' size='40px' style={{ margin: '25px' }}
                                onClick={handleUrl('https://www.linkedin.com/in/zarema-kayasova-83b033203/')}
                            />
                            <FaGithub color='#ffffff' size='40px' style={{ margin: '25px' }}
                                onClick={handleUrl('https://github.com/zaremakayasova')}
                            />
                            <FaInstagramSquare color='#ffffff' size='40px' style={{ margin: '25px' }}
                                onClick={handleUrl('https://www.instagram.com/zarema_kayasova_hekimgil/?hl=en')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;