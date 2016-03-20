"use strict";

var authors = require('./data').authors;
var _ = require('lodash');

var _generatedId = function(author){
  return author.name.first.toLowerCase() + '-' + author.name.last.toLowerCase();
};

var _clone = function(item){
  return JSON.parse(JSON.stringify(item));
};

var AuthorApi = {
  getAllAuthors: function(){
    return _clone(authors);
  },

  getAuthorById: function(id){
    var author = _.find(authors, {id: id});
    return _clone(author);
  },

  saveAuthor: function(author){
    console.log(author);
    if (author.id){
      var existingAuthorIndex = _.indexOf(authors, _.find(authors, {id: author.id}));
      authors.splice(existingAuthorIndex, 1, author);
    } else {
      author.id = _generatedId(author);
      authors.push(author);
    }

    return _clone(author);
  },

  deleteAuthor: function(id){
    _.remove(authors, { id: id});
  }
};

module.exports = AuthorApi;
