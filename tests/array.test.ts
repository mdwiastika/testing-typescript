describe("Test Array", () => {
  it("The data types in the array must be the same", () => {
    const name: String[] = ["Marcel Dwi Astika", "Budi Setiawan"];
    const balance: Number[] = [300, 200];
    name[1] = "Budi Updated";
    console.info(name);
    console.info(balance);
  });
  it("should readonly array", () => {
    const name: ReadonlyArray<String> = ["Marcel Dwi Astika", "Budi Setiawan"];
    console.info(name);
  });
  it("should support tupple", () => {
    const random: readonly [string, boolean, number] = ["Marcel Dwi Astika", true, 1000000];
    // random[1] = false;
    console.info(random);
  });
});
