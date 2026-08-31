# [Dart] O(N) with simple loop

**Author:** shinewanna97
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3650381/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/3650381/)

---

# Intuition
- Check every char and if not 'a' than reduce the char by 1
- If not able to change any char, change last char to z as question said have to change exactly once.

# Code
```
class Solution {
  String smallestString(String s) {
    var chars = s.split('');
    var n = s.length;
    var isChanged = false;
    for (var i = 0; i < n; i++) {
      var x = s[i];
      if (x == 'a') {
        if (i == 0 || s[i - 1] == 'a') {
          continue;
        }
        break;
      }
      isChanged = true;
      chars[i] = String.fromCharCode(s[i].codeUnits[0] - 1);
    }

    if (!isChanged) {
      chars[n - 1] = 'z';
    }

    return chars.join();
  }
}
```