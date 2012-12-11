(function (root, factory) {
  if (typeof exports === 'object') {

    var jquery = require('jquery');
    var underscore = require('underscore');
    var backbone = require('backbone');
    var eventBinder = require('backbone.eventbinder');
    var wreqr = require('backbone.wreqr');
    var babysitter = require('backbone.babysitter');

    module.exports = factory(jquery, underscore, backbone, eventBinder, wreqr, babysitter);

  } else if (typeof define === 'function' && define.amd) {

    define(['jquery', 'underscore', 'backbone', 'backbone.wreqr', 'backbone.eventbinder', 'backbone.babysitter'], factory);

  } 
}(this, function ($, _, Backbone) {

  //= marionette.core.js
  return Backbone.Marionette; 

}));
