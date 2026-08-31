# javascript simple solution

**Author:** chinmaymoharir
**Votes:** 39
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/353153/](https://leetcode.com/problems/duplicate-zeros/solutions/353153/)

---

```
var duplicateZeros = function(arr) {
    
    for (var i=0; i<arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0, 0);
            arr.pop();
            i+=1
        }
    }
    
};
```