import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'

import StorePicker from './components/StorePicker';
import App from './App';
import './css/style.css';

<Router>
    <div>
      <Route exact path="/" component={StorePicker}/>
      <Route path="/store" component={App}/>
    </div>
</Router>
  
const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


render(<App />, document.querySelector('#main'));
render(<StorePicker />, document.querySelector('#main'));