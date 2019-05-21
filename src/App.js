import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';//glue for react and redux
import { createStore,applyMiddleware } from 'redux';

import Posts from './components/Posts';
import PostForm from './components/Postform'
const store=createStore(()=>[],{},applyMiddleware());//createStore(reducer,[preloaded state],enhancer)


class App extends Component {
  render() {
    return (//provider takes store and store holds state
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
              <h1>Welcome to React</h1>
          </header>
          <PostForm/>
          <hr/>
          <Posts/>
        </div>
      </Provider>
    )
  }
}

export default App;
