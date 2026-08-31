# Dart

**Author:** ShahbozTuronov
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/3489648/](https://leetcode.com/problems/smallest-good-base/solutions/3489648/)

---

# Complexity
- Time complexity: 100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 100%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  String smallestGoodBase(String n) {
    int nInt = int.parse(n);
    for (int m = log(nInt) ~/ log(2); m >= 1; m--) {
      int k = pow(nInt, 1 / m).toInt();
      if (k < 2) continue;
      int sum = 0;
      for (int i = 0; i <= m; i++) {
        sum = sum * k + 1;
      }
      if (sum == nInt) {
        return k.toString();
      }
    }
    return (nInt - 1).toString();
  }
}

```