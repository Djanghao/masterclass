# Top 1% Solution

**Author:** darian-catalin-cucer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4256754/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4256754/)

---


```
class Solution {
    fun minimumSum(nums: IntArray): Int {
        val n = nums.size
        val minLeft = IntArray(n)
        val minRight = IntArray(n)
        
        for (i in 0 until n) {
            minLeft[i] = if (i == 0) nums[i] else minLeft[i - 1].coerceAtMost(nums[i - 1])
        }
        
        for (i in n - 1 downTo 0) {
            minRight[i] = if (i == n - 1) nums[i] else minRight[i + 1].coerceAtMost(nums[i + 1])
        }
        
        var sum = Int.MAX_VALUE
        for (i in 1 until n - 1) {
            if (nums[i] > minLeft[i] && nums[i] > minRight[i]) {
                sum = minOf(sum, nums[i] + minLeft[i] + minRight[i])
            }
        }
        
        return if (sum == Int.MAX_VALUE) -1 else sum
    }
}

```