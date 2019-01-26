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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Home_1 = require("./Home/Home");
var store_1 = require("./store/store");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement(react_redux_1.Provider, { store: store_1.store },
                React.createElement(react_router_1.Route, { path: "/", component: Home_1.Home }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map