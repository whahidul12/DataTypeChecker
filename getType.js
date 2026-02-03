function getType(value) {
  // Extracts "Set", "Map", etc. from "[object Set Map]"
  return Object.prototype.toString.call(value).slice(8, -1);
}

// Test cases for Types
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
