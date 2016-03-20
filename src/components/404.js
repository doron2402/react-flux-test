"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFound = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Not Found</h1>
          <Link to="app" className="btn btn-primary btn-lg">Back to safety</Link>
        </div>
      </div>
    );
  }
});

module.exports = NotFound;
