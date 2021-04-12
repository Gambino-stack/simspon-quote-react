import React from 'react';

export default function GenderChoice(props) {
    const {value, className, name} = props;
    return(
    <div className="form-group">
        <label htmlFor={name}>Genre</label>
        <select className={className} name={name} id={name} ref={value}>
        <option value="">Choisissez votre genre</option>
        <option value="Masculin">Masculin</option>
        <option value="Feminin">Feminin</option>
        </select>
    </div>
    );
}