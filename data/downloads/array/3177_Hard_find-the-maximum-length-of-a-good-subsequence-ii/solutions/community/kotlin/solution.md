# :: Kotlin :: Dynamic Programming

**Author:** znxkznxk1030
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5435918/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5435918/)

---

# Code
```
class Solution {
    fun maximumLength(nums: IntArray, k: Int): Int {
        val n = nums.size

        val dp = Array(n + 1){ IntArray( k + 1 )}
        val seen = HashMap<Int, Int>()
        val longest = IntArray(k + 1)


        for (i in 0 until n) {
            dp[i][0] = 1
            val curr = nums[i]

            if (seen.containsKey(curr)) {
                for (j in 0 .. k) {
                    dp[i][j] = maxOf(dp[i][j], dp[seen[curr]!!][j] + 1)
                }
            }

            seen[curr] = i

            for (j in 1 .. k) {
                dp[i][j] = maxOf(dp[i][j], longest[j - 1] + 1)
            }

            for (j in 0 .. k) {
                longest[j] = maxOf(longest[j], dp[i][j])
            }
        }
        

        var result = 1
        for (j in 0 .. k) {
            result = maxOf(longest[j], result)
        }
        
        return result
    }
}
```