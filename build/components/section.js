"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
require("../style/styles/style.css");
var Item = function (props) {
    return (react_1["default"].createElement("p", null,
        react_1["default"].createElement("a", { href: props.adress, target: "_blank", rel: "noopener noreferrer" }, props.name)));
};
var Section = function (props) {
    var items = props.list
        .map(function (elem) { return react_1.createElement(Item, __assign({}, elem, { key: elem.id })); });
    // console.log(items.length, props.elem.name); 
    if (items.length < 1)
        return null;
    return (react_1["default"].createElement("section", { className: "section" },
        react_1["default"].createElement("h1", { className: "list" }, props.category),
        react_1["default"].createElement("div", { className: "list-item" }, items)));
};
exports["default"] = Section;
