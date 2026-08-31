# Clean Solution

**Author:** true-detective
**Votes:** 2
**Link:** [https://leetcode.com/problems/undefined-to-null/solutions/3776664/](https://leetcode.com/problems/undefined-to-null/solutions/3776664/)

---


# Code
```
var undefinedToNull = function(obj) {
    if (obj === null || obj === undefined) return null;
    if (typeof obj !== 'object') return obj;
    if (Array.isArray(obj)) return obj.map(undefinedToNull);
    
    let res = {};
    for (let key in obj) {
        res[key] = undefinedToNull(obj[key]);
    }
    return res
};
```