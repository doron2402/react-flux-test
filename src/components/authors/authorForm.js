"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function(){
    return (
      <form>
        <TextInput
          name="firstName"
          label="First Name"
          value={this.props.author.name.first}
          onChange={this.props.onChange}
          error={this.props.errors.firstName}
        />
        <br />
        <TextInput
          name="lastName"
          label="Last Name"
          value={this.props.author.name.last}
          onChange={this.props.onChange}
          error={this.props.errors.lastName}
        />
        <input
          type="submit"
          value="Save"
          onClick={this.props.onSave}
          className="btn btn-default" />
      </form>
    );
  }
});

module.exports = AuthorForm;
