import React from 'react'
import style from "./style";

const InputField = ({ name, inputType, onChange, onBlur, error, label }) => (
    <div style={style.inputGroup} className='col-lg-4 col-md-6 col-sm-6 col-xs-12'>
        <label style={style.label}>
            <div>{label}</div>
            <input
                style={style.input}
                type={inputType}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error && <div style={style.error}>{error}</div>}
        </label>
    </div>
);

export default InputField;