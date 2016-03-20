"use strict";
//Modules
var jQuery = require('jquery');
var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var InitializeActions = require('./actions/initializeActions');
InitializeActions.initApp();
//HistoryLocation - let use html5 routing without '#' clean url
//Router.run(routes, Router.HistoryLocation, function(Handler){
Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById('app'));
});


