import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';


// Example for adding new element and render it on react app
// const greeting = React.createElement('h1', {}, 'Welcome to my first React app!!');



// Example for using JSX syntax and Javascript functions

// const getCurrentDate = () => {
//   const date = new Date();
//   return date.toDateString();
// }

// const greeting = <h1>Welcome to my first React app!! <u>Current Date :</u> <i>{getCurrentDate()}</i></h1>;

// ReactDOM.render(greeting,
//    document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
