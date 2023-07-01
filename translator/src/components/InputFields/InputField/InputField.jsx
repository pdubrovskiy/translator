import classes from "./InputField.module.scss";


const InputField = (props) => {
    
    return(
        <input type="text" onChange={props.onChange} value={props.value} disabled={props.disabled}
               placeholder={props.placeholder} className={props.className} autoFocus></input>
    );
}

export default InputField;