import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import NewPage from './components/Addiction';
import Drug from './components/Drug';
import Video from './components/Confirmation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/Addiction" component={NewPage} />
          <Route path="/Drug" component={Drug} />
          <Route path="/Confirmation" component={Video} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

