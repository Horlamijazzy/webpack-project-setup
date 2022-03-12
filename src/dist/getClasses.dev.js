"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _wizard = require("./wizard");

var _barbarian = require("./barbarian");

function getClasses() {
  console.log("get classes was called");
  console.log(_wizard.wizard);
  console.log(_barbarian.barbarian);
}

var _default = getClasses;
exports["default"] = _default;