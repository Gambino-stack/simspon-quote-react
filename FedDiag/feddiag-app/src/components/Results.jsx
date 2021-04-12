import React, { Fragment, Component} from 'react';


const data = JSON.parse(localStorage.getItem('form'));

export default class Result extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            loading: false
        };
    }
    
    AddictCalculator() {

        if (data.one > 6) {
            this.setState({one: this.state.one + 1});
        }
        if (data.two >= 6) {
            this.setState({ score: this.state.score + 1});
        }
        if (data.three >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.four >= 6) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.five >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.six >= 6) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.seven >= 6) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.eight >= 3) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.nine >= 2) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.ten >= 2) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.eleven >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twelve >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirteen >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.fourteen >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.fifteen >= 6) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.sixteen >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.seventeen >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.eighteen >= 3) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.nineteen >= 2) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twenty >= 3) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentyone >= 3) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentytwo >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentythree >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentyfour >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentyfive >= 6) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentysix >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentyseven >= 2) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentyeight >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.twentynine >= 4) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirty >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirtyone >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirtytwo >= 5) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirtythree >= 2) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirtyfour >= 3) {
            this.setState((state) => ({score: state.score + 1}))
        }
        if (data.thirtyfive >= 2) {
            this.setState((state) => ({score: state.score + 1}))
        }
        return this.state.score;
    }

    render() {
        console.log(this.state.score)
     return (
        <Fragment>
             <div className="alert alert-success">Le questionnaire nous a bien été soumis {data.sexe === "Masculin" ? "M." : "Mme."} {data.name.toUpperCase()} merci pour votre confiance ✅ </div>
            <p>{this.state.score}</p>
        </Fragment>
    );
  }
}


