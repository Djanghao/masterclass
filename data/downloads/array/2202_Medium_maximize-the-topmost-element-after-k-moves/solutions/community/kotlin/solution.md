# 7 simple lines of code in Kotlin + closing braces

**Author:** dima-s
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3115371/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3115371/)

---

# Intuition
First handle the simple case, then discover more corner cases and incorporate them.

# Complexity
- Time complexity:
$$O(n)$$. Scanning the array to find the max element.

- Space complexity:
$$O(1)$$. We don't store anything.

# Code
```
class Solution {
    fun maximumTop(nums: IntArray, k: Int) =
        when {
            k == 0 -> nums[0]
            nums.size == 1 -> if (k % 2 == 0) nums[0] else -1
            k <= nums.size -> {
                val max = nums.asSequence().take(k - 1).max() ?: -1
                if (k < nums.size) maxOf(nums[k], max) else max
            }
            else -> nums.max()!!
        }

}
```