import {api} from ".";

describe("Test Group 1", () => {
  it("Test 1", () => {
    expect.assertions(1);
    setTimeout(() => {}, 1000);
    console.log("Some log from 'Test 1'");
    expect(api()).toStrictEqual("Hello World");
  });
});
