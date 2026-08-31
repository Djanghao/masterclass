# Dp and backtracking

**Author:** chayatorn
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5054506/](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/solutions/5054506/)

---

# Complexity
- Time complexity:O(9xmxn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(mxn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minimumOperations(grid: number[][]): number {
    let m = grid.length;
    let n = grid[0].length;
    let frequency = Array(n).fill(0).map(() => Array(10).fill(0))
    //count frequency
    for (let c = 0; c < n; c++) {
        for (let r = 0; r < m; r++) {
            frequency[c][grid[r][c]] += 1
        }
    }

    const dp = (col, preval): number => {
        if(col == n){return 0}
        if(preval!==-1&&memo[col][preval]!==-1) {return memo[col][preval]}
        let ans = Infinity
        for (let val = 0; val <= 9; val++) {
            if (val !== preval) {
                const operations = m - frequency[col][val]
                ans = Math.min(ans, operations + dp(col + 1,val))
            }
        }
        memo[col][preval] = ans;
        return ans
    }
    let memo =Array(n).fill(0).map(()=>Array(10).fill(-1))
    return dp(0,-1)
};
```