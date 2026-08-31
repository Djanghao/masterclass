# TypeScript Easy (6 lines)

**Author:** alphaglaze
**Votes:** 0
**Link:** [https://leetcode.com/problems/deep-merge-of-two-objects/solutions/5237232/](https://leetcode.com/problems/deep-merge-of-two-objects/solutions/5237232/)

---

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function deepMerge(obj1: JSONValue, obj2: JSONValue): JSONValue {
    if (typeof obj1 === "object" && typeof obj2 === "object" && Array.isArray(obj1) == Array.isArray(obj2)) {
        for (const key in obj1) {
            obj2[key] = deepMerge(obj1[key], obj2[key])
        }
    }
    return obj2 !== undefined ? obj2 : obj1
};

/**
 * let obj1 = {"a": 1, "c": 3}, obj2 = {"a": 2, "b": 2};
 * deepMerge(obj1, obj2); // {"a": 2, "c": 3, "b": 2}
 */

```