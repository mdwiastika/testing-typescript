"use strict";
describe("Optional Parameter", () => {
    it("should support optional parameter", () => {
        function sayHello(name) {
            name ? console.info(`Hello ${name}`) : console.info("Hello Anonymous");
        }
        const name = "Marcel";
        sayHello(name);
        sayHello(null);
    });
});
