import Field from './Field';
import Checkbox from './Checkbox';
import DateInput from './DateInput';
import React from 'react';
import {useForm} from 'react-hook-form';
import { useHistory } from "react-router-dom";
import Presentation from './Presentation';
import GenderChoice from './Genderchoice';
import NumberField from './NumberField';
import SelectSituation from './SelectSituation';
import QuestionsYale from './QuestionsYale';
import YaleIntroduction from './YaleIntroduction';
import YaleAliments from './YaleAliments';
import Textarea from './Textarea';
import useFormPersist from 'react-hook-form-persist';
import './FormDiag.css';


export default function FormDiag () {
    
    const history = useHistory();

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const {register, handleSubmit, formState, errors, clearErrors, getValues, reset, setValue, watch} = useForm({
        mode: 'onTouched'
    });
    
    const {isSubmitted, isSubmitSuccessful} = formState;



    const onSubmit = async (data) => {
        await sleep(1000);
        if (isSubmitted && isSubmitSuccessful) {
            history.push("/merci");
            clearErrors();
            reset();
        }

        data.imc = imc();
        //data.aliments = document.getElementsByClassName('dropdown-heading-value')[0].innerText;
        console.log(data)
    }

    useFormPersist("form", {watch, setValue}, {
        storage: window.localStorage, // default window.sessionStorage
      });

    
    const getHeight = getValues('height');
    const height = ((getHeight) / 100);

    const weight = getValues('weight');
    
    const imc = () => {
        let result;
        result = (weight / (height * height));
        return Math.round(result * 100) / 100;
    }

    return(
            <div className="formdiag container">
                    <Presentation/>
                    {!isSubmitSuccessful && isSubmitted && errors ? <div className="alert alert-danger">
                    <b>Oups ! Il semblerait qu'il y ait quelques erreurs ????</b>
                    </div> : isSubmitSuccessful && <div className="alert alert-success">Le questionnaire nous a bien ??t?? soumis ??? merci pour votre confiance </div>}
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <GenderChoice name="sexe" className={!errors.sexe ?"form-control" : "form-control is-invalid"} value={register({required : 'Veuillez s??l??ctionner votre genre svp'})}/>
                    {errors.sexe &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.sexe.message}</span>}
                    <Field name="name" className={!errors.name ?"form-control" : "form-control is-invalid" } label="Nom"  value={register({required : 'Vous devez entrer votre nom svp'})} placeholder="Entrez votre nom "/>
                    {errors.name &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.name.message}</span>}
                    <Field name="firstname" className={!errors.firstname ?"form-control" : "form-control is-invalid" } label="Pr??nom"  value={register({required : 'Veuillez entrer un prenom svp'})} placeholder="Entrez votre pr??nom"/>
                    {errors.firstname &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.firstname.message}</span>}
                    <DateInput name="birthdate" className={!errors.birthdate ?"form-control" : "form-control is-invalid" } value={register({required : 'Veuillez entrer une date de naissance svp'})} children="Date de naissance"/>
                    {errors.birthdate &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.birthdate.message}</span>}
                    <Field name="age" className={!errors.age ?"form-control" : "form-control is-invalid" } label="??ge" value={register({required : 'Veuillez entrer un age svp'})} placeholder="Entrez votre ??ge"/>
                    {errors.age &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.age.message}</span>}
                    <SelectSituation name="situation" className={!errors.situation ?"form-control" : "form-control is-invalid" } value={register({required : 'Veuillez selectionner une situation svp'})}/>
                    {errors.situation &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.situation.message}</span>}
                    <NumberField name="weight" className={!errors.weight ?"form-control" : "form-control is-invalid" } value={register({required : 'Veuillez entrer un poids svp', maxLength: 3})} children="Poids (en kgs)" placeholder="Merci d'entrer votre poids" />
                    {errors.weight &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.weight.message}</span>}
                    <NumberField name="height" className={!errors.height ?"form-control" : "form-control is-invalid" } value={register({required : 'Veuillez entrer une taille svp',minLength: 3, maxLength: 3})} children="Taille (en cms)" placeholder="Merci d'entrer votre taille" />
                    {errors.height &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.height.message}</span>}
                    <div className="form-group">
                    <label htmlFor="imc">Indice de Masse Corporelle (IMC)</label>
                    <div className="form-control">Votre IMC est de {imc() > 0 && imc() <= 60 && imc() !== Infinity ?  imc() : null}</div></div>
                    <hr className="mt-4 mb-4"/>
                    <h2 className="text-left mt-4 mb-4">Votre addiction ?? l'alimentation ????????????</h2>
                    <YaleIntroduction />
                    <QuestionsYale name="one" className={!errors.one ?"form-control" : "form-control is-invalid" } label="1. Lorsque j???ai commenc?? ?? manger certains aliments, j???en ai mang?? beaucoup plus que pr??vu." value={register({required: 'Vous devez r??pondre ?? la question 1'})}/>
                    {errors.one &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.one.message}</span>}
                    <QuestionsYale name="two" className={!errors.two ?"form-control" : "form-control is-invalid" } label="2. Il m???est arriv??(e) de continuer ?? manger certains aliments m??me lorsque je n???avais plus faim." value={register({required: 'Vous devez r??pondre ?? la question 2'})}/>
                    {errors.two &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.two.message}</span>}
                    <QuestionsYale name="three" className={!errors.three ?"form-control" : "form-control is-invalid" } label="3. J???ai mang?? jusqu????? me sentir ????mal???? physiquement." value={register({required: 'Vous devez r??pondre ?? la question 3'})}/>
                    {errors.three &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.three.message}</span>}
                    <QuestionsYale name="four" className={!errors.four ?"form-control" : "form-control is-invalid" } label="4. J???ai ??t?? tr??s inquiet(e) ?? l???id??e de diminuer ma consommation de certains types d???aliments, mais j???en continu?? ?? en manger." value={register({required: 'Vous devez r??pondre ?? la question 4'})}/>
                    {errors.four &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.four.message}</span>}
                    <QuestionsYale name="five" className={!errors.five ?"form-control" : "form-control is-invalid" } label="5. J???ai pass?? beaucoup de temps ?? me sentir endormi(e) ou fatigu??(e) apr??s avoir trop mang??." value={register({required: 'Vous devez r??pondre ?? la question 5'})}/>
                    {errors.five &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.five.message}</span>}
                    <QuestionsYale name="six" className={!errors.six ?"form-control" : "form-control is-invalid" } label="6. J???ai pass?? beaucoup de temps ?? manger certains aliments au cours de la journ??e" value={register({required: 'Vous devez r??pondre ?? la question 6'})}/>
                    {errors.six &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.six.message}</span>}
                    <QuestionsYale name="seven" className={!errors.seven ?"form-control" : "form-control is-invalid" } label="7. Lorsque je n???avais pas certains aliments ?? ma disposition, j???ai fait des efforts pour en acheter. Par exemple, je suis all??(e) dans un magasin pour acheter ces aliments alors que j???avais d???autres aliments ?? la maison. " value={register({required: 'Vous devez r??pondre ?? la question 7'})}/>
                    {errors.seven &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.seven.message}</span>}
                    <QuestionsYale name="eight" className={!errors.height ?"form-control" : "form-control is-invalid" } label="8. J???ai mang?? certains aliments si souvent ou en si grande quantit?? que j???ai arr??t?? de faire d???autres choses importantes, comme par exemple travailler ou passer du temps avec ma famille ou mes amis. " value={register({required: 'Vous devez r??pondre ?? la question 8'})}/>
                    {errors.eight &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.eight.message}</span>}
                    <QuestionsYale name="nine" className={!errors.nine ?"form-control" : "form-control is-invalid" } label="9. J???ai eu des probl??mes avec ma famille ou mes amis ?? cause de la quantit?? de nourriture que je mange." value={register({required: 'Vous devez r??pondre ?? la question 9'})}/>
                    {errors.nine &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.nine.message}</span>}
                    <QuestionsYale name="ten" className={!errors.ten ?"form-control" : "form-control is-invalid" } label="10. J???ai ??vit?? certaines activit??s au travail, ?? l?????cole ou certaines activit??s sociales par peur de manger trop dans ces situations. " value={register({required: 'Vous devez r??pondre ?? la question 10'})}/>
                    {errors.ten &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.ten.message}</span>}
                    <QuestionsYale name="eleven" className={!errors.eleven ?"form-control" : "form-control is-invalid" } label="11. Lorsque j???ai diminu?? ou arr??t?? ma consommation de certains aliments, je me suis senti(e) irritable, stress??(e) ou triste." value={register({required: 'Vous devez r??pondre ?? la question 11'})}/>
                    {errors.eleven &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.eleven.message}</span>}
                    <QuestionsYale name="twelve" className={!errors.twelve ?"form-control" : "form-control is-invalid" } label="12. Lorsque j???ai diminu?? ou arr??t?? ma consommation de certains aliments et que j???ai eu des sympt??mes physiques, j???ai mang?? ces aliments pour me sentir mieux." value={register({required: 'Vous devez r??pondre ?? la question 12'})}/>
                    {errors.twelve &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twelve.message}</span>}
                    <QuestionsYale name="thirteen" className={!errors.thirteen ?"form-control" : "form-control is-invalid" } label="13. Lorsque j???ai diminu?? ou arr??t?? ma consommation de certains aliments et que je me suis senti(e) irritable, stress??(e) ou triste, j???ai mang?? ces aliments pour me sentir mieux." value={register({required: 'Vous devez r??pondre ?? la question 13'})}/>
                    {errors.thirteen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.thirteen.message}</span>}
                    <QuestionsYale name="fourtheen" className={!errors.fourtheen ?"form-control" : "form-control is-invalid" } label="14. Lorsque j???ai diminu?? ou arr??t?? ma consommation de certains aliments, j???ai eu des sympt??mes physiques comme par exemple des maux de t??te ou de la fatigue." value={register({required: 'Vous devez r??pondre ?? la question 14'})}/>
                    {errors.fourtheen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.fourtheen.message}</span>}
                    <QuestionsYale name="fifteen" className={!errors.fifteen ?"form-control" : "form-control is-invalid" } label="15. Lorsque j???ai diminu?? ou arr??t?? ma consommation de certains aliments, j???ai constat?? que j???avais un besoin plus important ou une envie irr??sistible de manger ces aliments. " value={register({required: 'Vous devez r??pondre ?? la question 15'})}/>
                    {errors.fifteen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.fifteen.message}</span>}
                    <QuestionsYale name="sixtheen" className={!errors.sixtheen ?"form-control" : "form-control is-invalid" } label="16. Mon comportement vis-??-vis de la nourriture et de l???alimentation a ??t?? source de souffrance." value={register({required: 'Vous devez r??pondre ?? la question 16'})}/>
                    {errors.sixtheen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.sixtheen.message}</span>}
                    <QuestionsYale name="seventeen" className={!errors.seventeen ?"form-control" : "form-control is-invalid" } label="17. J???ai eu beaucoup de probl??mes dans ma vie ?? cause de la nourriture et de l???alimentation, comme par exemple des probl??mes pour g??rer le quotidien, des probl??mes au travail, ?? l?????cole, avec la famille ou encore des probl??mes de sant??. " value={register({required: 'Vous devez r??pondre ?? la question 17'})}/>
                    {errors.seventeen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.seventeen.message}</span>}
                    <QuestionsYale name="eighteen" className={!errors.eighteen ?"form-control" : "form-control is-invalid" } label="18. Des fois, je me suis senti(e) si mal ?? cause de mon alimentation excessive que cela m???a emp??ch?? de faire des choses importantes, comme travailler ou passer du temps avec mes amis ou ma famille." value={register({required: 'Vous devez r??pondre ?? la question 18'})}/>
                    {errors.eighteen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.eighteen.message}</span>}
                    <QuestionsYale name="ninetheen" className={!errors.ninetheen ?"form-control" : "form-control is-invalid" } label="19. Mon alimentation excessive m???a emp??ch??(e) de m???occuper correctement de ma famille ou de faire des t??ches m??nag??res." value={register({required: 'Vous devez r??pondre ?? la question 19'})}/>
                    {errors.ninetheen &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.ninetheen.message}</span>}
                    <QuestionsYale name="twenty" className={!errors.twenty ?"form-control" : "form-control is-invalid" } label="20. J???ai ??vit?? des opportunit??s professionnelles ou relationnelles parce que je ne pouvais pas manger certains aliments dans ces situations" value={register({required: 'Vous devez r??pondre ?? la question 20'})}/>
                    {errors.twenty &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twenty.message}</span>}
                    <QuestionsYale name="twentyone" className={!errors.twentyone ? "form-control" : "form-control is-invalid" } label="21. J???ai ??vit?? certaines activit??s sociales car dans ces situations, certaines personnes n?????taient pas d???accord avec la quantit?? de nourriture que je pouvais manger." value={register({required: 'Vous devez r??pondre ?? la question 21'})} />
                    {errors.twentyone &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentyone.message}</span>}
                    <QuestionsYale name="twentytwo" className={!errors.twentytwo ?"form-control" : "form-control is-invalid" } label="22. J???ai continu?? ?? manger le(s) m??me(s) type(s) d???aliment(s) ou la m??me quantit?? de nourriture bien que cela ait ??t?? responsable de probl??mes psychologiques." value={register({required: 'Vous devez r??pondre ?? la question 22'})} />
                    {errors.twentytwo &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentytwo.message}</span>}
                    <QuestionsYale name="twentythree" className={!errors.twentythree ?"form-control" : "form-control is-invalid" } label="23. J???ai continu?? ?? manger le(s) m??me(s) type(s) d???aliment(s) ou la m??me quantit?? de nourriture bien que cela ait ??t?? responsable de probl??mes physiques." value={register({required: 'Vous devez r??pondre ?? la question 23'})} />
                    {errors.twentythree &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentythree.message}</span>}
                    <QuestionsYale name="twentyfour" className={!errors.twentyfour ?"form-control" : "form-control is-invalid" } label="24. Le fait de manger la m??me quantit?? de nourriture qu???avant ne me donne plus le m??me plaisir qu???avant." value={register({required: 'Vous devez r??pondre ?? la question 24'})} />
                    {errors.twentyfour &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentyfour.message}</span>}
                    <QuestionsYale name="twentyfive" className={!errors.twentyfive ?"form-control" : "form-control is-invalid" } label="25. J???ai vraiment voulu diminuer ou arr??ter ma consommation de certains aliments, mais je n???y suis pas arriv??." value={register({required: 'Vous devez r??pondre ?? la question 25'})} />
                    {errors.twentyfive &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentyfive.message}</span>}
                    <QuestionsYale name="twentysix" className={!errors.twentysix ?"form-control" : "form-control is-invalid" } label="26. J???ai eu besoin de manger de plus en plus pour avoir le m??me effet qu???avant, comme par exemple avoir moins de stress, avoir moins de tristesse ou avoir plus de plaisir." value={register({required: 'Vous devez r??pondre ?? la question 26'})} />
                    {errors.twentysix &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentysix.message}</span>}
                    <QuestionsYale name="twentyseven" className={!errors.twentyseven ?"form-control" : "form-control is-invalid" } label="27. Je n???ai pas r??ussi correctement au travail ou ?? l?????cole car je mangeais trop." value={register({required: 'Vous devez r??pondre ?? la question 27'})}/>
                    {errors.twentyseven &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentyseven.message}</span>}
                    <QuestionsYale name="twentyeight" className={!errors.twentyeight ?"form-control" : "form-control is-invalid" } label="28. J???ai continu?? ?? manger certains aliments m??me si je savais que c?????tait dangereux pour ma sant?? physique. Par exemple, j???ai continu?? ?? manger des bonbons alors que je savais que j???avais du diab??te, ou j???ai continu?? ?? manger des aliments gras alors que je savais que j???avais des probl??mes cardiaques. " value={register({required: 'Vous devez r??pondre ?? la question 28'})}/>
                    {errors.twentyeight &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentyeight.message}</span>}
                    <QuestionsYale name="twentynine" className={!errors.twentynine ?"form-control" : "form-control is-invalid" } label="29. J???ai eu des envies si fortes pour certains aliments que je ne pouvais plus penser ?? autre chose. " value={register({required: 'Vous devez r??pondre ?? la question 29'})}/>
                    {errors.twentynine &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.twentynine.message}</span>}
                    <QuestionsYale name="thirty" className={!errors.thirty ?"form-control" : "form-control is-invalid" } label="30. J???ai eu des envies si fortes pour certains aliments que c?????tait comme si je devais absolument les manger tout de suite. " value={register({required: 'Vous devez r??pondre ?? la question 30'})}/>
                    {errors.thirty &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.thirty.message}</span>}
                    <QuestionsYale name="thirtyone" className={!errors.thirtyone ?"form-control" : "form-control is-invalid" } label="31. J???ai essay?? de diminuer ou d???arr??ter ma consommation de certains aliments, mais je n???ai pas r??ussi." value={register({required: 'Vous devez r??pondre ?? la question 31'})} />
                    {errors.thirtyone &&<span className="error text-danger"><span className="mr-2">????</span>{errors.thirtyone.message}</span>}
                    <QuestionsYale name="thirtytwo" className={!errors.thirtytwo ?"form-control" : "form-control is-invalid" } label="32. J???ai essay?? mais n???ai pas r??ussi ?? diminuer ou ?? arr??ter de manger certains aliments." value={register({required: 'Vous devez r??pondre ?? la question 32'})}/>
                    {errors.thirtytwo &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.thirtytwo.message}</span>}
                    <QuestionsYale name="thirtythree" className={!errors.thirtythree ?"form-control" : "form-control is-invalid" } label="33. En mangeant, il m???est arriv??(e) d?????tre tellement inattentif (inattentive) que j???aurai pu ??tre bless??(e) (par exemple en conduisant une voiture, en traversant la rue ou en utilisant une machine ou un instrument dangereux).
                    " value={register({required: 'Vous devez r??pondre ?? la question 33'})}/>
                    {errors.thirtythree &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.thirtythree.message}</span>}
                    <QuestionsYale name="thirtyfour" className={!errors.thirtyfour ?"form-control" : "form-control is-invalid" } label="34. En pensant ?? la nourriture et ?? l???alimentation, il m???est arriv??(e) d?????tre tellement inattentif (inattentive) que j???aurai pu ??tre bless??(e) (par exemple en conduisant une voiture, en traversant la rue ou en utilisant une machine ou un instrument dangereux)." value={register({required: 'Vous devez r??pondre ?? la question 34'})}/>
                    {errors.thirtyfour &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.thirtyfour.message}</span>}
                    <QuestionsYale name="thirtyfive" className={!errors.thirtyfive ?"form-control" : "form-control is-invalid" } label="35. Mes amis et ma famille ont ??t?? inquiets de la quantit?? de nourriture que je pouvais manger.  " value={register({required: 'Vous devez r??pondre ?? la question 35'})}/>
                    {errors.thirtyfive &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.thirtyfive.message}</span>}
                    <YaleAliments name="food"/>
                    <Textarea name="others" label="37. Merci d???indiquer ici s???il y a d???autre(s) aliment(s) pour lesquels vous avez eu des probl??mes (c???est ?? dire des difficult??s ?? en contr??ler la consommation). Merci d???indiquer uniquement les aliments qui ne sont pas dans la liste ci-dessus.(optionnel)" rows="2" value={register} />
                    <Checkbox  name="privacy" children="Conditions G??n??rales de Vente" value={register({required : 'Veuillez accepter les condition g??n??rales svp'})} />
                    {errors.privacy &&<span className="error text-danger"><span className="mr-2">????????</span>{errors.privacy.message}</span>}
                    <button type="submit" disabled={formState.isSubmitting} className="btn btn-block  btn-outline-primary mt-2 mb-5">Envoyer</button>
                </form>
            </div>
    );
}