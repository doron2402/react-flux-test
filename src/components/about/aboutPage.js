"use strict";

var React = require('react');

var About = React.createClass({
  statics: {
    willTransitionTo: function(transition, params, query, callback){
      if (!confirm('Are you sure?')){
        transition.about();
      } else {
        callback();
      }
    },
    willTransitionFrom: function(transition, component){
      if (!confirm('Are you sure you want to leave?')){
        transition.about();
      }
    }
  },
  render: function(){
    return (
      <div className="container">
        <h2>About</h2>
      </div>
    );
  }
});


module.exports = About;
