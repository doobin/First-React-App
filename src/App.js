import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Family from './Family.js'

const App = (props) => (
  <Router>
    <div>
      <h1>Game of Thrones</h1>
      <Link to="/families">
        <button>See Families</button>
      </Link>

      <Route path="/families/" component={Family} />
    </div>
  </Router>
)

export default App;
