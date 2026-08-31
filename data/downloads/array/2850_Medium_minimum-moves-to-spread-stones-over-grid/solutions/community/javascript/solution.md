# JavaScript - Backtracking - 55ms - O((#zero cells + 1)!)

**Author:** justacoder3
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4028879/](https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/solutions/4028879/)

---

# Intuition
Solved it first using greedy approach. Failed.

# Approach
I had the list of cells with zeros and extras left over from the greedy approach, so this led to a faster recursive backtracking approach than most other solutions.
# Complexity
- Time complexity:
For every zero cell we try getting one from all cells with extra, but as we recursively approach the last zero, there are only a few remaining extras. In other words we have #extra eggs and #zeros baskets and we try all combinations to see which requires the fewest moves. (this is really (#zero cells + 1)! since 'baskets' and 'eggs' have to be equal in number)
O(#zeros * #extras!)
- Space complexity:
O(9) = O(1)

# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function(grid) {
    let zeros = [];
    let extras = [];
    let ans = 0;
    for (let r = 0; r < 3; ++r) {
        for (let c = 0; c < 3; ++c) {
            if (grid[r][c] > 1) {
                extras.push([r,c, grid[r][c]]);
            } else if (grid[r][c] == 0) {
                zeros.push([r,c]);
            }
        }
    }
    function solve(index) {
        if (index >= zeros.length) {
            return 0;
        }
        let min = Number.MAX_SAFE_INTEGER;        
        let [r, c] = zeros[index];
        for (let j = 0; j < extras.length; ++j) {
            if (extras[j][2] > 1) {
                extras[j][2] -= 1;                
                min = Math.min(min, Math.abs(extras[j][0] - r) + Math.abs(extras[j][1] - c) + solve(index + 1));
                extras[j][2] += 1;   
            }
        }
        return min;
    }
    return solve(0);
};
```