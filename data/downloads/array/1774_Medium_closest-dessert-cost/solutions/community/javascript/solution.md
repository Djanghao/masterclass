# Javascript: dfs with & without memo

**Author:** jialihan
**Votes:** 1
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/2245228/](https://leetcode.com/problems/closest-dessert-cost/solutions/2245228/)

---

```
var closestCost = function(baseCosts, toppingCosts, target) {
    let res = Infinity;
    
    function dfs(tIdx, cur) {
        if(Math.abs(target-cur) < Math.abs(target-res) ||(Math.abs(target-cur) === Math.abs(target-res) && cur < target)) {
            res = cur;
        }
        
        if(cur > target || tIdx >= toppingCosts.length) {
            return;
        }
        
        dfs(tIdx + 1, cur);
        dfs(tIdx + 1, cur + toppingCosts[tIdx]);
        dfs(tIdx + 1, cur + toppingCosts[tIdx] * 2); 
    }
    
    for(const base of baseCosts) {
        dfs(0, base);
    }
   return res;  
};
```

Similar idea to use **memo**, memo the best cost at current `index with current cost`:
```
var closestCost = function(baseCosts, toppingCosts, target) {
    let res = Infinity;
    let memo;
    function dfs(tIdx, cur) {
        const key = tIdx+':'+ cur;
        if(memo.has(key)) {
            return memo.get(key);
        }
        
        if(cur > target || tIdx >= toppingCosts.length) {
            return cur;
        }
        
        // find the closest cost at current position
        let cost1 = dfs(tIdx + 1, cur);
        let cost2 = dfs(tIdx + 1, cur + toppingCosts[tIdx]);
        let cost3 = dfs(tIdx + 1, cur + toppingCosts[tIdx] * 2); 
        const arr = [cost1, cost2, cost3].sort((a,b)=>{
            if( Math.abs(target-a) === Math.abs(target-b)) {
                if(a<target) {
                    return -1;
                }
                return 1;
            }
            return Math.abs(target-a) - Math.abs(target-b);
        });
        
        memo.set(key, arr[0]);
        return arr[0];
    }
    
    for(const base of baseCosts) {
        memo = new Map(); // key = index & cost
        const cur = dfs(0, base);
        if(Math.abs(target-cur) < Math.abs(target-res) ||(Math.abs(target-cur) === Math.abs(target-res) && cur < target)) {
            res = cur;
        }
    }
   return res;  
};
```