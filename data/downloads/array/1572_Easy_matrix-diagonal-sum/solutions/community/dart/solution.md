# Simple Dart Solution

**Author:** AhmedWafik
**Votes:** 2
**Link:** [https://leetcode.com/problems/matrix-diagonal-sum/solutions/3500132/](https://leetcode.com/problems/matrix-diagonal-sum/solutions/3500132/)

---

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)

# Code
```
class Solution {
  int diagonalSum(List<List<int>> mat) {
      int diagonalsSum = 0;
      int length = mat.length;
      for(int i=0; i<length; i++){
          diagonalsSum += mat[i][i];
          if(length-1-i == i)continue;
          diagonalsSum += mat[i][length-1-i];
        
      }
      return diagonalsSum;

  }
}
```