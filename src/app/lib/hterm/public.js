// Copyright (c) 2015 The Chromium OS Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @constructor
 */
var Config = function() {};
Config.prototype.get = function(name) {};
Config.prototype.set = function(name, value) {};
Config.prototype.addObserver = function(callback) {};
Config.prototype.removeObserver = function(callback) {};

/**
 * @constructor
 */
var Terminal = function() {
  this.config = new Config();
  this.decorate = function(obj) {};
  this.installKeyboard = function() {};

  this.io = {
    onVTKeystroke: null,
    onTerminalResize: null,
    /**
     * @param {string} str
     */
    print: function(str, callback) {},
    /**
     * @param {string} str
     */
    println: function(str, callback) {}
  }
};

var hterm = {Terminal:Terminal};
export {hterm};
export default hterm;