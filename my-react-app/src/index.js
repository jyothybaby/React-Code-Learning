import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListItem from './list/ListItem.js'



ReactDOM.render(
  <div className="app">
    <div className="app-header">
      <span className='header-title'>Code Malayalam learning</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Settings</span>
      <span>Logout</span>

    </div>
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
    <div className="app-footer">
      Copyright learning CodeMalayalam.in. All Right Reserved
    </div>


  </div>,
  document.getElementById('root')
);

