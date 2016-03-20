"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')){
        transition.abort();
      }
    }
  },

  getInitialState: function(){
    return {
      author: { id: '', name: { first: '', last: '' } },
      errors: {},
      dirty: false
    };
  },


  componentWillMount: function(){
    if (this.props.params.id){
      var authorId = this.props.params.id;
      this.setState({
        author: AuthorStore.getAuthorById(authorId)
      });
    }
  },

  setAuthorState: function(event){
    this.setState({
      dirty: true
    });
    var field = event.target.name;
    var value = event.target.value;
    if (field === 'firstName'){
      this.state.author.name.first = value;
    } else if (field === 'lastName'){
      this.state.author.name.last = value;
    }
    return this.setState({
      author: this.state.author
    });
  },

  authorFormIsValid: function(){
    this.state.errors = {};
    var isValid = true;
    if (this.state.author.name.first.length < 3){
      this.state.errors.firstName = 'First Name must be longer than 3 letters';
      isValid = false;
    }
    if (this.state.author.name.last.length < 3){
      this.state.errors.lastName = 'Last Name must be longer than 3 letters';
      isValid = false;
    }
    this.setState({
      errors: this.state.errors
    });
    return isValid;
  },

  saveAuthor: function(event){
    event.preventDefault();
    if (!this.authorFormIsValid()){
      toastr.error('Author is not valid');
      return;
    }

    if(this.state.author.id){
      AuthorActions.updateAuthor(this.state.author);
    } else {
      AuthorActions.createAuthor(this.state.author);
    }

    AuthorActions.createAuthor(this.state.author);
    this.setState({dirty: false});
    toastr.success('Author Saved.');
    this.transitionTo('authors');
  },

  render: function(){
    return (
      <div>
        <h1>Manage Author</h1>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors}
        />
      </div>
    );
  }
});

module.exports = ManageAuthorPage;
