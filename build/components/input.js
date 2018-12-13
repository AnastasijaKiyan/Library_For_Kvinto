"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
require("../style/styles/style.css");
var Controller = require("../controller");
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onTextChanged = function (e) {
            var text = e.target.value.trim(); // удаляем пробелы
            Controller.onSearch(text);
        };
        return _this;
    }
    Input.prototype.render = function () {
        return react_1["default"].createElement("input", { className: "search", placeholder: "Search", onChange: this.onTextChanged });
    };
    return Input;
}(react_1.Component));
exports["default"] = Input;
