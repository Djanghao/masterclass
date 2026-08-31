# Typescript with correct typing

**Author:** alphaglaze
**Votes:** 0
**Link:** [https://leetcode.com/problems/deep-object-filter/solutions/5236998/](https://leetcode.com/problems/deep-object-filter/solutions/5236998/)

---

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>

function deepFilter(obj: Obj, fn: Function): Obj | undefined {
    if (Array.isArray(obj)) {
        const filtered: Array<JSONValue> = []
        for (const key of obj) {
            if (key !== null && typeof key === "object") {
                const keyFilter: Array<JSONValue> = (deepFilter(key as Obj, fn) as Array<JSONValue>) 
                if (keyFilter) {
                    filtered.push(keyFilter)
                }
            } else if (fn(key)) {
                filtered.push(key)
            }
        }
        if (filtered.length > 0) {
            return filtered
        }
        return
    } else {
        const filtered: Record<string, JSONValue> = {}
        for (const key in obj) {
            if (obj[key] !== null && typeof obj[key] === "object") {
                const keyFilter: Record<string, JSONValue> = (deepFilter(obj[key] as Obj, fn) as Record<string, JSONValue>)
                if (keyFilter) {
                    filtered[key] = keyFilter
                }
            } else if (fn(obj[key])) {
                filtered[key] = obj[key]
            }
        }
        for (const key in filtered) {
            return filtered
        }
        return
    }
};
```