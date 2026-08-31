# Easy Solution in Dart

**Author:** Sreenath_s777
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4740553/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/4740553/)

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
  int findKOr(List<int> nums, int k) {
      int result = 0;
  int n = nums.length;
  for (int i = 0; i < 32; i++) { 
    int count = 0;
    for (int num in nums) {
      if ((num & (1 << i)) != 0) {
        count++;
      }
    }
    if (count >= k) {
      result |= (1 << i);
    }
  }
  return result;
  }
}
```