import {api} from ".";

describe("test block", () => {
  it("test", () => {
    expect.assertions(1);
    expect(api()).toStrictEqual("Hello World");
  });
});
