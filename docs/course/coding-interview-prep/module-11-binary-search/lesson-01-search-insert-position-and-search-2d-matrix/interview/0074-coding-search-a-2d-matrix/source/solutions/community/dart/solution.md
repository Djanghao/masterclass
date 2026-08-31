# 🟢🔴🟢 Beats 100.00%👏 Easiest Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/6034563/](https://leetcode.com/problems/search-a-2d-matrix/solutions/6034563/)

---

```
class Solution {
  bool searchMatrix(List<List<int>> matrix, int target) {

    for(int i = 0; i < matrix.length; i++){
        if(matrix[i].contains(target)) return true;
    }
    return false;

  }
}
```