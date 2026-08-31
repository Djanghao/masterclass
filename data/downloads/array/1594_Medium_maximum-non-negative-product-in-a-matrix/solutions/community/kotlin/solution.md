# [Java / Go / Kotlin] DP solution, beats 100% speed.

**Author:** chen3210g
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/3022580/](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/solutions/3022580/)

---

# Intuition\r
For using DP in this case, we need to pay attention to the negative integer case especially. For example, -5 (last cell) * -5 (current cell) is bigger than 4 (last cell) * -5 (current cell). So we need to store both the minimum and the maximum, this makes sure dp[i][j] can always get the biggest number in each update time.\r
\r
# Approach\r
Constructing a Pair class with two variables, max, and min. Next, build an array containing `Pair` as the elements. Updating the min and the max by iterating the `grid` array.\r
\r
# Complexity\r
- Time complexity: $$O(n)$$\r
\r
- Space complexity: $$O(n)$$\r
\r
# Code\r
\r
## Java: \r
```\r
class Solution {\r
    class Pair {\r
        long max;\r
        long min;\r
\r
        public Pair(long max, long min) {\r
            this.max = max;\r
            this.min = min;\r
        }\r
    }\r
    \r
    public int maxProductPath(int[][] grid) {\r
        int n = grid.length, m = grid[0].length;\r
        int mod = (int)(1e9+7);\r
        Pair[][] dp = new Pair[n][m];\r
        dp[0][0] = new Pair((long) grid[0][0], (long) grid[0][0]);\r
        \r
        \r
        for (int i = 1; i < m; i++) {\r
            dp[0][i] = new Pair(dp[0][i - 1].max * grid[0][i], dp[0][i - 1].min * grid[0][i]);\r
        }\r
\r
        for (int i = 1; i < n; i++) {\r
            dp[i][0] = new Pair(dp[i - 1][0].max * grid[i][0], dp[i - 1][0].min * grid[i][0]);\r
        }\r
\r
        for (int i = 1; i < n; i++) {\r
            for (int j = 1; j < m; j++) {\r
                long possible1 = Math.min(dp[i - 1][j].min, dp[i][j - 1].min) * grid[i][j];\r
                long possible2 = Math.max(dp[i][j - 1].max, dp[i - 1][j].max) * grid[i][j];\r
                dp[i][j] = new Pair(Math.max(possible1, possible2), Math.min(possible1, possible2));\r
            }\r
        }\r
        return dp[n - 1][m - 1].max < 0 ? -1 : (int) (dp[n - 1][m - 1].max % mod);        \r
    }\r
}\r
```\r
\r
## Go:\r
```\r
type pair struct {\r
	max int64\r
	min int64\r
}\r
\r
func getInstance(max, min int64) pair {\r
	p := pair{}\r
	p.max = max\r
	p.min = min\r
	return p\r
}\r
\r
func max(a, b int64) int64 {\r
	if a > b {\r
		return a\r
	}\r
	return b\r
}\r
\r
func min(a, b int64) int64 {\r
	if a < b {\r
		return a\r
	}\r
	return b\r
}\r
\r
func maxProductPath(grid [][]int) int {\r
    var n, m int = len(grid), len(grid[0])\r
	var dp = make([][]pair, n)\r
	for row := range dp {\r
		dp[row] = make([]pair, m)\r
	}\r
\r
	var mod int64 = int64(1e9+7)\r
	dp[0][0] = getInstance(int64(grid[0][0]), int64(grid[0][0]))\r
\r
	for j := 1; j < m; j++ {\r
		dp[0][j] = getInstance(dp[0][j-1].max * int64(grid[0][j]), dp[0][j-1].min * int64(grid[0][j]))\r
	}\r
\r
	for i := 1; i < n; i++ {\r
		dp[i][0] = getInstance(dp[i-1][0].max * int64(grid[i][0]), dp[i-1][0].min * int64(grid[i][0]))\r
	}\r
\r
	for i := 1; i < n; i++ {\r
		for j := 1; j < m; j++ {\r
			var possible1 int64 = min(dp[i-1][j].min, dp[i][j-1].min) * int64(grid[i][j])\r
			var possible2 int64 = max(dp[i-1][j].max, dp[i][j-1].max) * int64(grid[i][j])\r
			dp[i][j] = getInstance(max(possible1, possible2), min(possible1, possible2))\r
		}\r
	}\r
\r
	if dp[n-1][m-1].max < 0 {\r
		return -1\r
	} else {\r
		return int(dp[n-1][m-1].max % mod)\r
	}\r
}\r
```\r
\r
\r
## Kotlin:\r
```\r
class Solution {\r
    class Pair {\r
        val max: Long\r
        val min: Long\r
        constructor(max: Long, min: Long) {\r
            this.max = max\r
            this.min = min\r
        }\r
    }\r
\r
    fun maxProductPath(grid: Array<IntArray>): Int {\r
        val mod: Long = (1e9+7).toLong()\r
        val n: Int = grid.size; val m: Int = grid[0].size\r
        var dp: Array<Array<Pair>> = Array(n){Array(m){Pair(grid[0][0].toLong(),grid[0][0].toLong())}}\r
\r
        for(j in 1 until m) {\r
            dp[0][j] = Pair(dp[0][j-1].max*grid[0][j].toLong(), dp[0][j-1].min*grid[0][j])\r
        }\r
\r
        for(i in 1 until n) {\r
            dp[i][0] = Pair(dp[i-1][0].max*grid[i][0].toLong(), dp[i-1][0].min*grid[i][0].toLong())\r
        }\r
\r
        for(i in 1 until n) {\r
            for(j in 1 until m) {\r
                val possible1: Long = Math.min(dp[i-1][j].min, dp[i][j-1].min) * grid[i][j].toLong()\r
                val possible2: Long = Math.max(dp[i-1][j].max, dp[i][j-1].max) * grid[i][j].toLong()\r
                dp[i][j] = Pair(Math.max(possible1, possible2), Math.min(possible1, possible2))\r
            }\r
        }\r
\r
        return if(dp[n-1][m-1].max < 0) -1 else (dp[n-1][m-1].max % mod).toInt()      \r
    }\r
}\r
```