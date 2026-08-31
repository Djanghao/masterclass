# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/4082417/](https://leetcode.com/problems/longest-duplicate-substring/solutions/4082417/)

---

# Code
```
import 'dart:collection';

class Solution {
  String longestDupSubstring(String s) {
    final N = s.length;
    final prefix = List.filled(N + 1, 0);
    final pows = List.filled(N + 1, 1);
    for (int i = 0; i < N; i++) {
      prefix[i + 1] = prefix[i] * 31 + s.codeUnitAt(i);
      pows[i + 1] = pows[i] * 31;
    }
    int? can(int m) {
      final seen = HashSet<int>();
      for (int i = m - 1; i < s.length; i++) {
        final sum = prefix[i + 1] - pows[m] * prefix[i + 1 - m];
        if (!seen.add(sum))
          return i + 1 - m;
      }
      return null;
    }
    var l = 1, h = s.length;
    while (l <= h) {
      final m = (l + h) ~/ 2;
      if (can(m) == null)
        h = m - 1;
      else
        l = m + 1;
    }
    return h == 0 ? "" : s.substring(can(h)!, can(h)! + h);
  }
}
```