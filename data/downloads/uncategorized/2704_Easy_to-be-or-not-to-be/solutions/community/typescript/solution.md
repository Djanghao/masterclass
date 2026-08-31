# Very simple and clean solution

**Author:** Arkadiy1
**Votes:** 29
**Link:** [https://leetcode.com/problems/to-be-or-not-to-be/solutions/3691597/](https://leetcode.com/problems/to-be-or-not-to-be/solutions/3691597/)

---

```
const expect = (val) => {
    const throwError = (errorStr) => {throw new Error(errorStr)};
    
    return {
        toBe:    (val2) => val2 === val || throwError('Not Equal'),
        notToBe: (val2) => val2 !== val || throwError('Equal'),
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```