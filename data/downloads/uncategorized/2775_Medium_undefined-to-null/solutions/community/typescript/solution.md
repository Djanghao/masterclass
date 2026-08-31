# Typescript separated out fns

**Author:** JOlivier92
**Votes:** 0
**Link:** [https://leetcode.com/problems/undefined-to-null/solutions/4569459/](https://leetcode.com/problems/undefined-to-null/solutions/4569459/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Not the most concise, but separating the different functions for readability.

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
type Value = undefined | null | boolean | number | string | Value[] | { [key: string]: Value };

type Obj1 = Record<string, Value> | Array<Value>
type Obj2 = Record<string, JSONValue> | Array<JSONValue>

function handleArray(val: Array<Value>): Value[] {
    const newArray = val.map(el => {
        return handleValue(el)
    })
    return newArray 
}

function handleObject(obj: Obj1): { [key: string]: JSONValue } {
    const newObj = {}
    Object.keys(obj).forEach(key => {
        const value = handleValue(obj[key])
        newObj[key] = value
    })
    return newObj
}

function handleValue(val: Value): Value {
    if (val === undefined || val === null) {
        return null
    }
    if (Array.isArray(val)) {
        return handleArray(val)
    }

    if (typeof val === 'object') {
        return handleObject(val)
    }

    return val
}

function undefinedToNull(obj: Obj1): Obj2 {
    return Array.isArray(obj) ? handleArray(obj) : handleObject(obj)
};
```