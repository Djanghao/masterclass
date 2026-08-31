# Bottom Up

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3719423/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/3719423/)

---

# Code
```dart
import 'dart:math';

class Solution {
  int minimumPartition(String s, int k) {
    final memo = List.filled(s.length + 1, 0);
    
    // We use MAX to denote impossible.
    final MAX = 1 << 30;
    
    for (int i = s.length - 1; i >= 0; i--) {
      var tmp = MAX;

      var my = 0;
      for (int j = i; j < s.length; j++) {
        my = my * 10 + s[j].codeUnitAt(0) - '0'.codeUnitAt(0);
        if (my <= k)
          tmp = min(tmp, 1 + memo[j + 1]);
        else
          break;
      }

      memo[i] = tmp;
    }

    return memo[0] == MAX ? -1 : memo[0];
  }
}
```