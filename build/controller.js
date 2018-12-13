"use strict";
exports.__esModule = true;
var list_1 = require("./data/list");
var redux_1 = require("redux");
exports.list = list_1.Lists;
var initialState = {
    list: list_1.Lists
};
exports.condition = {
    search: "",
    lang: [] // ["ua", "ru", "en"]
};
var filterHandler = function (elem) {
    if (elem.lang &&
        exports.condition.lang.length > 0 &&
        !exports.condition.lang.some(function (item) { return item == elem.lang; }))
        // !!!
        return false;
    if (elem["name"].toLowerCase().search(exports.condition.search.toLowerCase()) > -1)
        return true;
    if (elem.tags && elem.tags.length > 0)
        for (var i = 0; elem.tags.length > i; i++)
            if (elem.tags[i].toLowerCase().search(exports.condition.search.toLowerCase()) > -1)
                return true;
    return false;
};
var reducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    return ({
        list: list_1.Lists.filter(filterHandler)
    });
};
// export const store = new createStore(reducer.bind(this), initialState);
exports.store = redux_1.createStore(reducer);
exports.onSearch = function (text) {
    var action = { type: "onSearch" };
    exports.condition.search = text;
    exports.store.dispatch(action);
};
exports.onAddLang = function (lang) {
    var action = { type: "onSearch" };
    if (exports.condition.lang.some(function (item) { return item == lang; }))
        return; // !!!
    exports.condition.lang.push(lang);
    exports.store.dispatch(action);
};
exports.onRemoveLang = function (lang) {
    var action = { type: "onRemoveLang" };
    var index = exports.condition.lang.indexOf(lang);
    if (index < 0)
        return;
    exports.condition.lang.splice(index, 1);
    exports.store.dispatch(action);
};
