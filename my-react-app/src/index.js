import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListItem from './list/ListItem.js'
import Header from './components/Header'
import Footer from './components/Footer'





ReactDOM.render(
  <div className="app">
    <Header />
    <div className="app-body">
      <div className="app-list">
        <div className='list-item'>
          <hr />
          <div className="list-title">
            <h4>Title One</h4>
          </div>
          <ListItem />
          
          <hr />
        </div>

        <div className='list-item'>
          <hr />
          <div className="list-title">
            <h4>Title Two</h4>
          </div>

          <ListItem />
                   
          <hr />
        </div>

        <div className='list-item'>
          <hr />
          <div className="list-title">
            <h4>Title Three</h4>
          </div>
          <ListItem />
          
          <hr />
        </div>

      </div>

    </div>
    <Footer />


  </div>,
  document.getElementById('root')
);

