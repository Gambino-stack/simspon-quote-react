import React from 'react';

export default function SelectSituation(props) {
    const {value, className, name} = props;
    return(
    <div className="form-group">
        <label htmlFor="situation">Situation Familiale</label>
        <select className={className} name={name} id="situation" ref={value}>
        <option value="">Quelle est votre situation ?</option>
        <option value="Marié">Marié</option>
        <option value="Pacsé">Pacsé</option>
        <option value="couple">En couple</option>
        <option value="concubinage">Comcubinage</option>
        <option value="celibataire">Célibataire</option>
        </select>
    </div>
    );
}