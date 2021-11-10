import React from 'react'
import "./style.css";

const Form = (props) => {
    const {label, errormsg, onChange , id, ...inputProps} = props;
    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
            <span>{errormsg}</span>
        </div>
    )
}

export default Form
