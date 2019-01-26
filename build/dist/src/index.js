"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var registerServiceWorker_1 = require("./registerServiceWorker");
var emotion_1 = require("emotion");
var store_1 = require("./store/store");
var store_2 = require("root/store/store");
exports.store = store_2.store;
emotion_1.injectGlobal(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: sans-serif;\n\n    &, #root {\n      min-height: 100vh;\n    }\n  }\n"], ["\n  body {\n    padding: 0;\n    margin: 0;\n    font-family: sans-serif;\n\n    &, #root {\n      min-height: 100vh;\n    }\n  }\n"
    // we get location once
])));
// we get location once
store_1.store.dispatch.userSettings.requestLocation();
ReactDOM.render(React.createElement(App_1.default, null), document.getElementById("root"));
registerServiceWorker_1.default();
var templateObject_1;
//# sourceMappingURL=index.js.map