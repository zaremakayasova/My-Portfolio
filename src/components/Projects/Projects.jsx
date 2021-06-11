import classes from './Projects.module.css';
import PageHeader from '../PageHeader/PageHeader';

const Projects = () => {
    return (
        <div className={classes.Projects}>
            <PageHeader title={'My Projects'} />
            <div className={classes.ProjectsContent}>
                <div className={classes.Paragraph}>
                    <h2>BookStore App</h2>
                    <p>E-commerce store for custom decor, party supplies</p>
                    <p>Wordpress, WooCommerce, CSS, UX Design</p>
                </div>
                <div className={classes.Pictures}>

                </div>
            </div>
        </div>
    );
};

export default Projects;