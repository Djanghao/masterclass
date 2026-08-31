# JavaScript Solution - Backtracking Approach

**Author:** Deadication
**Votes:** 3
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/1462279/](https://leetcode.com/problems/factor-combinations/solutions/1462279/)

---

```
var getFactors = function(n) {
    const res = [];
   
    if (n === 1) return res;
    
    backtrack(Math.floor(n / 2), n, []);
    
    return res;
    
    function backtrack(start, num, arr) {
        if (num === 1) {
            res.push([...arr]);
            return;
        }
        
        for (let i = start; i >= 2; i--) {
            const rem = num % i;
            
            if (rem === 0) {
                arr.push(i);
                backtrack(i, num / i, arr);
                arr.pop();
            }
        }
    }
};
```