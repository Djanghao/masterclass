# Kotlin simple solution

**Author:** imabhishekkumar_
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/5737729/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/5737729/)

---

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun maxSum(grid: Array<IntArray>): Int {
        val (m,n) = Pair(grid.size, grid[0].size)
        var maxSum = 0
        for(i in 0..m-3){
            for(j in 0..n-3){
               val sum  = grid[i][j] + grid[i][j+1]+ grid[i][j+2] + grid[i+1][j+1] + grid[i+2][j] + grid[i+2][j+1] + grid[i+2][j+2]      
                maxSum = max(maxSum, sum)
            }
        }
        return maxSum
    }
}
```