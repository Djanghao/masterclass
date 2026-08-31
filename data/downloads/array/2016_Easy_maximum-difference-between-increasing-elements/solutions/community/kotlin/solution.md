# Kotlin - minimalistic O(n)

**Author:** tucux
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1554777/](https://leetcode.com/problems/maximum-difference-between-increasing-elements/solutions/1554777/)

---

```
class Solution {
    fun maximumDifference(nums: IntArray): Int {
        var min = nums[0]
        var res = -1
        for (n in nums) {
            if (min < n) {
                res = maxOf(res, n - min)
            } else {
                min = n
            }
        }
        return res
    }
}
```