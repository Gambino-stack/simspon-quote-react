import React from 'react';


function Textarea(props) {
    const {name, label, rows, cols, value} = props;
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <textarea className="form-control" name={name} id={name} ref={value} rows={rows} cols={cols}></textarea>
        </div>
    );
}

export default Textarea;