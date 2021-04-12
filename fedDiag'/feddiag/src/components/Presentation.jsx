import React, { Fragment } from 'react';
import './Presentation.css';


export default function Presentation () {

    return(
        <Fragment>
            <h1 className="text-left mt-4 mb-4">Bienvenue</h1>
            <p className="text-left mb-4">Bonjour et bienvenue sur <span className="diag">Fed</span>Diag', ce diagnostique nous permettra de mieux vous connaitre, merci de prendre le temps d'y répondre sérieusement. Dans un premier temps, veuillez remplir vos informations personnelles 👇 </p> 
        </Fragment>
    );
    }