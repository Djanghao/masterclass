# Minimize Lenght of Array Using Operations

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/6128025/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/6128025/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Idea is that smaller numbers can eliminate bigger numbers.

Find the smallest number min, and if for each e in nums, e % min > 0, then there will be only one final "winner" left by elimination and thats 1.

Else the best we can do is number of min + 1 / 2 as the smallest array.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    fun minimumArrayLength(nums: IntArray): Int {
        val min = nums.min()!!

        for (n in nums)
            if (n % min > 0) return 1
        
        return (nums.count { it == min } + 1) / 2
    }
}
```