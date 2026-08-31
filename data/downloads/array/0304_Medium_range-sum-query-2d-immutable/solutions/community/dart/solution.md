# Easy solution with dart ⭐😉

**Author:** king77nt54321
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/5539321/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/5539321/)

---



# Code
```
class NumMatrix {

  late List<List<int>> prefix;


  NumMatrix(List<List<int>> matrix) {
      int row = matrix.length;
      int col = matrix[0].length;

      prefix = List.generate(row + 1, (_) => List.filled(col
      +1,0));

      for(int i = 1; i <=row; i++){
        for(int j = 1; j <= col ; j++){
          prefix[i][j] = matrix[i-1][j-1] + prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1];
        }
      }


  }
  
  int sumRegion(int row1, int col1, int row2, int col2) {
    return prefix[row2+1][col2+1] - prefix[row1][col2+1] - prefix[row2+
    1][col1] + prefix[row1][col1] ;
  }
}
```