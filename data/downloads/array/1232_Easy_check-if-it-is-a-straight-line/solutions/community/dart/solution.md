# Dart simple O(n) O(1) solution

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/5089314/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/5089314/)

---

# Code
```
class Solution {
  bool checkStraightLine(List<List<int>> coordinates) {
    int x0 = coordinates[0][0],
        y0 = coordinates[0][1],
        x1 = coordinates[1][0],
        y1 = coordinates[1][1];
    
    for (var [x2, y2] in coordinates) {
      if ((y0 - y1) * (x2 - x1) != (y2 - y1) * (x0 - x1)) {
        return false;
      }
    }
    return true;
  }
}
```