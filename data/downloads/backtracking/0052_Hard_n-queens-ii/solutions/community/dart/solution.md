# Dart solution

**Author:** user5542yr
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/4361037/](https://leetcode.com/problems/n-queens-ii/solutions/4361037/)

---

# Approach
Split by half possible combinations.

# Code
```
class Solution {
int totalNQueens(int n) {
  final path = List.filled(n, 0);
  int count = 0;

  bool possible(int level, int x2) {
    for(int i = 0; i < level; i++) {
      int x1 = path[i];
      if(x1 == x2 || ((x1 - x2).abs() == level - i)) {
        return false;
      }
    }
    return true;
  }

  int middle = (n + 1) ~/ 2;
  void backtrack(int level) {
    if(level == n) {
      bool calcMirror = path[0] < (n) ~/ 2;
      count++;
      if(calcMirror) {
        count++;
      }
      return;
    }
    for(int i = 0; i < (level != 0 ? n : middle); i++) {
      if(possible(level, i)) {
        path[level] = i;
        backtrack(level + 1);
      }
    }
  }
  backtrack(0);
  return count;
}
}
```