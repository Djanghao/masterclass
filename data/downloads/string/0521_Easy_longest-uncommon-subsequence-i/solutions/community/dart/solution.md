# Easier way with Max Function in dart

**Author:** ali_xr
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/6061127/](https://leetcode.com/problems/longest-uncommon-subsequence-i/solutions/6061127/)

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
  int findLUSlength(String a, String b) {
        return  a == b ? -1 : max(a.length,b.length);
  }
}
```