import React, { Component } from 'react';
import './styles.css';
import CartContainer from '../../containers/CartContainer';
import Dashboard from '../Dashboard/component';
import CategoryDetails from '../CategoryDetails/component';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux'
import appReducer from '../../reducers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
            <div className="App">
                <div className="App-header">
                    <div className="App-title animated zoomIn">
                        <Link to="/"><h2>CLOTHES ON FIRE</h2></Link>
                    </div>
                    <CartContainer/>
                </div>
                <Route exact path="/" component={Dashboard} />
                <Route path="/category/:id" component={CategoryDetails} />
            </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
