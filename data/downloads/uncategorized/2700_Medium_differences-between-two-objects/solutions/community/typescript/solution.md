# Clean recursive JS or TS

**Author:** krtwkns
**Votes:** 1
**Link:** [https://leetcode.com/problems/differences-between-two-objects/solutions/4337631/](https://leetcode.com/problems/differences-between-two-objects/solutions/4337631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>

/**
if val1 === val2 => {}

if type of val1 !== obj || val2 !== obj => return [val1, val2]
*/

function objDiff(obj1: Obj, obj2: Obj): Obj {
    const getObjDiff = (val1, val2) => {
        if (val1 === val2) return {}
        if (val1 === null || val2 === null) return [val1, val2]
        if (typeof val1 !== 'object' || typeof val2 !== 'object') return [val1, val2]
        if (Array.isArray(val1) !== Array.isArray(val2)) return [val1, val2]

        const returnObj = {}

        for (const key in val1) {
            if(key in val2) {
                const subDiff = getObjDiff(val1[key], val2[key])
                if (!!Object.keys(subDiff).length) {
                    returnObj[key] = subDiff
                }
            }
        }
        return returnObj
    }

    return getObjDiff(obj1, obj2)
};

```