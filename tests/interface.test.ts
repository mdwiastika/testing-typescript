import { Seller } from "../src/seller";

describe("Interface Typescript", () => {
  it("should be support interface", () => {
    const seller: Seller = {
      id: 2,
      name: "Budi",
    };
    console.info(seller);
  });
});
