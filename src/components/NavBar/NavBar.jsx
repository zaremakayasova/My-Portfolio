import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <nav>
                <ul>
                    <li>
                        <a href='/'>HOME</a>
                    </li>
                    <li>
                        <a href='/#about'>ABOUT</a>
                    </li>
                    <li>
                        <a href='/#skills'>SKILLS</a>
                    </li>
                    <li>
                        <a href='/#youtube'>PROJECTS</a>
                    </li>
                    <li>
                        <a href='/#contact'>CONTACT</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;