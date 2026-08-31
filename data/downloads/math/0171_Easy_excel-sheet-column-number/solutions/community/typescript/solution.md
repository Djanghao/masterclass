# Simple Typescript Solution

**Author:** jamiexx
**Votes:** 1
**Link:** [https://leetcode.com/problems/excel-sheet-column-number/solutions/1751145/](https://leetcode.com/problems/excel-sheet-column-number/solutions/1751145/)

---

```
function titleToNumber(columnTitle: string): number {
    let number = 0;
    for(let i = columnTitle.length - 1; i >= 0; i--) {
        const letterVal = columnTitle.charCodeAt(i) - 64;
        const pos = Math.pow(26, columnTitle.length - i - 1);
        number += (letterVal * pos);
    }
    return number;
};
```