const test = require("node:test");
const assert = require("node:assert");

test("Can use CommonJS require", () => {
  const color = require(".");
  assert.strictEqual(color("red").hex(), "#FF0000");
});
