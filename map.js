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

//delete value
assert.ok(map.delete(onlyRefWorks));

//there's no way to iterate between items in object
//in map we have the generator standart and can use [...map]
assert.deepEqual(
  JSON.stringify([...map]),
  '[[1,"one"],["Jota",{"text":"two"}],[true,null]]'
);

//can use for of as well
for (const [key, value] of map) {
  console.log({ key, value });
}

//there is securit issues in objects which depends on key name
//like ({}).toStrig() === '[object Object] => ({toString: () => 'Hey'}).toString() === 'Hey
//(toString, valueOf, constructor, etc)...this doesn't happen with map
const actor = {
  name: "Craig",
  toString: () => "Ronaldo",
};

map.set(actor);

assert.throws(() => map.get(actor).toString, TypeError);

//there is no way to clean object without undersign, but map has clear
map.clear();
assert.deepStrictEqual([...map.keys()], []);

//conclusion: map is awesome for add frequently key values and wanna object as database
//good for clean values without undersign every key/value
