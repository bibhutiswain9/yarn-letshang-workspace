'use client'
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var components_exports = {};
__export(components_exports, {
  Container: () => Container
});
module.exports = __toCommonJS(components_exports);

// Container/index.tsx
var import_react2 = __toESM(require("react"));
var import_react_native2 = require("react-native");

// Container/Card/index.tsx
var import_react_native = require("react-native");
var import_react = __toESM(require("react"));
function Card({ photographers }) {
  return /* @__PURE__ */ import_react.default.createElement(import_react_native.View, { style: { width: 100, height: 100, borderWidth: 1 } }, /* @__PURE__ */ import_react.default.createElement(
    import_react_native.Image,
    {
      source: { uri: photographers?.src?.original },
      style: { width: 100, height: 100 }
    }
  ));
}

// Container/index.tsx
function Container({ photographers }) {
  return /* @__PURE__ */ import_react2.default.createElement(
    import_react_native2.FlatList,
    {
      data: photographers,
      keyExtractor: (item) => String(item.id),
      renderItem: ({ item }) => /* @__PURE__ */ import_react2.default.createElement(Card, { photographers: item })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Container
});
