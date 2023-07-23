describe("funstion testing", () => {
  it("should support function in typescript", () => {
    function sayHello(name: string = "Guest"): string {
      return `Halo ${name}`;
    }
    function testVoid(active: boolean): void {
      active = active ? false : true;
      console.info(active);
    }
    expect(sayHello("Marcel")).toBe("Halo Marcel");
    expect(sayHello()).toBe("Halo Guest");
    testVoid(false);
  });
  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
    expect(sum(100, 50, 40)).toBe(190);
  });
  it("shouls support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      return `Hello ${firstName}${lastName ? " " + lastName : ""}`;
    }
    expect(sayHello("Marcel")).toBe("Hello Marcel");
    expect(sayHello("Marcel", "Dwi")).toBe("Hello Marcel Dwi");
  });
});
