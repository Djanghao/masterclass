# Dart DFS Solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3739525/](https://leetcode.com/problems/partition-string-into-minimum-beautiful-substrings/solutions/3739525/)

---

# Code
```
import 'dart:math';

const MAX = 1 << 30;
class Solution {
  int minimumBeautifulSubstrings(String s) {

    final pow5 = Set<int>();
    for (int i = 0, tmp = 1; i < 20; i++) {
      pow5.add(tmp);
      tmp *= 5;
    }

    final memo = List.filled(s.length, -1);

    int dfs(int idx) {
      if (idx == s.length) return 0;
      if (s[idx] == '0') return MAX;
      if (memo[idx] != -1) return memo[idx];

      final org_idx = idx;
      int res = MAX, value = 0;      
      while (idx < s.length) {
        value = (value << 1) | (s[idx] == '1' ? 1 : 0);
        if (pow5.contains(value))
          res = min(res, 1 + dfs(idx + 1));
        idx++;
      }
      return memo[org_idx] = res;
    }

    return dfs(0) == MAX ? -1 : dfs(0);
  }
}
```