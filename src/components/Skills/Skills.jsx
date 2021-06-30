import classes from './Skills.module.css';
import PageHeader from '../PageHeader/PageHeader';
import codeThinking from '../../assets/codeThinking.svg';
import { FaTools, FaHtml5, FaCss3, FaJsSquare, FaNode, FaReact, FaCode, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiRedux, SiBootstrap, SiBulma, SiAmericanexpress, SiMongodb, SiFirebase, SiSublimetext, SiJson } from "react-icons/si";


const Skills = () => {

    const totalSkills = [
        {
            skillIcon: <FaHtml5 size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'HTML5'
        },
        {
            skillIcon: <FaCss3 size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'CSS3'
        },
        {
            skillIcon: <FaJsSquare size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'JavaScript'
        },
        {
            skillIcon: <FaNode size='65px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Node.js'
        },
        {
            skillIcon: <FaReact size='65px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'React.js'
        },
        {
            skillIcon: <SiRedux size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Redux'
        },
        {
            skillIcon: <SiBootstrap size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Bootstrap'
        },
        {
            skillIcon: <SiBulma size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Bulma'
        },
        {
            skillIcon: <SiAmericanexpress size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Express.js'
        },
        {
            skillIcon: <SiMongodb size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'MongoDB'
        },
        {
            skillIcon: <SiMongodb size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Mongoose'
        },
        {
            skillIcon: <SiFirebase size='55px' color='#ffffff' style={{ marginRight: '5%' }} />,
            skillName: 'Firebase'
        },
        {
            skillIcon: <FaCode size='55px' color='white' style={{ marginRight: '5%' }} />,
            skillName: 'VSCode'
        },
        {
            skillIcon: <SiSublimetext size='55px' color='white' style={{ marginRight: '5%' }} />,
            skillName: 'Sublime Text'
        },
        {
            skillIcon: <FaCode size='55px' color='white' style={{ marginRight: '5%' }} />,
            skillName: 'GoormIDE'
        },
        {
            skillIcon: <FaGitAlt size='55px' color='white' style={{ marginRight: '5%' }} />,
            skillName: 'Git'
        },
        {
            skillIcon: <FaGithub size='55px' color='white' style={{ marginRight: '5%' }} />,
            skillName: 'GitHub'
        },
        {
            skillIcon: <SiJson size='55px' color='white' style={{ marginRight: '5%' }} />,
            skillName: 'JSON'
        }
    ];

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
                            {skills.skillIcon}
                            {skills.skillName}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;