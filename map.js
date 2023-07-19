import assert from "assert";

const map = new Map();

//attr by set
map
  .set(1, "one")
  .set("Jota", { text: "two" })
  .set(true, () => "Hello");

//attr by constructor

const newMap = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);

console.log("map", map);
console.log("map constructor", newMap);

assert.deepStrictEqual(map.get(1), "one");
