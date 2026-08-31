# 🟢🔴🟢 Shortcut Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5870458/](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/solutions/5870458/)

---


```
class Solution {
  bool checkValid(List<List<int>> matrix) {
    for(int i = 0; i < matrix.length; i++){
        Set<int> rows = {};
        Set<int> cols = {};
        for(int j = 0; j < matrix.length; j++){
            rows.add(matrix[j][i]);
            cols.add(matrix[i][j]);
        }
        if(rows.length != matrix.length || cols.length != matrix[i].length) return false;
    }
    return true;
  }
}
```