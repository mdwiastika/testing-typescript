describe("Union Type", () => {
  it("Should be contain union type", () => {
    let sample: number | string | boolean | number[] = "Marcel";
    console.info(sample);
    sample = 18;
    console.info(sample);
    sample = true;
    console.info(sample);
    sample = [10, 20];
  });
});
