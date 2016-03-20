"use strict";

var trips = require('./data').trips;
var _ = require('lodash');

var _generatedId = function(){
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

var _clone = function(item){
  return JSON.parse(JSON.stringify(item));
};

var TripsApi = {
  getAllTrips: function(){
    return _clone(trips);
  },

  getTripById: function(id){
    var trip = _.find(trips, {id: id});
    return _clone(trip);
  },

  saveTrip: function(trip){
    if (trip.id){
      //Return existing Trip
      var existingTripIndex = _.indexOf(trips, _.find(trips, {id: trip.id}));
      trips.splice(existingTripIndex, 1, trip);
    } else {
      trip.id = _generatedId();
      trips.push(trip);
    }

    return _clone(trip);
  },

  deleteTrip: function(id){
    _.remove(trips, { id: id});
  }
};

module.exports = TripsApi;
