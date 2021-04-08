import React from 'react';


function QuestionsYale(props) {
    const {name, label, value, className} = props
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select className={className} name={name} id={name} ref={value}>
                <option value="">Choisissez votre réponse</option>
                <option value="0">0 - Jamais</option>
                <option value="1">1 - Moins d'une fois par mois</option>
                <option value="2">2 - Une fois par mois</option>
                <option value="3">3 - Deux à trois fois par mois</option>
                <option value="4">4 - Une fois par semaine</option>
                <option value="5">5 - Deux à trois fois par semaine</option>
                <option value="6">6 - Quatre à six fois par semaines</option>
                <option value="7">7 - Tous les jours</option>
            </select>
        </div>
    );
}

export default QuestionsYale;