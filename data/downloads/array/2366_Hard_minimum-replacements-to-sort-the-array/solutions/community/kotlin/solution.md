# Kotlin Solution || Easy

**Author:** pramodjoshi_22
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2388145/](https://leetcode.com/problems/minimum-replacements-to-sort-the-array/solutions/2388145/)

---

```
class Solution {
    fun minimumReplacement(nums: IntArray): Long {
        var cur = nums.last()
        var ans = 0L
        for (i in nums.indices.reversed()) {
            if (nums[i] <= cur) {
                cur = nums[i]
            } else if (nums[i] % cur == 0) {
                ans += (nums[i] / cur) - 1
            } else {
                ans += (nums[i] / cur)
                cur--
                while (nums[i] % cur > nums[i] / cur) {
                    cur--
                }
            }

        }
        return ans
    }
}