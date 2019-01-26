"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var react_redux_1 = require("react-redux");
var memoize_one_1 = require("memoize-one");
var throttle_debounce_1 = require("throttle-debounce");
var react_emotion_1 = require("react-emotion");
var Container = react_emotion_1.default('div')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  border: 0.075rem solid #ccc;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  align-items: center;\n  color: #ccc;\n\n  > i {\n    margin-right: 0.5rem;\n  }\n\n  > input {\n    flex: 1;\n    border: 0;\n    outline: 0;\n    font-size: 1.125rem;\n  }\n"], ["\n  display: flex;\n  border: 0.075rem solid #ccc;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n  align-items: center;\n  color: #ccc;\n\n  > i {\n    margin-right: 0.5rem;\n  }\n\n  > input {\n    flex: 1;\n    border: 0;\n    outline: 0;\n    font-size: 1.125rem;\n  }\n"])));
var _SearchBar = /** @class */ (function (_super) {
    __extends(_SearchBar, _super);
    function _SearchBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // make sure we cache and use the same debouncer
        _this.memoizeDebounce = memoize_one_1.default(function (fun) { return throttle_debounce_1.debounce(300, fun); });
        return _this;
    }
    _SearchBar.prototype.render = function () {
        var _this = this;
        return (React.createElement(Container, null,
            React.createElement("i", { className: "fa fa-search" }),
            React.createElement("input", { type: "text", placeholder: "Search keyword, e.g. music...", onChange: function (event) { return _this.memoizeDebounce(_this.props.onChange)(event.currentTarget.value); } })));
    };
    return _SearchBar;
}(React.Component));
exports.SearchBar = react_redux_1.connect(function (state) { return ({
    value: state.events.keyword
}); }, function (_a) {
    var events = _a.events;
    return ({
        onChange: function (keyword) { return events.load(keyword); }
    });
})(_SearchBar);
var templateObject_1;
//# sourceMappingURL=SearchBar.js.map