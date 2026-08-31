# 2 line solution

**Author:** adiljaz17
**Votes:** 4
**Link:** [https://leetcode.com/problems/majority-element/solutions/4987909/](https://leetcode.com/problems/majority-element/solutions/4987909/)

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
  int majorityElement(List<int> nums) {
      nums.sort();
      return nums [nums.length~/2]; 
  }
}
```