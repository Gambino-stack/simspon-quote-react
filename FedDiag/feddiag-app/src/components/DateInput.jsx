import React from 'react';

function DateInput(props) {
    const { name, children, value, className} = props;
    return(
        <div className="form-group">
            <label htmlFor={name}>{children}</label>
            <input type="date" className={className} name={name} id={name} ref={value}/>
        </div>
    );
}

export default DateInput;