# counting bits..

**Author:** sana_123
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-bits/solutions/6071999/](https://leetcode.com/problems/counting-bits/solutions/6071999/)

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
```dart []
class Solution {
  List<int> countBits(int n) {
   List<int> result = List.filled(n + 1, 0);

  for (int i = 1; i <= n; i++) {
    result[i] = result[i >> 1] + (i & 1);
  }

  return result;
} 
  }

```