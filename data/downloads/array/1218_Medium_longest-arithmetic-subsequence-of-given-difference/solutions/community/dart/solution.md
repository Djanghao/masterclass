# Simple solution

**Author:** Nomoke
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3766262/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3766262/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
  int longestSubsequence(List<int> arr, int dif) {
      final table = <int, int>{};
      int count = 0;

      for(int i = 0; i < arr.length; ++i) {
          final n = arr[i];

          if(table[n - dif] == null) table[n] = 1;
          else table[n] = table[n - dif]! + 1;

          count = max(count, table[n]!);
      }

      return count;
  }
}
```