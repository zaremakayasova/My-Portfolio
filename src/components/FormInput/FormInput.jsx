import classes from './FormInput.module.css';

const FormInput = ({ type, name, placeholder }) => (
    <div className={classes.FormInputContainer}>
        <input className={classes.FormInput} type={type} name={name} placeholder={placeholder} required />
    </div>
);

export default FormInput;