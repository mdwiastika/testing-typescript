import { Manager } from "../src/employee";
import { AddFunction } from "../src/function-interface";
import { stringArray, stringIndexArray } from "../src/indexable-interface";
import { Seller } from "../src/seller";

describe("Interface Typescript", () => {
  it("should be support interface", () => {
    const seller: Seller = {
      id: 2,
      name: "Budi",
      nip: "912918212",
      npwp: "929120120",
    };
    seller.name = "Susanto";
    // seller.nip = "018212"; //error karena readonly property
    console.info(seller);
  });
  it("should support interface function", () => {
    const add: AddFunction = (number1: number, number2: number) => {
      return number1 + number2;
    };
    expect(add(3, 7)).toBe(10);
  });
  it("should support indexable interface", () => {
    const names: stringArray = ["Marcel", "Dwi", "Astika"];
    expect(names[0]).toBe("Marcel");
    expect(names[1]).toBe("Dwi");
    expect(names[2]).toBe("Astika");
  });
  it("should support string index interface", () => {
    const dictionary: stringIndexArray = {
      name: "Marcel",
      address: "Mojokerto",
    };
    expect(dictionary.name).toBe("Marcel");
    expect(dictionary.address).toBe("Mojokerto");
  });
  it("should support extends interface", () => {
    const employee1: Manager = {
      id: 1,
      name: "Marcel Dwi Astika",
      division: "Production",
      numberOFEmployees: 100,
    };
    expect(employee1.id).toBe(1);
    expect(employee1.name).toBe("Marcel Dwi Astika");
    expect(employee1.division).toBe("Production");
    expect(employee1.numberOFEmployees).toBe(100);
  });
  it("should support function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }
    const person: Person = {
      name: "Marcel Dwi Astika",
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };
    console.info(person);
    expect(person.name).toBe("Marcel Dwi Astika");
    expect(person.sayHello("Doni")).toBe("Hello Doni, my name is Marcel Dwi Astika");
  });
});
