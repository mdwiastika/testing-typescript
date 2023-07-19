import { CustomerType } from "../src/enum";
describe("Enum Type", () => {
    it("should support enum type", () => {
        const customer = {
            id: 2,
            name: "Marcel Dwi Astika",
            type: CustomerType.GOLD,
        };
        console.info(customer);
    });
});
