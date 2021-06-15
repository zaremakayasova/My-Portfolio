import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';
import PageHeader from '../PageHeader/PageHeader';

import FormInput from "../FormInput/FormInput";

const Contact = () => {
    const handleUrl = url => {
        return () => window.open(url, '_blank')
    };

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_mjp9syu', 'template_9rj3108', e.target, 'user_sJTbI7Nnddb6Oue63hAiS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className={classes.Contact} id='contact'>
            <PageHeader title={'Contact Me'} />
            <div className={classes.FormContainer}>
                <form className={classes.Form} onSubmit={handleSubmit}>
                    <FormInput type='text' name='name' placeholder='name *' />
                    <FormInput type='email' name='email' placeholder='email *' />
                    <FormInput type='text' name='subject' placeholder='subject *' />
                    <textarea name='message' placeholder='message *' required />
                    <button className={classes.Btn} type='submit'>SEND</button>
                </form>
            </div>

            <div className={classes.ContactIcons}>
                <FaLinkedin color='#ffffff' size='40px' style={{ margin: '25px' }} 
                    onClick={handleUrl('https://www.linkedin.com/in/zarema-kayasova-83b033203/')}
                />
                <FaGithub color='#ffffff' size='40px' style={{ margin: '25px' }}
                    onClick={handleUrl('https://github.com/zaremakayasova')}
                />
                <FaInstagramSquare color='#ffffff' size='40px' style={{ margin: '25px' }}
                    onClick={handleUrl('https://www.instagram.com/zarema_kayasova_hekimgil/?hl=en')}
                />
            </div>
        </div>
    );
}

export default Contact;