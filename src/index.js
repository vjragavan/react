var React = require('react');
var ReactDom = require('react-dom');

// jsx lets you use declarative syntax for creating elements

//var h1Element = <h1> hello world !!! </h1>;

//functional component
var Component = function (props) {
  return (<h1> {props.greeting} </h1>);
};

// tell react what to display and where
// the where is defined the public - index.html which is the page that is displayed
ReactDom.render(
  //React.createElement(component),
  <Component greeting="Hello World, Props"/>,
  document.getElementById('root')
);
