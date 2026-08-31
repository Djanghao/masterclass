# Dart

**Author:** darv
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/4147608/](https://leetcode.com/problems/swap-adjacent-in-lr-string/solutions/4147608/)

---

# Code
```
class Solution {
  bool canTransform(String start, String end) {
    final l1 = start.split("");
    final l2 = end.split("");
    l1.sort();
    l2.sort();
    if (l1.join() != l2.join()) return false;

    int rs = 0;
    int ls = 0;
    for (int i = 0; i < start.length; i++) {
      if (rs != 0) {
        if (start[i] == 'L') return false;
      }
      if (ls != 0) {
        if (start[i] == 'R') return false;
      }
      if (start[i] == end[i]) continue;

      if (start[i] == 'X') {
        if (end[i] == 'R') {
          if (rs != 0) {
            rs--;
          } else {
            return false;
          }
        } else {
          ls++;
        }
      } else if (start[i] == 'R') {
        rs++;
      } else {
        if (ls != 0) {
          ls--;
        } else {
          return false;
        }
      }

      if (rs * ls != 0) return false;
    }

    return true;
  }
}
```