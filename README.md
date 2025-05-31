# 🔍 JavaScript Type Checker

A lightweight utility to **accurately detect the data type** of any JavaScript value — including advanced types like `Set`, `Map`, `WeakMap`, `BigInt`, `Symbol`, and more.

---

## 📦 Features

✅ Detects all JavaScript built-in types  
✅ Works better than `typeof`  
✅ Supports edge cases like `null`, `NaN`, `WeakMap`, etc.  
✅ Tiny and dependency-free  
✅ Easy to integrate in any project (Node.js or browser)

---

## 🧠 Why Not Just Use `typeof`?

While `typeof` works for primitive values, it **fails** in many situations:

| Value              | `typeof` Result | Accurate Result |
|--------------------|------------------|------------------|
| `null`             | `"object"`       | `"Null"`         |
| `[]`               | `"object"`       | `"Array"`        |
| `new Set()`        | `"object"`       | `"Set"`          |
| `new Map()`        | `"object"`       | `"Map"`          |
| `Symbol('id')`     | `"symbol"`       | `"Symbol"`       |

This utility solves that by using the internal `Object.prototype.toString` method.

---

## 📄 Code

```js
// typeChecker.js

function getType(value) {
  // Extracts "Set", "Map", etc. from "[object Set]"
  return Object.prototype.toString.call(value).slice(8, -1);
}

module.exports = getType; // For Node.js users
