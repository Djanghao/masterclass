# TypeScript with correct typing

**Author:** alphaglaze
**Votes:** 0
**Link:** [https://leetcode.com/problems/inversion-of-object/solutions/5236655/](https://leetcode.com/problems/inversion-of-object/solutions/5236655/)

---

# Code
```
type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>

function invertObject(obj: Obj): Record<string, JSONValue> {
    const inverted: Record<string, JSONValue> = {}
    for (const key in obj) {
        if (obj[key] in inverted) {
            if (!Array.isArray(inverted[obj[key]])) {
                inverted[obj[key]] = [inverted[obj[key]]]
            }
            (inverted[obj[key]] as Array<JSONValue>).push(key)
        } else {
            inverted[obj[key]] = key
        }
    }
    return inverted
};
```