"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_emotion_1 = require("react-emotion");
var React = require("react");
exports.Container = react_emotion_1.default("div")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 0.125rem;\n  width: 8rem;\n  height: 8rem;\n\n  > div {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    background: #ccc;\n    transform: scale(0);\n    transform-origin: center center;\n    animation: loader 2s infinite linear;\n\n    &:nth-of-type(7) {\n    }\n\n    &:nth-of-type(1),\n    &:nth-of-type(5),\n    &:nth-of-type(9) {\n      animation-delay: 0.4s;\n    }\n\n    &:nth-of-type(4),\n    &:nth-of-type(8) {\n      animation-delay: 0.2s;\n    }\n\n    &:nth-of-type(2),\n    &:nth-of-type(6) {\n      animation-delay: 0.6s;\n    }\n\n    &:nth-of-type(3) {\n      animation-delay: 0.8s;\n    }\n  }\n\n  @keyframes loader {\n    0% {\n      transform: scale(0);\n    }\n    40% {\n      transform: scale(1);\n    }\n    80% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 0.125rem;\n  width: 8rem;\n  height: 8rem;\n\n  > div {\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    height: 100%;\n    background: #ccc;\n    transform: scale(0);\n    transform-origin: center center;\n    animation: loader 2s infinite linear;\n\n    &:nth-of-type(7) {\n    }\n\n    &:nth-of-type(1),\n    &:nth-of-type(5),\n    &:nth-of-type(9) {\n      animation-delay: 0.4s;\n    }\n\n    &:nth-of-type(4),\n    &:nth-of-type(8) {\n      animation-delay: 0.2s;\n    }\n\n    &:nth-of-type(2),\n    &:nth-of-type(6) {\n      animation-delay: 0.6s;\n    }\n\n    &:nth-of-type(3) {\n      animation-delay: 0.8s;\n    }\n  }\n\n  @keyframes loader {\n    0% {\n      transform: scale(0);\n    }\n    40% {\n      transform: scale(1);\n    }\n    80% {\n      transform: scale(1);\n    }\n    100% {\n      transform: scale(0);\n    }\n  }\n"])));
exports.Loader = function () { return (React.createElement(exports.Container, null,
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null),
    React.createElement("div", null))); };
var templateObject_1;
//# sourceMappingURL=Loader.js.map