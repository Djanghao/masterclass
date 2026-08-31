# simple scala solution

**Author:** MaxPsm
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/5627236/](https://leetcode.com/problems/smallest-range-i/solutions/5627236/)

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
```
object Solution {
    def smallestRangeI(nums: Array[Int], k: Int): Int = {
        val res = nums.max - nums.min - 2*k
        if (res < 0) 0
        else res 
    }
}
```