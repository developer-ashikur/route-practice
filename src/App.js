import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/Notfound/NotFound';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/friend/:friendId'>
              <FriendDetails />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
