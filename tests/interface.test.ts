import { AddFunction } from "../src/function-interface";
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
    console.info(add(3, 7));
  });
});
