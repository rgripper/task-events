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
var EventItem_1 = require("./EventItem");
var SearchBar_1 = require("./SearchBar");
var react_emotion_1 = require("react-emotion");
var Loader_1 = require("./Loader");
var EventListContainer = react_emotion_1.default("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 19rem);\n  grid-gap: 1rem;\n  align-items: center;\n  justify-content: center;\n\n  > {\n    margin: 0 auto;\n    max-width: 60rem;\n  }\n"], ["\n  padding: 1rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 19rem);\n  grid-gap: 1rem;\n  align-items: center;\n  justify-content: center;\n\n  > {\n    margin: 0 auto;\n    max-width: 60rem;\n  }\n"])));
var Center = react_emotion_1.default("div")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"])));
var SearchBarContainer = react_emotion_1.default("div")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  padding: 2rem;\n\n  > {\n    margin: 0 auto;\n    max-width: 60rem;\n  }\n"], ["\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  padding: 2rem;\n\n  > {\n    margin: 0 auto;\n    max-width: 60rem;\n  }\n"])));
var Container = react_emotion_1.default("div")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"], ["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])));
var NoResults = react_emotion_1.default("div")(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  margin: 2rem;\n  text-align: center;\n  color: #ccc;\n  font-size: 1.125rem;\n"], ["\n  margin: 2rem;\n  text-align: center;\n  color: #ccc;\n  font-size: 1.125rem;\n"])));
var SearchHint = react_emotion_1.default("small")(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  color: #ccc;\n  font-size: 0.75rem;\n  padding: 0.5rem 0;\n"], ["\n  color: #ccc;\n  font-size: 0.75rem;\n  padding: 0.5rem 0;\n"])));
var _Home = /** @class */ (function (_super) {
    __extends(_Home, _super);
    function _Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _Home.prototype.render = function () {
        return (React.createElement(Container, null,
            React.createElement(SearchBarContainer, null,
                React.createElement(SearchBar_1.SearchBar, null),
                React.createElement(SearchHint, null, this.props.userSettings.coordinates
                    ? "Search around coordinates: " + this.props.userSettings.coordinates.latitude + ", " + this.props.userSettings.coordinates.longitude
                    : "Search in country: " + this.props.userSettings.countryCode)),
            this.props.isSearching ? (React.createElement(Center, null,
                React.createElement(Loader_1.Loader, null))) : this.props.events.length > 0 ? (React.createElement("div", null,
                React.createElement(EventListContainer, null, this.props.events.map(function (event) { return (React.createElement(EventItem_1.EventItem, { key: event.id, event: event })); })))) : (React.createElement(Center, null,
                React.createElement(NoResults, null, "No events found so far.")))));
    };
    return _Home;
}(React.Component));
exports._Home = _Home;
exports.Home = react_redux_1.connect(function (state) { return ({
    events: state.events.items,
    isSearching: state.events.isSearching,
    userSettings: state.userSettings
}); })(_Home);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
//# sourceMappingURL=Home.js.map