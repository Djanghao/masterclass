# One while loop simple sliding window solution

**Author:** mabd-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5271991/](https://leetcode.com/problems/longest-even-odd-subarray-with-threshold/solutions/5271991/)

---

<!-- # Intuition
Describe your first thoughts on how to solve this problem. -->


# Approach
<!-- Describe your approach to solving the problem. -->
Optimized Sliding Window

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun longestAlternatingSubarray(nums: IntArray, threshold: Int): Int {
        var i = 0
        var j = 0
        var max = 0

        val reset = {
            max = max(max, j - i)
            j = ++i
        }

        while (i < nums.size && j < nums.size) {
            if (nums[i] % 2 != 0 || nums[j] > threshold) { reset(); continue }
            if (j - i == 0) { j++; continue }

            if (nums[j-1] % 2 != nums[j] % 2) j++
            else reset()

        }
        max = max(max, j - i)
        return max
    }
}
```