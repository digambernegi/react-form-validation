import React,{useState} from 'react'
import "./style.css";

const Form = (props) => {
    const [focused,setFocused] = useState(false);
    const {label, errormsg, onChange , id, ...inputProps} = props;
    
    const handleFocus=(e)=>{
        setFocused(true);
    }
    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span>{errormsg}</span>
        </div>
    )
}

export default Form
