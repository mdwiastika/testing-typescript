import { Customer, CustomerType } from "../src/enum";

describe("Enum Type", () => {
  it("should support enum type", () => {
    const customer: Customer = {
      id: 2,
      name: "Marcel Dwi Astika",
      type: CustomerType.GOLD,
    };
    console.info(customer);
  });
});
