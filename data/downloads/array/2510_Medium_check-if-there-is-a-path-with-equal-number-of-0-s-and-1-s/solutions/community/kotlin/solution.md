# Kotlin DFS + memo

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/5392333/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/5392333/)

---


# Code
```kotlin
class Solution {

    val memo = HashMap<String, Boolean>()

    fun isThereAPath(grid: Array<IntArray>) = grid.dfs(0, 0, 0)    

    private fun Array<IntArray>.dfs(y: Int, x: Int, count: Int): Boolean {
        if (y == this.size || x == this[0].size) return false
        if (memo["$y.$x.$count"] != null) return memo["$y.$x.$count"]!!

        val newCount = if (this[y][x] == 0) count + 1 else count - 1
        if (y == this.lastIndex && x == this[0].lastIndex) return newCount == 0
    
        memo["$y.$x.$count"] = dfs(y+1, x, newCount) || dfs(y, x + 1, newCount)
        return memo["$y.$x.$count"]!!
    }
}
```