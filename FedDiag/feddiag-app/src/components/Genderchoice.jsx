import React from 'react';

export default function GenderChoice(props) {
    const {value, className, name} = props;
    return(
    <div className="form-group">
        <label htmlFor="sexe">Genre</label>
        <select className={className} name={name} id="sexe" ref={value}>
        <option value="">Choisissez votre genre</option>
        <option value="Masculin">Masculin</option>
        <option value="Feminin">Feminin</option>
        </select>
    </div>
    );
}