import React from 'react';


export default function NumberField(props) {
    const {name, children, value, placeholder, className} = props;

    return(
        <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input className={className} type="number" name={name} id={name} ref={value} placeholder={placeholder} />
        </div>
    );
}