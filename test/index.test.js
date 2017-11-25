import * as assert from "assert";
import guy from "..";

describe("api", () => {
  test("guy", () => {
    assert.equal(typeof guy, "string");
  });
});
