# Prefix sum Kotlin solution

**Author:** DmitryNekrasov
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5583771/](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/solutions/5583771/)

---

# Code
```
class Solution {
    fun rangeSum(nums: IntArray, n: Int, left: Int, right: Int): Int {
        val prefix = IntArray(n + 1)
        for (i in 1..n) {
            prefix[i] = prefix[i - 1] + nums[i - 1]
        }
        val sums = mutableListOf<Int>()
        for (windowSize in 1..n) {
            for (i in windowSize..n) {
                sums += prefix[i] - prefix[i - windowSize]
            }
        }
        sums.sort()
        var ans = 0
        for (i in (left - 1)..<right) {
            ans = (ans + sums[i]) % MOD
        }
        return ans
    }

    companion object {
        const val MOD = 1_000_000_007
    }
}
```