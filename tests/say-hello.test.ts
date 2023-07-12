import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("Should Say Hello", () => {
    expect(sayHello("Marcel Dwi Astika")).toBe("Hello Marcel Dwi Astika");
  });
});
