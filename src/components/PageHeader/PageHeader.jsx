import classes from './PageHeader.module.css';

const PageHeader = ({ title, icon }) => {
    return (
        <div className={classes.Container}>
            <hr />
            <h1><span>{icon}</span>{title}</h1>
        </div>

    );
}

export default PageHeader;