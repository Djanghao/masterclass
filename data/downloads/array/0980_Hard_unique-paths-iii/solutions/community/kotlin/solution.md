# Kotlin | DFS + backtracking

**Author:** SamoylenkoDmitry
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-paths-iii/solutions/2974826/](https://leetcode.com/problems/unique-paths-iii/solutions/2974826/)

---

# Telegram
https://t.me/leetcode_daily_unstoppable/69
# Intuition
There is only `20x20` cells, we can brute-force the solution.
# Approach
We can use DFS, and count how many empty cells passed. To avoid visiting cells twice, modify `grid` cell and then modify it back, like backtracking.
# Complexity
- Time complexity:
$$O(4^N)$$
- Space complexity:
$$O(1)$$
# Code
```
    fun uniquePathsIII(grid: Array<IntArray>): Int {
        var countEmpty = 1
        var startY = 0
        var startX = 0
        for (y in 0..grid.lastIndex) {
            for (x in 0..grid[0].lastIndex) {
                when(grid[y][x]) {
                    0 -> countEmpty++
                    1 -> { startY = y; startX = x}
                    else -> Unit
                }
            }
        }
        fun dfs(y: Int, x: Int): Int {
            if (y < 0 || x < 0 || y >= grid.size || x >= grid[0].size) return 0
            val curr = grid[y][x]
            if (curr == 2) return if (countEmpty == 0) 1 else 0
            if (curr == -1) return 0
            grid[y][x] = -1
            countEmpty--
            val res =  dfs(y-1, x) + dfs(y, x-1) + dfs(y+1, x) + dfs(y, x+1)
            countEmpty++
            grid[y][x] = curr
            return res
        }
        return dfs(startY, startX)
    }

```