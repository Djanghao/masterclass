# simple solution

**Author:** ITPavel
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/4859280/](https://leetcode.com/problems/n-repeated-element-in-size-2n-array/solutions/4859280/)

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
class Solution {
    fun repeatedNTimes(nums: IntArray): Int {
        for (num in nums) {
        if (nums.indexOf(num) != nums.lastIndexOf(num)) {return num}
        }
        return -1
    } 
}
```