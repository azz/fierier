/* eslint no-console:0 */

console.log = jest.fn();

describe("cli", () => {
  test("guy", () => {
    require("../lib/cli");
    expect(console.log).toHaveBeenCalledWith(expect.any(String));
  });
});
