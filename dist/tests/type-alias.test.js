describe("Object Type Alias", () => {
    it("should be support alias type", () => {
        const category = {
            id: 1,
            name: "Laptop",
        };
        const product = {
            id: 1,
            name: "Lenovo Idepaped",
            price: 14000000,
            stock: 29,
            category: category,
            description: "Ini Produk Bagus",
        };
        product.id = "2";
        console.info(category);
        console.info(product);
    });
});
export {};
