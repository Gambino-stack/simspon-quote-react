import React, {useState} from 'react';
import MultiSelect from "react-multi-select-component";

function YaleAliments(props) {

        const options = [
          { label: "Glaces 🍧", value: "glaces" },
          { label: "Brocolis 🥦", value: "brocolis" },
          { label: "Pain 🥖", value: "pain" },
          { label: "Pâtes 🍝", value: "pâtes" },
          { label: "Bretzels 🥨", value: "bretzels" },
          { label: "Charcuteries 🥓", value: "charcuteries" },
          { label: "Cheeseburgers 🍔", value: "cheeseburgers" },
          { label: "Sodas 🧋", value: "sodas" },
          { label: "Chocolat 🍫", value: "Chocolat" },
          { label: "Biscuits 🍪", value: "biscuits" },
          { label: "Pain de mie 🍞", value: "painmie" },
          { label: "Fraises 🍓", value: "fraises" },
          { label: "Biscuits apéritifs 🍱", value: "biscuitsapéritifs" },
          { label: "Bananes 🍌", value: "bananes" },
          { label: "Fromages 🧀", value: "fromages" },
          { label: "Pommes 🍏", value: "pommes" },
          { label: "Gâteaux 🍰", value: "gâteaux" },
          { label: "Sandwichs 🥪", value: "sandwichs" },
          { label: "Riz 🍚", value: "riz" },
          { label: "Carottes 🥕", value: "carottes" },
          { label: "Bacon 🥩", value: "bacon" },
          { label: "Pizzas 🍕", value: "pizzas" },
          { label: "Beignets 🍩", value: "beignets" },
          { label: "Bonbons 🍬", value: "bonbons" },
          { label: "Laitues 🥬", value: "laitues" },
          { label: "Chips 🥜", value: "Chips" },
          { label: "Hamburgers 🍔", value: "hamburgers" },
          { label: "Frites 🍟", value: "frites" },
        ];
        const overrideStrings =  {
            "allItemsAreSelected": "Tous les aliments sont séléctionnés",
            "clearSearch": "Éffacer la recherche",
            "noOptions": "Plus d'options",
            "search": "Rechercher",
            "selectAll": "Tout séléctionner",
            "selectSomeItems": "Séléctionnez les aliments"
          };

        const [selected, setSelected] = useState([]);
        const {name} = props;
    return(
            <div className="form-group">
                <label htmlFor={name}>36. Merci de sélectionner TOUS les aliments pour lesquels 
                vous avez eu des problèmes (c’est à dire des difficultés à en contrôler la consommation). 
                </label>
                <MultiSelect
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy={name}
                    selectAllLabel="Tous les aliments"
                    overrideStrings={overrideStrings}
                />
            </div>
    );
}

export default YaleAliments;