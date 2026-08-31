# TypeScript - no hashmap solution

**Author:** gholtzap
**Votes:** 4
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/3248910/](https://leetcode.com/problems/excel-sheet-column-title/solutions/3248910/)

---

# Code
```
function convertToTitle(columnNumber:number):string {

    let str:string = '';
    let num:number;

    while (columnNumber > 0) {
        num =(columnNumber-1)%26;
        str =String.fromCharCode(num+65)+str;
        columnNumber =Math.floor((columnNumber - num)/26);
    }
    return str;
};

```