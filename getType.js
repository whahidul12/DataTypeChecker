function getType(value) {
  const rawType = Object.prototype.toString.call(value);
  return rawType.slice(8, -1); // Extracts "Set", "Map", etc. from "[object Set]"
}

// Test cases
console.log(getType(123));                   // "Number"
console.log(getType("Hello"));               // "String"
console.log(getType(true));                  // "Boolean"
console.log(getType({}));                    // "Object"
console.log(getType([]));                    // "Array"
console.log(getType(null));                  // "Null"
console.log(getType(undefined));             // "Undefined"
console.log(getType(() => { }));             // "Function"
console.log(getType(new Date()));            // "Date"
console.log(getType(new Set()));             // "Set"
console.log(getType(new Map()));             // "Map"
console.log(getType(new WeakSet()));         // "WeakSet"
console.log(getType(new WeakMap()));         // "WeakMap"
console.log(getType(Symbol("id")));          // "Symbol"
console.log(getType(10n));                   // "BigInt"