# [Javascript] DFS recursive 55ms

**Author:** _savely
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4522582/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4522582/)

---

```
var minimumOperationsToMakeEqual = function(x, y) {
    
    if(y >= x) return y - x;
    
    const arr = [x - y], mod11 = x % 11, mod5 = x % 5;

    let ops = Math.min(mod11 + minimumOperationsToMakeEqual((x - mod11) / 11, y), 11 - mod11 + minimumOperationsToMakeEqual((x + 11 - mod11) / 11, y));
    arr.push(ops + 1);

        
    ops = Math.min(mod5 + minimumOperationsToMakeEqual((x - mod5) / 5, y), 5 - mod5 + minimumOperationsToMakeEqual((x + 5 - mod5) / 5, y));
    arr.push(ops + 1);
    
    return Math.min(...arr) ;
};
```