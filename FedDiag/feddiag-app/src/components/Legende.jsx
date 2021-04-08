import React, { Fragment } from 'react';


function Legende() {
    const legends = [
        {id:0, legend:'Jamais'},
        {id:1 , legend:'Moins d\'une fois par mois'},
        {id:2, legend:"Une fois par mois"},
        {id:3, legend:"2 à 3 fois par mois"},
        {id:4, legend:"Une fois par semaine"},
        {id:5, legend:"2 à trois fois par semaine"},
        {id:6, legend:"4 à 6 fois par semaines"},
        {id:7, legend:"Tous les jours"},
    ];

    return(
        <Fragment>
       <p> Légende : </p>
       <ul>{legends.map((legend) => <li key={legend.id}>{legend.id}: {legend.legend}</li>)}</ul>
       </Fragment>
    );
}

export default Legende;