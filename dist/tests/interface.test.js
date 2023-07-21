describe("Interface Typescript", () => {
    it("should be support interface", () => {
        const seller = {
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
        const add = (number1, number2) => {
            return number1 + number2;
        };
        expect(add(3, 7)).toBe(10);
    });
    it("should support indexable interface", () => {
        const names = ["Marcel", "Dwi", "Astika"];
        console.info(names);
    });
});
export {};
