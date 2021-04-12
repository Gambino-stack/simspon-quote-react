import React from 'react';

function Checkbox (props) {
    const {name, children, value} = props;

    return(
        <div className="form-group form-check">
            <input className="form-check-input" ref={value} type="checkbox" name={name} id={name} />
            <label className="form-check-label" htmlFor={name}>{children}</label>
          </div>
    );
}

export default Checkbox;