import Login from './Pages/Login';
import './style.css';
// import { BrowserRouter as Router, Switch, Route, /* useLocation,*/ useHistory } from 'react-router-dom';
import Account from './Pages/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
