var StickySwitch = require("nativescript-sticky-switch").StickySwitch;
var stickySwitch = new StickySwitch();

describe("greet function", function() {
    it("exists", function() {
        expect(stickySwitch.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(stickySwitch.greet()).toEqual("Hello, NS");
    });
});