# Beats 100%,

**Author:** shreya_radha_14
**Votes:** 0
**Link:** [https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5726609/](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/solutions/5726609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(2^N  \u2217 N)




- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
      const n = grid.length;
        const vals = new Map();
        
        // Collect the values and their row indices
        for (let i = 0; i < n; i++) {
            for (let h of grid[i]) {
                if (!vals.has(h)) {
                    vals.set(h, []);
                }
                vals.get(h).push(i);
            }
        }
        
        // Convert the Map to a sorted array
        const valsArray = Array.from(vals.entries()).sort((a, b) => b[0] - a[0]);
        
        // Create a memoization cache
        const memo = new Map();
        
        // Define the recursive function with memoization
        const maxval = (i, mask) => {
            if (i >= valsArray.length) {
                return 0;
            }
            const key = `${i}-${mask}`;
            if (memo.has(key)) {
                return memo.get(key);
            }
            
            // Option 1: Skip current value
            let res = maxval(i + 1, mask);
            
            // Option 2: Include current value if the row is not used
            for (let j of valsArray[i][1]) {
                if (!(mask & (1 << j))) {
                    res = Math.max(res, valsArray[i][0] + maxval(i + 1, mask | (1 << j)));
                }
            }
            
            memo.set(key, res);
            return res;
        };
        
        return maxval(0, 0);
};
```