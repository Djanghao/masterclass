# Simple solution for Dart

**Author:** KhizhniakovM
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/4941499/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/4941499/)

---

# Complexity
- Time complexity:
O(s)

- Space complexity:
O(2^k)

# Code
```
import 'dart:math' as math;

class Solution {
  bool hasAllCodes(String s, int k) {
    final codeSet = <String>{};
    
    for (int i = 0; i <= s.length - k; i++) {
      final str = s.substring(i, i + k);
      codeSet.add(str);
    }

    return math.pow(2, k) == codeSet.length;
  }
}
```