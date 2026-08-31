# Scala solution beats 100% using recursion

**Author:** vipuljaveri
**Votes:** 1
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/657138/](https://leetcode.com/problems/excel-sheet-column-title/solutions/657138/)

---

```
if(n != 0) return convertToTitle((n-1)/26) + ((n-1)%26+65).toChar
return ""
```
