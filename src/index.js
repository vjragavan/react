var React = require('react');
var ReactDom = require('react-dom');

// jsx lets you use declarative syntax for creating elements

//var h1Element = <h1> hello world !!! </h1>;

//functional component
var component = function () {
  return (<h1> hello world !!! </h1>);
};

// tell react what to display and where
// the where is defined the public - index.html which is the page that is displayed
ReactDom.render(
  React.createElement(component),
  document.getElementById('root')
);
