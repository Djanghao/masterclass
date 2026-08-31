# [JavaScript] 10 lines solution (85%,88%)

**Author:** 0533806
**Votes:** 4
**Link:** [https://leetcode.com/problems/grid-game/solutions/1492424/](https://leetcode.com/problems/grid-game/solutions/1492424/)

---

Runtime: 112 ms, faster than 85.19% of JavaScript online submissions for Grid Game.
Memory Usage: 51 MB, less than 88.89% of JavaScript online submissions for Grid Game.
```
var gridGame = function(grid) {
    let one = grid[0].reduce((a,b)=>a+b) - grid[0][0];
    let two = 0;
    let res = one;
    for(let i = 1; i < grid[0].length; i++){
        one-=grid[0][i];
        two+=grid[1][i-1];
        res = Math.min(res, Math.max(one,two));
    }
    return res;
};
```