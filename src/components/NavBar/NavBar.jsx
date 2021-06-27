import classes from './NavBar.module.css';
import { FaHome, FaUserAlt, FaTools, FaProjectDiagram, FaMailBulk, FaGitAlt } from 'react-icons/fa';

const NavBar = () => {
    const handleUrl = url => {
        return () => window.open(url, '_blank')
    };
    return (
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href='/'>
                            <FaHome style={{ marginRight: '8px' }} />
                            HOME
                        </a>
                    </li>
                    <li>
                        <a href='/#about'>
                            <FaUserAlt style={{ marginRight: '8px' }} />
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href='/#skills'>
                            <FaTools style={{ marginRight: '8px' }} />
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a href='/#projects'>
                            <FaProjectDiagram style={{ marginRight: '8px' }} />
                            PROJECTS
                        </a>
                    </li>
                    <li>
                        <a href='/#contact'>
                            <FaMailBulk style={{ marginRight: '8px' }} />
                            CONTACT
                        </a>
                    </li>
                    <li>
                        <button onClick={handleUrl('https://github.com/zaremakayasova/My-Portfolio')} className={classes.GitHubBtn}>
                            <FaGitAlt size='25px' color='white' style={{ paddingLeft: '5%', paddingRight: '5%', paddingTop: '5%' }} />
                        </button>
                    </li>
                </ul>
            </nav>
        </div >
    );
}

export default NavBar;