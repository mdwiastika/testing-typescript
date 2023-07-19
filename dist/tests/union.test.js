"use strict";
describe("Union Type", () => {
    it("Should be contain union type", () => {
        let sample = "Marcel";
        console.info(sample);
        sample = 18;
        console.info(sample);
        sample = true;
        console.info(sample);
        sample = [10, 20];
    });
    it("should support typeof operator", () => {
        function processData(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value == "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(processData("Marcel")).toBe("MARCEL");
        expect(processData(10)).toBe(12);
        expect(processData(true)).toBe(false);
    });
});
