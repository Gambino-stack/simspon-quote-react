import React from 'react';
import axios from 'axios';
import './form-movie.css';

export default class FormMovie extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            poster: "",
            comment: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(e) {
        this.setState({
                [e.target.name]: e.target.value,
              });
    }

    submitForm(e) {
        e.event.preventDefault();

        const url =  'https://post-a-form.herokuapp.com/api/movies/';

        axios.post(url, this.state)
            .then(res => res.data)
            .then(res => {
                console.log(res);
                alert(`un film a bien été ajouté avec le numéro ${res.Id}`);
            })
            .catch(e => {
                console.error(e);
                alert(`erreur lors de l'ajout du film : ${e.message}`);
            });
    }

    render () {
        return(
            <div className="container">
                <div className="FormMovie">
                    <h1 className="text-center mb-5">Ajouter un film</h1>
                    <form onSubmit={this.submitForm}>
                    <fieldset>
                    <legend>Informations</legend>
                        <div className="form-group">
                            <label htmlFor="title">Titre</label>
                            <input type="text" name="title" id="title" className="form-control" onChange={this.handleChange} value={this.state.title}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="url">Poster</label>
                        <input type="text" name="poster" id="url" className="form-control" onChange={this.handleChange} value={this.state.poster}/>
                        </div>
                        <div className="form-group">
                        <label htmlFor="comment">Commentaire</label>
                        <textarea id="comment" name="comment" className="form-control" rows='3' onChange={this.handleChange} value={this.state.comment}/>
                        </div>
                            <button type="submit" className="btn btn-outline-primary">Envoyer</button>
                    </fieldset>
                    </form>
                </div>
            </div>
        );
    }
}