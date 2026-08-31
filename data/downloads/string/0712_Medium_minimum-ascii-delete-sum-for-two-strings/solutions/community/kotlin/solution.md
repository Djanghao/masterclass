# Kotlin - Dynamic Programming (2 dimensional)

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/890939/](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/solutions/890939/)

---

Solutions - [github](https://github.com/idiotleon/leetcode-solution-kotlin-leon/tree/main/src/main/kotlin/com/idiotleon/leetcode/lvl3/lc0712)

<h3>By Tag</h3>

#Subsequence - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/tree/main/txt/by_algorithm/dynamic_programming/by_topic/subsequence)
#DP2D - [github](https://github.com/idiotleon/lc-problem-by-tag-leon/blob/main/txt/by_algorithm/dynamic_programming/by_dimensions/2_dimensional.txt)


```
class Solution {
    fun minimumDeleteSum(s1: String, s2: String): Int {
        val len1 = s1.length
        val len2 = s2.length
        
        val dp = Array(len1 + 1){ IntArray(len2 + 1) { 0 }}
        
		// to initialize the `dp` 2d array with `s1`
        for(idx1 in 1..len1){
            dp[idx1][0] = dp[idx1 - 1][0] + s1[idx1 - 1].toInt()
        }
        
		// to initialize the `dp` 2d array with `s2`
        for(idx2 in 1..len2){
            dp[0][idx2] = dp[0][idx2 - 1] + s2[idx2 - 1].toInt()
        }
        
        for (idx1 in 1..len1) {
            for (idx2 in 1..len2) {
                dp[idx1][idx2] = if (s1[idx1 - 1] == s2[idx2 - 1]) {
                    dp[idx1 - 1][idx2 - 1]
                } else {
                    minOf(dp[idx1 - 1][idx2] + s1[idx1 - 1].toInt(), dp[idx1][idx2 - 1] + s2[idx2 - 1].toInt())
                }
            }
        }
        
        return dp[len1][len2]
    }
}
```