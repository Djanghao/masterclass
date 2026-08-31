# Simple solution

**Author:** sugithk
**Votes:** 0
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5040466/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-i/solutions/5040466/)

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
  int sumCounts(List<int> nums) {
  int sum = 0;
  
  for (int i = 0; i < nums.length; i++) {
    Set<int> s = {};
    
    for (int j = i; j < nums.length; j++) {
      s.add(nums[j]);
      int count = s.length;
      sum += count * count;
    }
  }
  
  return sum;
  }
}
```