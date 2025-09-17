🔹 Shallow Copy

A shallow copy makes a new object, but only copies the top-level properties.
If a property is an object/array, the copy will still reference the same inner object (not a new one).

1. Spread: { ...obj }

2. Object.assign({}, obj)

3. Array slice/spread: [...arr]


🔹 Deep Copy

A deep copy makes a completely new object, including all nested objects.
No shared references → changes in one do not affect the other.

1. structuredClone(obj) ✅ (modern JS, best way)

2. JSON.parse(JSON.stringify(obj)) (simple but limited)

3. Libraries: lodash.cloneDeep(obj)