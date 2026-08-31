# Binary Search Faster than 75%

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/5657196/](https://leetcode.com/problems/median-of-a-row-wise-sorted-matrix/solutions/5657196/)

---

# Intuition
Use double binary search.
# Approach
1. Outer binary search: search between 1 and Maxval.
2. Inner binary search: search in each row, in order to test whether for a certain val (the mid variable of outer binary search), there are at least (R * C + 1) / 2 elements that <= the certain val.
# Complexity
- Time complexity:
O(R\u2217C\u2217Log(Maxval))
- Space complexity:
O(1)
# Code
```
/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixMedian = function(grid) {
    const R = grid.length, C = grid[0].length
    const k = (1 + R * C) / 2
    
    const CMinus1 = C - 1
    let maxVal = 0
    for (let i = 0; i < R; i++)
        maxVal = Math.max(maxVal, grid[i][CMinus1])



    function canDo(val) {
        let total = 0
        for (const row of grid) {
            let low = 0, high = CMinus1
            // find earliest high where
            // row[high] > val
            if (row[high] <= val) {
                total += C
                if (total >= k) return true
                continue
            }
            
            while (low < high) {
                const mid = (low + high) >> 1
                if (row[mid] > val)    high = mid
                else    low = mid + 1
            }

            total += high
            if (total >= k) return true
        }

        return false
    }


    let low = 1, high = maxVal
    // find earliest high where
    // canDo(high) -> true
    while (low < high) {
        const mid = (low + high) >> 1
        if (canDo(mid)) high = mid
        else    low = mid + 1
    }


    return high
};
```