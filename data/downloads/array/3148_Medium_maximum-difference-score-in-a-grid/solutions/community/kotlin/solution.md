# Kotlin O(nm) time O(m) Space

**Author:** bylazy
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/6112288/](https://leetcode.com/problems/maximum-difference-score-in-a-grid/solutions/6112288/)

---

# Intuition
The maximum score for each cell is the difference between the cell's value and the minimum of the part of the matrix that is above and to the left of that cell.

# Approach
In the array `m` we will store and maintain the minimum of the matrix up to and including the corresponding column.

# Complexity
- Time complexity:
O(nm)

- Space complexity:
O(m)

# Code
```kotlin []
class Solution {
    fun maxScore(grid: List<List<Int>>): Int {
        //m[j] \u2014 minimum value in the first j+1 columns
        var m = IntArray(grid[0].size){Int.MAX_VALUE} 
        var r = Int.MIN_VALUE //r for result
        for (i in 0..grid.lastIndex)
            for (j in 0..grid[0].lastIndex)
                //update max, the third argument is needed because the current minimum has not yet been updated
                r = maxOf(r, grid[i][j] - m[j], grid[i][j] - if (j == 0) Int.MIN_VALUE else m[j-1])
                    .also{ m[j] = minOf(m[j], if (j == 0) Int.MAX_VALUE else m[j-1], grid[i][j]) } //update min
        return r
    }
}
```