import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import About from './Pages/About'
function App() {
  return (
   <Router>
   <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/About" component={About}/>
   </div>
   </Router>
  );
}

export default App;
