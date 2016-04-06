"use strict";

var util = require("../substance/util");
var _ = require("underscore");
var LensConverter = require('./lens_converter');

var EUPMCConverter = function(options) {
  LensConverter.call(this, options);
};

SciFairEuPmcConverter.Prototype = function() {

  var __super__ = LensConverter.prototype;

  this.test = function(xmlDoc, documentUrl) {
    return /scifair_content/.test(documentUrl)
  };

  // Resolve figure urls
  // --------
  //

  this.enhanceFigure = function(state, node, element) {
    var graphic = element.querySelector("graphic");
    var url = graphic.getAttribute("xlink:href");

    url = [
      "figures/",
      url
    ].join('');
    node.url = url;
  };

};

SciFairEuPmcConverter.Prototype.prototype = LensConverter.prototype;
SciFairEuPmcConverter.prototype = new EUPMCConverter.Prototype();
SciFairEuPmcConverter.prototype.constructor = EUPMCConverter;

module.exports = SciFairEuPmcConverter;
