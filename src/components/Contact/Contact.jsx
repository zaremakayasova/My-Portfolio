import { FaInstagramSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';
import PageHeader from '../PageHeader/PageHeader';

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
            <div className={classes.Form}>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='name' />
                    <label htmlFor='name'>Name *</label>

                    <input type='email' name='email' placeholder='email' />
                    <label htmlFor='email'>Email *</label>

                    <input type='text' name='subject' placeholder='subject' />
                    <label htmlFor='subject'>Subject *</label>

                    <textarea name='message' placeholder='message' />
                    <label htmlFor='message'>Message *</label>

                    <button type='submit'>Send</button>
                </form>
            </div>

            <div className={classes.ContactIcons}>
                <FaLinkedin color='#ffffff' size='30px' style={{ padding: '10px' }}
                    onClick={handleUrl('https://www.linkedin.com/in/zarema-kayasova-83b033203/')}
                />
                <FaGithub color='#ffffff' size='30px' style={{ padding: '10px' }}
                    onClick={handleUrl('https://github.com/zaremakayasova')}
                />
                <FaInstagramSquare color='#ffffff' size='30px' style={{ padding: '10px' }}
                    onClick={handleUrl('https://www.instagram.com/zarema_kayasova_hekimgil/?hl=en')}
                />
            </div>
        </div>
    );
}

export default Contact;