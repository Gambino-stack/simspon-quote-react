import React from 'react';

function Field (props) {
    const {name, label,  value, placeholder, className} = props;

    return(
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input className={className}  type="text"  name={name} id={name} placeholder={placeholder} ref={value} />
    </div>
    );
}

export default Field;