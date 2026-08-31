# Kotlin prefix sum

**Author:** james4388
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5086273/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5086273/)

---

```
class Solution {
    fun subsequenceSumOr(nums: IntArray): Long {
        var result = 0L
        var prefixSum = 0L
        
        for (num in nums) {
            prefixSum += num
            result = result or (num.toLong() or prefixSum)
        }
        
        return result
    }
}
```