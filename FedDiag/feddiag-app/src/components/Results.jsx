import React from 'react';


function Result() {
    const data = JSON.parse(localStorage.getItem('form'));

    console.log(data);

    return(
        <div className="alert alert-success">Le questionnaire nous a bien été soumis ✅ merci pour votre confiance {data.sexe === "Masculin" ? "M." : "Mme."} {data.name.toUpperCase()} </div>
    );
}

export default Result;
