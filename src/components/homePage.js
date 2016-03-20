"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
  render: function(){
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Administration</h1>
          <p>Bla bla</p>
          <Link to="contact" className="btn btn-primary btn-lg">Contact us</Link>
        </div>
      </div>
    );
  }
});

module.exports = Home;
