import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import classes from './Footer.module.css';

const Footer = () => {
    const handleUrl = url => {
        return () => window.open(url, '_blank')
    };
    return (
        <div className={classes.Footer}>
            <p>Developed and Designed by Zarema Kayasova</p>
            <p>2021 &copy; All rights reserved</p>
            <div className={classes.FooterIcons}>
                <FaLinkedin color='#f5babf' size='30px' style={{ marginRight: '25px' }}
                    onClick={handleUrl('https://www.linkedin.com/in/zarema-kayasova-83b033203/')}
                />
                <FaGithub color='#f5babf' size='30px' style={{ marginRight: '25px' }}
                    onClick={handleUrl('https://github.com/zaremakayasova')}
                />
                <FaInstagramSquare color='#f5babf' size='30px' style={{ marginRight: '25px' }}
                    onClick={handleUrl('https://www.instagram.com/zarema_kayasova_hekimgil/?hl=en')}
                />
            </div>
        </div>
    );
}

export default Footer;