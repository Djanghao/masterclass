# Why is this sooo easy | recursive top down | DP

**Author:** sanskarpatidar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/5863720/](https://leetcode.com/problems/minimum-cost-to-cut-a-stick/solutions/5863720/)

---

# Intuition
BASED ON PARTITION DP TOPIC

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    private fun getMinCost(i: Int, j: Int, cutsi: Int, cutsj: Int, cuts: IntArray, dp: MutableList<MutableList<Int>>): Int{
        if (cutsi > cutsj) return 0
        if(dp[cutsi][cutsj] != -1)return dp[cutsi][cutsj]

        //1e9 is considered as double
        var mini = 1e9.toInt()
        for(k in cutsi..cutsj){
            var cost = j-i + getMinCost(i, cuts[k], cutsi, k-1, cuts, dp) + getMinCost(cuts[k], j, k+1, cutsj, cuts, dp)
            mini = min(mini, cost)
        }

        dp[cutsi][cutsj] = mini
        return dp[cutsi][cutsj] 
    }
    fun minCost(n: Int, cuts: IntArray): Int {
        cuts.sort()
        val cutsSize = cuts.size
        val dp = MutableList(cutsSize) { MutableList(cutsSize) {-1} }
        return getMinCost(0, n, 0, cutsSize-1, cuts, dp)
    }
}
```