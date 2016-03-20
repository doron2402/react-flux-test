"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homePage')} />
    <Route name="authors" handler={require('./components/authors/authorPage')} />
    <Route path="authors/:authirId" handler={require('./components/authors/authorSinglePage')} />
    <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <Route name="trips" handler={require('./components/trips/tripsPage')} />
    <Route name="contact" handler={require('./components/contact/contactPage')} />
    <NotFoundRoute handler={require('./components/404.js')} />
    <Redirect from="about-us" to="about" />
    <Redirect from="about/*" to="about" />
    <Redirect from="author" to="authors" />
  </Route>
);

module.exports = routes;
