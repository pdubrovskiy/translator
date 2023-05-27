import { useState } from "react";
import InputField from "./InputField/InputField";
import classes from "./InputFields.module.css"


const InputFields = (props) => {

    let [inputText, setInputText] = useState('');
    let [outputText, setOutputText] = useState('');

    function changeInput(event){
        setInputText(event.target.value);
        changeOutput(event.target.value);
    }

    function changeOutput(text){
        setOutputText(text);
    }

    return (
        <div className={classes.wrapper}>
            <InputField onChange={changeInput} value={inputText}/>
            <div>
            ----
            </div>
            <InputField onChange={changeOutput} value={outputText}/>
        </div>
    );
}

export default InputFields;