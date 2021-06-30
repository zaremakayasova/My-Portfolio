import classes from './Projects.module.css';
import projects from './utils';
import { FaProjectDiagram } from 'react-icons/fa';

import PageHeader from '../PageHeader/PageHeader';

const Projects = () => {

    return (
        <div className={classes.Projects}>
            <PageHeader title={'MY RECENT PROJECTS'} icon={<FaProjectDiagram size='5%' />} />
            <p>Check Out My Latest Projects.</p>
            <hr className={classes.Line} />
            {
                projects.map(project => (
                    <div key={project.id} className={classes.ProjectsContent}>
                        <img className={classes.Img} key={project.id} src={project.image} alt='thumbnail' />
                        <div className={classes.Container}>
                            <h2>{project.title}</h2>
                            <a className={classes.Link} href={project.liveUrl} target='_blank' rel='noreferrer' >LIVE</a>
                            <p>{project.description}</p>
                            <div>
                                <a className={classes.gitHubLink} href={project.githubUrl} target='_blank' rel='noreferrer'>{project.githubUrl}</a>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;