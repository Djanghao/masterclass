# Dart solution

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766565/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii/solutions/3766565/)

---

# Code
```
import 'dart:collection';
import 'dart:math';

class Solution {
  int maxValue(List<List<int>> events, int k) {
    events.sort((a, b) => a[1] - b[1]);

    final db = new SplayTreeMap<int, List<int>>();
    db[0] = List.filled(k + 1, 0);

    var res = 0;

    for (final event in events) {
      final end = event[1];
      final dp = List<int>.from(db[db.lastKeyBefore(end + 1)]!);

      final prev = db[db.lastKeyBefore(event[0])]!;
      
      for (int i = 0; i < k; i++)
        res = max(res, dp[i + 1] = max(dp[i + 1], prev[i] + event[2]));
      
      db[end] = dp;
    }

    return res;
  }
}
```