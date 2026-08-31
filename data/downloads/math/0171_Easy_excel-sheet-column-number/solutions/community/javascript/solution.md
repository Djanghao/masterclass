# Intuitive Javascript Solution

**Author:** DawChihLiou
**Votes:** 18
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/52096/](https://leetcode.com/problems/excel-sheet-column-number/solutions/52096/)

---

```
var titleToNumber = function(s) {
    const charCodeBase = 'A'.charCodeAt(0) - 1;
    const n = s.length;
    let number = 0;

    /* 
     * Think of it as base 26. For example,
     * Column number of "AB" = 1 * 26^1 + 2 * 26^0 
     */
    for (let i = 0; i < n; i++)
        number += (s.charCodeAt(i) - charCodeBase) * Math.pow(26, n-i-1);
    
    return number;
};
```