import classes from './Skills.module.css';
import PageHeader from '../PageHeader/PageHeader';
import codeThinking from '../../assets/codeThinking.svg';
import { FaTools } from 'react-icons/fa';

const listTitleStyle = { fontWeight: 900, color: '#2F2E41', marginBottom: '5px' };

const Skills = () => {
    const languages =
        <ul>
            <li style={listTitleStyle}>LANGUAGES</li>
            <li>HTML5 - CSS3 - JavaScript</li>
        </ul>

    const librariesFrameworks =
        <ul>
            <li style={listTitleStyle}>LIBRARIES AND FRAMEWORKS</li>
            <li>Node.js - React.js - Redux- Bootstrap - Bulma -Express.js</li>
        </ul>

    const dataBase =
        <ul>
            <li style={listTitleStyle}>DATABASE</li>
            <li>MongoDB - Mongoose - Firebase</li>
        </ul>

    const ide =
        <ul>
            <li style={listTitleStyle}>IDE</li>
            <li>VSCode - Sublime Text3 - goormIDE</li>
        </ul>

    const otherSkills =
        <ul>
            <li style={listTitleStyle}>OTHER</li>
            <li>Git - GitHub - Json - Responsive Design</li>
        </ul>

    const totalSkills = [languages, librariesFrameworks, dataBase, ide, otherSkills];

    return (
        <div className={classes.Skills} id='skills'>
            <PageHeader title={'WHAT ABOUT THE SKILLS?'} icon={<FaTools size='5%' />} />
            <p> I'm a lifelong learner and I enjoy learning new technologies!</p>
            <p>
                Below are some programming languages, frameworks, libraries and toolkits I worked with and I like.
                Some of them I control better than the others.
            </p>
            <div className={classes.Container}>
                <img src={codeThinking} alt='code-thinking-img' />
                {
                    totalSkills.map((skills, index) => (
                        <div className={classes.List} key={`skills_${index}`}>
                            {skills}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;