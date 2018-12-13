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
var section_1 = require("./components/section");
var category_1 = require("./data/category");
var input_1 = require("./components/input");
var checkbox_1 = require("./components/checkbox");
var Controller = require("./controller");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = Controller.store.getState();
        _this.unsubscribe = function () { };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var _this = this;
        this.unsubscribe = Controller.store.subscribe(function () {
            _this.setState(Controller.store.getState());
        });
    };
    App.prototype.componentWillUnmount = function () {
        this.unsubscribe();
    };
    App.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { className: "inputs" },
                react_1["default"].createElement("div", { className: "input" },
                    react_1["default"].createElement(input_1["default"], null)),
                react_1["default"].createElement("div", { className: "checbox" },
                    react_1["default"].createElement(checkbox_1["default"], null))),
            react_1["default"].createElement("div", { className: "App" }, category_1.category.map(function (category) {
                return react_1["default"].createElement(section_1["default"], { key: category.id, category: category.name, list: _this.state.list.filter(function (item) { return item.field === category.id; }) });
            }))));
    };
    return App;
}(react_1.Component));
exports["default"] = App;
