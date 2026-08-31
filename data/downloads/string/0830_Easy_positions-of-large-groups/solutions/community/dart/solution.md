# Simple And Easy To Understand

**Author:** akshaynathks
**Votes:** 0
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/5224798/](https://leetcode.com/problems/positions-of-large-groups/solutions/5224798/)

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
  List<List<int>> largeGroupPositions(String s) {
    List<List<int>> result = [];
    int start = 0;
    int end = 0;
    
    for (int i = 0; i < s.length; i++) {
      if (i == s.length - 1 || s[i] != s[i + 1]) {
        end = i;
        if (end - start + 1 >= 3) {
          result.add([start, end]);
        }
        start = i + 1;
      }
    }
    
    return result;
  }
}
```