# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4194081/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4194081/)

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
  int minLengthAfterRemovals(List<int> nums) {
      final n = nums.length;
      final mid = n ~/ 2; 
      var ans = n; 
      var i = 0;
      var j = (n + 1) ~/ 2;
      while (i < mid && j < n) {
          if (nums[i] < nums[j]) {
              ans -= 2;
          }
          i += 1;
          j += 1;
      }

      return ans;
  }
}
```