import classes from "./InputField.module.css";


const InputField = (props) => {
    return(
        <input type="text" onChange={props.onChange} value={props.value}></input>
    );
}

export default InputField;