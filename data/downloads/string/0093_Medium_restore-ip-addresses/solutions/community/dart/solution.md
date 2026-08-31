# Dart Solution

**Author:** Friendlygecko
**Votes:** 0
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/4068738/](https://leetcode.com/problems/restore-ip-addresses/solutions/4068738/)

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
  List<String> restoreIpAddresses(String s) {
      final l = s.length;
      final List<String> ans = [];
      for (int i = 1; i < l; i++) {
          for (int j = i + 1; j < l; j++) {
              for (int k = j + 1; k < l; k++) {
                  final a = s.substring(0, i);
                  final b = s.substring(i, j);
                  final c = s.substring(j, k);
                  final d = s.substring(k);
                  if (validSequence(a) && validSequence(b) && validSequence(c) && validSequence(d)) {
                      ans.add('$a.$b.$c.$d');
                  }
              }
          }
      }

      return ans;
  }

  bool validSequence(String cand) => (cand == int.parse(cand).toString() && int.parse(cand) <= 255) ? true : false;
}
```