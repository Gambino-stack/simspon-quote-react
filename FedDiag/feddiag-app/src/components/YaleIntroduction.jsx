import React, {Fragment} from 'react';


function YaleIntroduction() {
    return(
        <Fragment>
            <b className="consign">Consignes pour remplir le questionnaire :</b>
            <p className="mb-5">Ce questionnaire porte sur vos habitudes alimentaires de l’année passée. 
                Pour chaque question, merci de séléctionner le chiffre (0, 1, 2, 3, 4, 5, 6 ou 7) qui correspond le mieux à vos habitudes alimentaires des 12 derniers mois. Les gens ont parfois du mal à contrôler la quantité de nourriture qu’ils peuvent manger, comme par exemple:	 
                - Les aliments sucrés comme les glaces ou les crèmes glacées, le chocolat, les beignets, les biscuits, les gâteaux et les bonbons.	 	- Les féculents comme le pain, le pain de mie, les sandwichs, les pâtes et le riz.	 	- Les aliments salés comme les chips, les bretzels et les biscuits apéritifs.	 	- Les aliments gras comme le steak, les charcuteries, le bacon, les hamburgers, les cheeseburgers, les fromages, les pizzas et les frites.	 
                - Les boissons sucrées comme le soda, la limonade et les boissons énergétiques.	Pour les questions suivantes, l’expression « CERTAINS ALIMENTS » sera utilisée. Dans ce cas, merci de penser à TOUT aliment ou boisson indiqué(e) dans la liste ci-dessus ou à TOUT AUTRE(S) aliment(s) qui vous a (ont) posé un problème au cours de l’année passée.
            </p>
        </Fragment>
    );
}

export default YaleIntroduction;