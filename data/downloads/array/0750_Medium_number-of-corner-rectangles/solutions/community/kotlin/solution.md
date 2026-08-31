# Kotlin | Dynamic Programming and Math

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solutions/5408572/](https://leetcode.com/problems/number-of-corner-rectangles/solutions/5408572/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
There is a axis aligned corner rectangle, when two different points in the same row have a matching point in the same column. The amount of different rectangles that can be build, can be calculated using the gaussian sum.

# Approach
<!-- Describe your approach to solving the problem. -->
Iterate through the matrix and count for each row the distances between two 1s. At the end add the amount with the gaussian sum to the solution.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 $$O(m^2*n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
 $$O(n)$$

# Code
```
class Solution {
    fun countCornerRectangles(grid: Array<IntArray>): Int {
        val m:Int = grid.size
        val n:Int = grid[0].size

        var sol:Int = 0

        for(i:Int in 1..m-1){
            val dp:IntArray = IntArray(m){0}

            for(j:Int in 0..n-1){
                if(grid[i][j] == 0) continue

                for(k:Int in 0..i-1){
                    if(grid[k][j] == 1) dp[i-k] += 1
                }
            }

            for(p:Int in dp) sol += p*(p-1) / 2
        }

        return sol
    }
}
```