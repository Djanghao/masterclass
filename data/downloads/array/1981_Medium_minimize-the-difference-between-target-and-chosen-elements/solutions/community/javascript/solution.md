# JavaScript Solution - Top Down DP Approach

**Author:** Deadication
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/1981740/](https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements/solutions/1981740/)

---

```
var minimizeTheDifference = function(mat, target) {
    const MAX = Number.MAX_SAFE_INTEGER;
    
    const m = mat.length;
    const n = mat[0].length;
    
    const memo = [];
    
    for (let i = 0; i < m; ++i) {
        memo[i] = new Array(4901).fill(MAX);
    }
    
    return topDown(0, 0);
    
    function topDown(row, sum) {
        if (row === m) return Math.abs(target - sum);
        if (memo[row][sum] != MAX) return memo[row][sum];
        
        let min = MAX;
        
        mat[row].sort((a, b) => a - b); 
        
        const set = new Set(mat[row]);
       
        for (const num of set) {
           const res = topDown(row + 1, sum + num);
            
           if (res > min) break;
           min = res;
        }
        
        memo[row][sum] = min;
        
        return min;
    }
};
```