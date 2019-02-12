var React = require('react');
var ReactDom = require('react-dom');

// jsx lets you use declarative syntax for creating elements

//var h1Element = <h1> hello world !!! </h1>;

//functional component
var Component = function (props) {
  return (
    <div style={{ color: props.color }}>
      <h1> {props.greeting}, {props.name}</h1>
    </div>
    );
};

// tell react what to display and where
// the where is defined the public - index.html which is the page that is displayed
ReactDom.render(
  //React.createElement(component),
  <div>
    <Component greeting="Hello" name="Vijay" color="green"/>
    <Component greeting="Hello" name="Wright" color="red"/>
  </div>,
  document.getElementById('root')
);
