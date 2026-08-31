# kotlin solution beats 86%  // compare 3 of array elements

**Author:** mahmoud5airy2000
**Votes:** 0
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/4146371/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/4146371/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun findNonMinOrMax(nums: IntArray): Int {
    if (nums.size <= 2) return -1
    
    val a = min (nums[0], nums[1])
    val b = max (nums[0] , nums[1])
    val c = nums[2]
    if (c < b && c > a) return c
    if (c < a ) return a
    if (c > b ) return b 
    return -1
}
}
```