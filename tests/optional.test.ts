describe("Optional Parameter", () => {
  it("should support optional parameter", () => {
    function sayHello(name?: string | null) {
      name ? console.info(`Hello ${name}`) : console.info("Hello Anonymous");
    }
    const name: string | undefined = "Marcel";
    sayHello(name);
    sayHello(null);
  });
});
