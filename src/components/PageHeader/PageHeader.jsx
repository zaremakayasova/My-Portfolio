import classes from './PageHeader.module.css';

const PageHeader = ({ title }) => {
    return (
        <div className={classes.Container}>
            <hr />
            <h1>{title}</h1>
        </div>

    );
}

export default PageHeader;