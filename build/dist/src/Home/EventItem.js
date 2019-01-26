"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_emotion_1 = require("react-emotion");
var Container = react_emotion_1.default("a")(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #333;\n  text-decoration: none;\n  position: relative;\n  height: 100%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 4px 4px rgba(124, 124, 0, 0.25);\n  }\n\n  > img {\n    flex: 1;\n  }\n"], ["\n  color: #333;\n  text-decoration: none;\n  position: relative;\n  height: 100%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  display: flex;\n  flex-direction: column;\n  cursor: pointer;\n\n  &:hover {\n    box-shadow: 0px 4px 4px rgba(124, 124, 0, 0.25);\n  }\n\n  > img {\n    flex: 1;\n  }\n"])));
var ThumbImage = react_emotion_1.default("img")(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 14rem;\n  object-fit: cover;\n\n  &[src=\"\"] {\n    background: #eee;\n  }\n"], ["\n  height: 14rem;\n  object-fit: cover;\n\n  &[src=\"\"] {\n    background: #eee;\n  }\n"])));
var Price = react_emotion_1.default("span")(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  background-color: #ccc;\n  opacity: 0.75;\n"], ["\n  position: absolute;\n  top: 0.5rem;\n  left: 0.5rem;\n  padding: 0.25rem;\n  border-radius: 0.5rem;\n  background-color: #ccc;\n  opacity: 0.75;\n"])));
var Description = react_emotion_1.default("div")(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  font-size: 1.125rem;\n  padding: 0.5rem;\n  height: 3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  display: flex;\n  align-items: center;\n  font-size: 1.125rem;\n  padding: 0.5rem;\n  height: 3rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"])));
var getThumbImage = function (images) {
    return images.filter(function (x) { return x.width > 300; }).sort(function (a, b) { return a.width - b.width; })[0];
};
exports.EventItem = function (props) {
    var image = getThumbImage(props.event.images);
    var priceRange = props.event.priceRanges && props.event.priceRanges[0];
    return (React.createElement(Container, { target: "_blank", href: props.event.url },
        priceRange && (React.createElement(Price, null,
            priceRange.min,
            " - ",
            priceRange.max,
            " AUD")),
        React.createElement(ThumbImage, { src: image ? image.url : "" }),
        React.createElement(Description, null, props.event.name)));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=EventItem.js.map