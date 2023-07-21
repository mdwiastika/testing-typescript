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
        console.info(add(3, 7));
    });
});
export {};
