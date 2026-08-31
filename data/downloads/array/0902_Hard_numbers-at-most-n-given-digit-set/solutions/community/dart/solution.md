# Dart Dynamic programming

**Author:** Coaspe
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/2795920/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/2795920/)

---

# Code
```
import 'dart:math';

extension on List<int> {
  int sum() {
    int x = 0;
    for (var e in this) {
      x += e;
    }
    return x;
  }
}
class Solution {
  int atMostNGivenDigitSet(List<String> digits, int n) {
    String n_str = n.toString();
    int n_len = n_str.length;
    List<num> dp = [for (var i = 0; i < n_len; i++) 0, 1];

    for (var i = n_len - 1; i >= 0; i--) {
      for (var d in digits) {
        if (int.parse(d) < int.parse(n_str[i])) {
          dp[i] += pow(digits.length, n_len - i - 1);
        } else if (int.parse(d) == int.parse(n_str[i])) {
          dp[i] += dp[i + 1];
        }
      }
    }

    return dp[0].toInt() +
        [for (var i = 1; i < n_len; i++) pow(digits.length, i).toInt()].sum();
  }
}

```