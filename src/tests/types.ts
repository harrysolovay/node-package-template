import {IsExact, assert} from "conditional-type-checks";
import {api} from "..";

describe("test block 3", () => {
  it("test 1", () => {
    expect.assertions(0);
    const response = api();
    type Response = typeof response;
    assert<IsExact<Response, string>>(true);
  });
});
