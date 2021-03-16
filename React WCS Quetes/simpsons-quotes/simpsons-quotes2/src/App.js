import './App.css';
import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : null,
      loading: false,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote () {
      axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then(result => result.data)
        .then(data => {
        this.setState({
          quote: data[0],
        });   
    })
  }
    
  render() {
    const {loading, quote} = this.state;
    return (
      <div className="App">
         {quote ? <QuoteCard quote={this.state.quote} /> : <LoadingSpinner /> }
        <button type="button" onClick={this.getQuote}>Get Quote </button>
        
      </div>
    );
    }
}
export default App;
