import './App.css';
import React from 'react';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';
import LoadingSpinner from './components/LoadingSpinner';

const defaultQuote =  {
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png?1497567512205",
  quote : "I don't want to sound like a killjoy, but becuase this is not to my taste I don't think anyone else should be allowed to enjoy it.",
  character : "Marge Simspsons",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote : defaultQuote,
      loading: false,
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote () {
    this.setState({ loading: true }, () => {
      axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then(result => result.data)
        .then(data => {
        this.setState({
          loading: false,
          quote: data[0],
        });
      });   
    })
  }
    
  render() {
    const {loading, quote} = this.state;
    return (
      <div className="App">
        <button type="button" onClick={this.getQuote}>Get Quote </button>
        {loading ? <LoadingSpinner /> : <QuoteCard quote={this.state.quote} />}
        
      </div>
    );
    }
}
export default App;
