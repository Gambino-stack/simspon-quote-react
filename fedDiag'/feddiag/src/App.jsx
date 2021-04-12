import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Form from './pages/Form';
import Banner from './components/Banner';
import Thanks from './pages/Thanks';

function App() {
  return (
    <div className="App">
        <Banner />
        <Router>
        <Switch>
          <Route exact path='/' component={Form} />
          <Route path='/merci' component={Thanks}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
