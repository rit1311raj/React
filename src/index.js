//var React = require('react');
//var ReactDOM = require('react-dom');
//modern javascript me import likh ke ho jata hai
import React from 'react';
import ReactDOM from 'react-dom';
var t="Ritik";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
ReactDOM.render(
<>
<h1>{`Hello, My Name is ${t}`}</h1>
<p>{`today Date is = ${currDate}`}</p>
<p>{`today time is = ${currTime}`}</p>

</>,
  document.getElementById("root"));