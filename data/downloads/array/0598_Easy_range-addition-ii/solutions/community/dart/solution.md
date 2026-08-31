# Dart solution

**Author:** thanhson232
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-addition-ii/solutions/5910617/](https://leetcode.com/problems/range-addition-ii/solutions/5910617/)

---

# Code
```dart []
class Solution {
int maxCount(int m, int n, List<List<int>> ops) {
  int x = m;
  int y = n;
  for (int i = 0; i < ops.length; i++) {
    x = min(ops[i].first, x);
    y = min(ops[i].last, y);
  }

  return x * y;
}


}
```