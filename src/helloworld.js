var React = require('react');
var ReactDom = require('react-dom');

// <h1> hello world </h1>
//create a comopenent that will spit out hello world

//using create element we will create an element of type h1

var h1Element = React.createElement('h1', null, 'hello world!');

// tell react what to display and where
// the where is defined the public - index.html which is the page that is displayed
ReactDom.render(h1Element, document.getElementById('root'));
