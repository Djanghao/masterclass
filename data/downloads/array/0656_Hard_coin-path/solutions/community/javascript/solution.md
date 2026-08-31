# JS DFS 100%

**Author:** khai0215
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-path/solutions/2551393/](https://leetcode.com/problems/coin-path/solutions/2551393/)

---

Runtime: 94 ms, faster than 100.00% of JavaScript online submissions for Coin Path.
Memory Usage: 49 MB, less than 75.00% of JavaScript online submissions for Coin Path.
```
var cheapestJump = function(coins, maxJump) {
    
    const memo = new Map(); 
    const dfs = (index=0) => {
        if (index >= coins.length || coins[index] === -1  ) return [[], Infinity];
        if (index === coins.length-1) {
            return [[index+1], coins[index]];
        }
        if (memo.has(index)) return memo.get(index);
        
        let best=[];
        let min = Infinity;
        for (let i=1; i<=maxJump;i++) {
            let [path, cost] = dfs(index+i);
            if (min > cost) {
                min = cost;
                best = path;
            }
        }
        let res;
        if (min === Infinity) {
            res = [[], Infinity];
        }
        else res = [[index+1, ...best], min+coins[index]];
        memo.set(index, res);
        return res;
    }
    return dfs()[0];
};