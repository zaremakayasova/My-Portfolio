import classes from './Projects.module.css';
import projects from './utils';

import PageHeader from '../PageHeader/PageHeader';

const Projects = () => {

    return (
        <div className={classes.Projects}>
            <PageHeader title={'My Last Projects'} />
            {
                projects.map(project => (
                    <div key={project.id} className={classes.ProjectsContent}>
                        <img className={classes.Img} key={project.id} src={project.image} alt='thumbnail' />
                        <div className={classes.Container}>
                            <h2>{project.title}</h2>
                            <a className={classes.Link} href={project.liveUrl} target='_blank'>LIVE</a>
                            <p>{project.description}</p>
                            <a className={classes.gitHubLink} href={project.githubUrl} target='_blank'>{project.githubUrl}</a>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Projects;