import classes from './Skills.module.css';
import PageHeader from '../PageHeader/PageHeader';
import codeThinking from '../../assets/codeThinking.svg';
import { FaTools, FaHtml5, FaCss3, FaJsSquare, FaNode, FaReact, FaCode, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiRedux, SiBootstrap, SiBulma, SiAmericanexpress, SiMongodb, SiFirebase, SiSublimetext, SiJson } from "react-icons/si";

const listTitleStyle = { fontWeight: 900, color: '#2F2E41', marginBottom: '5px' };

const Skills = () => {

    const totalSkills = [
        
        
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
                {/* {
                    totalSkills.map((skills, index) => (
                        <div className={classes.List} key={`skills_${index}`}>
                            {skills}
                        </div>
                    ))
                } */}


                <div className={classes.List}>
                    <FaHtml5 size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    HTML5
                </div>
                <div className={classes.List}>
                    <FaCss3 size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    CSS3
                </div>
                <div className={classes.List}>
                    <FaJsSquare size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    JavaScript
                </div>
                <div className={classes.List}>
                    <FaNode size='65px' color='#ffffff' style={{marginRight:'5%'}} />
                    Node.js
                </div>
                <div className={classes.List}>
                    <FaReact size='65px' color='#ffffff' style={{marginRight:'5%'}} />
                    React.js
                </div>
                <div className={classes.List}>
                    <SiRedux size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    Redux
                </div>
                <div className={classes.List}>
                    <SiBootstrap size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    Bootstrap
                </div>
                <div className={classes.List}>
                    <SiBulma size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    Bulma
                </div>
                <div className={classes.List}>
                    <SiAmericanexpress size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    Express.js
                </div>
                <div className={classes.List}>
                    <SiMongodb size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    MongoDB
                </div>
                <div className={classes.List}>
                    <SiMongodb size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    Mongoose
                </div>
                <div className={classes.List}>
                    <SiFirebase size='55px' color='#ffffff' style={{marginRight:'5%'}} />
                    Firebase
                </div>
                <div className={classes.List}>
                    <FaCode size='55px' color='white' style={{marginRight:'5%'}} />
                    VsCode
                </div>
                <div className={classes.List}>
                    <SiSublimetext size='55px' color='white' style={{marginRight:'5%'}} />
                    Sublime Text
                </div>
                <div className={classes.List}>
                    <FaCode size='55px' color='white' style={{marginRight:'5%'}} />
                    goormIDE
                </div>
                <div className={classes.List}>
                    <FaGitAlt size='55px' color='white' style={{marginRight:'5%'}} />
                    Git
                </div>
                <div className={classes.List}>
                    <FaGithub size='55px' color='white' style={{marginRight:'5%'}} />
                    GitHub
                </div>
                <div className={classes.List}>
                    <SiJson size='55px' color='white' style={{marginRight:'5%'}} />
                    JSON
                </div>




            </div>
        </div>
    );
}

export default Skills;