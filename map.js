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
assert.deepStrictEqual(map.get(true)(), "Hello");

//objects only accepts string or symbol to keys (number is converted to string)
const onlyRefWorks = { id: 1 };
map.set(onlyRefWorks, { name: "Jota" });

assert.deepStrictEqual(map.get({ id: 1 }), undefined);
assert.deepStrictEqual(map.get(onlyRefWorks), { name: "Jota" });

//in object we have object.keys().length map got size
assert.deepStrictEqual(map.size, 4);

//to verify if item exists in map by key
assert.ok(map.has(onlyRefWorks));
