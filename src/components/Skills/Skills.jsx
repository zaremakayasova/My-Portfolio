import classes from './Skills.module.css';
import PageHeader from '../PageHeader/PageHeader';

const Skills = () => {
    const languages =
        <ul>
            <li>LANGUAGES</li>
            <li>HTML5 - CSS3 - JavaScript</li>
        </ul>

    const librariesFrameworks =
        <ul>
            <li>LIBRARIES AND FRAMEWORKS</li>
            <li>Node.js - React.js - Redux- Bootstrap - Bulma -Express.js</li>
        </ul>

    const dataBase =
        <ul>
            <li>DATABASE</li>
            <li>MongoDB - Mongoose - Firebase</li>
        </ul>

    const ide =
        <ul>
            <li>IDE</li>
            <li>VSCode - Sublime Text3 - goormIDE</li>
        </ul>

    const otherSkills =
        <ul>
            <li>OTHER</li>
            <li>Git - GitHub - Json - Responsive Desing</li>
        </ul>

    const totalSkills = [languages, librariesFrameworks, dataBase, ide, otherSkills];

    return (
        <div className={classes.Skills}>
            <PageHeader title={'What about the Skills?'} />
            <p>
                I'm a life long learner and enjoy learning new stuff!
                Below are some programming languages, frameworks, libraries and toolkits I worked with and I like.
                Some of them I control better than the other.
            </p>
            <div className={classes.Container}>
                {
                    totalSkills.map(skills => (
                        <div className={classes.List}>
                            {skills}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;