# Dart solution using Set

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3775827/](https://leetcode.com/problems/length-of-the-longest-valid-substring/solutions/3775827/)

---

# Code
```
import 'dart:collection';
import 'dart:math';

class Solution {
  int longestValidSubstring(String word, List<String> forbidden) {
    final db = <String>{};
    for (final e in forbidden) db.add(e);

    var res = 0;
    for (int j = 0, i = 0; j < word.length; j++) {
      for (int k = 0, begin = j; k < 10 && begin >= i; k++, begin--) {
        final sub = word.substring(begin, j + 1);
        if (db.contains(sub)) {
          i = begin + 1;
          break;
        }
      }
      res = max(res, j + 1 - i);
    }
    return res;
  }
}

```