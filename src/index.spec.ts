import { api } from ".";

describe("test block 1", () => {
  it("test 1", () => {
    expect.assertions(1);
    expect(api()).toStrictEqual("Hello World");
  });
});
