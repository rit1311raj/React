//var React = require('react');
//var ReactDOM = require('react-dom');
//modern javascript me import likh ke ho jata hai
import React from 'react';
import ReactDOM from 'react-dom';
var t="Ritik";
const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();
const img1= "https://picsum.photos/200/300";
const img2= "https://picsum.photos/250/300";
const img3= "https://picsum.photos/300/300";
const links= "https://www.facebook.com";

ReactDOM.render(
<>
<h1>{`Hello, My Name is ${t}`}</h1>
<p>{`today Date is = ${currDate}`}</p>
<p>{`today time is = ${currTime}`}</p>
<h2 contentEditable="true">My name is {t} Raj</h2>\
<img src={img1} alt="randomimg"/>
<img src={img2} alt="randomimg"/>
<a href={links} target="_ritik">
  <img src={img3} alt="randomimg"/>
</a>
</>,
  document.getElementById("root"));