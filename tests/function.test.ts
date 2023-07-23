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
  it("should support overloading function", () => {
    function callMe(value: string): string;
    function callMe(value: number): number;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 2;
      }
    }
    expect(callMe("marcel")).toBe("MARCEL");
    expect(callMe(100)).toBe(200);
  });
  it("should support function as parameter", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }
    function uppperAlpha(value: string): string {
      return value.toUpperCase();
    }
    expect(sayHello("Marcel Dwi Astika", uppperAlpha)).toBe("Hello MARCEL DWI ASTIKA");
  });
});
