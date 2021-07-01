import { FaMailBulk } from "react-icons/fa";
import emailjs from 'emailjs-com';
import classes from './Contact.module.css';
import PageHeader from '../PageHeader/PageHeader';

import FormInput from "../FormInput/FormInput";

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();

        emailjs.sendForm('service_mjp9syu', 'template_9rj3108', e.target, 'user_sJTbI7Nnddb6Oue63hAiS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        alert('Your message has been sent. Thank you!');
    }

    return (
        <div className={classes.Contact} id='contact'>
            <PageHeader title={'CONTACT ME'} icon={<FaMailBulk size='5%' />} />
            <div className={classes.ContactContainer}>
                <div className={classes.FormContainer}>
                    <h2>Send A Message</h2>
                    <hr />
                    <form className={classes.Form} onSubmit={handleSubmit}>
                        <FormInput type='text' name='name' placeholder='Name *' />
                        <FormInput type='email' name='email' placeholder='Email *' />
                        <FormInput type='text' name='subject' placeholder='Subject *' />
                        <textarea name='message' placeholder='Message *' required />
                        <button className={classes.Btn} type='submit'>SEND</button>
                    </form>
                </div>
                <div className={classes.Text}>
                    <h2>Get in Touch</h2>
                    <hr />
                    <div className={classes.Message}>
                        <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                            Simply fill out the form and send me an email.<span className={classes.Wave}>🙋🏻</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;