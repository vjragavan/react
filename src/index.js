var React = require('react');
var ReactDom = require('react-dom');
var createClass = require('create-react-class');

var Component = createClass ({
  render: function(){
    return (
      <div style={{ color: this.props.color }}>
        <h1> {this.props.greeting}, {this.props.name}</h1>
      </div>
      );
  }
});

ReactDom.render(
  <div>
    <Component greeting="Hello" name="Vijay" color="green"/>
    <Component greeting="Hello" name="Wright" color="red"/>
  </div>,
  document.getElementById('root')
);
