import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { useState } from 'react';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm';
import { Home } from './components/Home/Home';
import AlertComponent from './components/AlertComponent/AlertComponent';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null)
  return (
    <Router>
      <div className="App">
        <Header title={title} />
        <div className='container d-flex align-item-center flex-column'>
          <Switch>
            <Route path='/' exat={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <PrivateRoute path="/home">
              <Home />
            </PrivateRoute>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
