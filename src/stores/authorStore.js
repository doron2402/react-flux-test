"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  // on change
  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  // on remove
  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

  //Emit Change
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function(){
    return _authors;
  },

  getAuthorById: function(id){
    return _.find(_authors, {id: id});
  }
});

Dispatcher.register(function(action){
  console.log(action);
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      var existingAuthor = _.find(_authors, {id: action.author.id});
      var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
      _authors.splice(existingAuthorIndex, 1, action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      console.log('herea 54');
      console.log(action);
      _.remove(_authors, function(author){
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
    default:
      console.log('Dispatcher.register');
      break;
  }
});

module.exports = AuthorStore;
