# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/4147308/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/4147308/)

---

# Code
```
import 'dart:math';
class Solution {
  int minSwaps(String s) {
    final ones = s.split("").where((element) => element == '1').length;
    final zeroes = s.length - ones;
    if ((ones - zeroes).abs() > 1) return -1;
    int func(int begin) {
      List<int> bads = [];
      final A = begin.toString();
      for (int i = 0; i < s.length; i++) {
        if (i & 1 == 0) {
          if (s[i] != A) bads.add(i);
        } else {
          if (s[i] == A) bads.add(i);
        }
      }
      return bads.length ~/ 2;
    }
    var res = 1e9.toInt();
    if (ones >= zeroes)
      res = min(res, func(1));
    if (zeroes >= ones)
      res = min(res, func(0));
    return res;
  }
}
```