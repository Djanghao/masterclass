# DP + memo

**Author:** aymaletdinov2012
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/5424176/](https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/solutions/5424176/)

---

# Intuition
Not ideal from the perfomance side but easy 

# Complexity
- Time complexity:
O(n^2)

- Space complexity:
O(n^2)

# Code
```
class Solution {

    private var max = -1
    private val memo = HashSet<String>()

    fun maxSubarrayLength(nums: IntArray): Int {
        nums.dp(0, nums.lastIndex)
        return max + 1
    }

    private fun IntArray.dp(start: Int, end: Int) {
        if (end - start <= max) return 
        if (!memo.add("$start.$end")) return 

        if (this[start] > this[end]) max = maxOf(end - start, max)
        dp(start + 1, end)
        dp(start, end - 1)
    }
}
```