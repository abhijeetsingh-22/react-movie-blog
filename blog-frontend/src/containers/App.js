import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './Navbar';
import { configureStore } from '../store';
import Main from './Main';
import { setToken, setCurrentUser } from '../store/actions/auth';
import Footer from '../component/Footer';
import jwtDecode from 'jwt-decode';
const store = configureStore();

const App = () => {
  if (localStorage.jwtToken) {
    setToken(localStorage.jwtToken);
    try {
      store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
    } catch (err) {
      setCurrentUser({});
    }
  }
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Main />
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
