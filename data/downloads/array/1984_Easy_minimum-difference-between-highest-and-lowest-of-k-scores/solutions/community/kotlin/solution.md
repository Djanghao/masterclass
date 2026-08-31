# [Kotlin] Simple O(nlogn) Solution

**Author:** catcatcute
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/1432152/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/1432152/)

---

```
class Solution {
    fun minimumDifference(nums: IntArray, k: Int): Int {
        nums.sort()
        var res = nums[k - 1] - nums[0]
        for (i in k..nums.lastIndex) {
            res = minOf(res, nums[i] - nums[i - k + 1])
        }
        return res
    }
}
```