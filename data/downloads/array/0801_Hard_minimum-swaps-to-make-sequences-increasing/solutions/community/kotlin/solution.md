# 100% Beats || with & without approach || DP || memoized

**Author:** twinwal
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/6117548/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/6117548/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
import kotlin.math.min

class Solution {
    fun minSwap(nums1: IntArray, nums2: IntArray): Int {
        val map = HashMap<String, Int>()
        return enumerate(nums1, nums2, 0, map)
    }

    fun enumerate(nums1: IntArray, nums2: IntArray, index: Int, dp: HashMap<String, Int>): Int {
        if (index == nums1.size) return 0

        val minValue1 = if (index - 1 >= 0) nums1[index - 1] else -1
        val minValue2 = if (index - 1 >= 0) nums2[index - 1] else -1
        
        val key = "${index},${minValue1},${minValue2}"
        if (dp.contains(key)) {
            return dp[key]!!
        }
        
        swap(nums1, nums2, index)
        var swap = Int.MAX_VALUE

        if (nums1[index] > minValue1 && nums2[index] > minValue2) {
            swap = 1 + enumerate(nums1, nums2, index + 1, dp)
        }

        swap(nums1, nums2, index)
        var withoutSwap = Int.MAX_VALUE
        if (nums1[index] > minValue1 && nums2[index] > minValue2) {
            withoutSwap = enumerate(nums1, nums2, index + 1, dp)
        }
        dp[key] = min(swap, withoutSwap)
        return dp[key]!!
    }

    fun swap(nums1: IntArray, nums2: IntArray, a: Int) {
        val temp = nums1[a]
        nums1[a] = nums2[a]
        nums2[a] = temp
    }
}
```