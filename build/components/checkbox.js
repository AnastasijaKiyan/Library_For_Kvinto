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
var CheckBox = /** @class */ (function (_super) {
    __extends(CheckBox, _super);
    function CheckBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChecked = function (e) {
            if (e.target.checked)
                Controller.onAddLang(e.target.name);
            else
                Controller.onRemoveLang(e.target.name);
        };
        return _this;
    }
    CheckBox.prototype.render = function () {
        return (react_1["default"].createElement("div", null,
            this.getInput("en"),
            this.getInput("ru")));
    };
    CheckBox.prototype.getInput = function (lang) {
        return react_1["default"].createElement(react_1.Fragment, null,
            react_1["default"].createElement("input", { className: "checkbox", type: "checkbox", name: lang, onChange: this.handleChecked }),
            react_1["default"].createElement("label", { htmlFor: "rus" }, lang.toUpperCase()));
    };
    return CheckBox;
}(react_1["default"].Component));
exports["default"] = CheckBox;
