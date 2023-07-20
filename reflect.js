import assert from "assert";

const myObj = {
  add(value) {
    return this.arg1 + this.arg2 + value;
  },
};

assert.deepStrictEqual(myObj.add.apply({ arg1: 10, arg2: 20 }, [100]), 130);

//error that can happen
myObj.add.apply = function () {
  throw new TypeError("Error");
};

assert.throws(() => myObj.add.apply({}, []), {
  name: "TypeError",
  message: "Error",
});

//using reflect
const result = Reflect.apply(myObj.add, { arg1: 10, arg2: 20 }, [200]);
assert.deepStrictEqual(result, 230);
