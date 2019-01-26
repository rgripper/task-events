"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Home_1 = require("./Home");
describe("<Home />", function () {
    var setup = function () {
        return enzyme_1.shallow(React.createElement(Home_1._Home, { isSearching: false, events: [], userSettings: { countryCode: 'AU' } }));
    };
    it("should render successfully", function () {
        var wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });
});
//# sourceMappingURL=Home.spec.js.map