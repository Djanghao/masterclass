# DOUBLE ITRATTION

**Author:** anshd258
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/5782347/](https://leetcode.com/problems/set-matrix-zeroes/solutions/5782347/)

---

# Intuition
DO  DOUBLE ITTRATION

# Approach
simple make 2 arrays row and col and if `matrix[i][j] == 0` then mark `row[i] =1 `and `col[j] = 1 `to keep the track of indexes to be zero

then again ittrate over the matrix and mark `matrix[i][j] =0` if `row [i] == 0 || col[j] ==0`

# Complexity
- Time complexity:
    no doubt $$O(n*m)$$

- Space complexity:
    the space complexity is $$O(n)$$ + $$O(m)$$

# Code
```cpp []
class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
       int rows = matrix.size();
        int cols = matrix[0].size();
        std::vector<int> row(rows, 0);  
        std::vector<int> col(cols, 0); 
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (matrix[i][j] == 0) {
                    row[i] = 1;
                    col[j] = 1;
                }
            }
        }

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (row[i] == 1 || col[j] == 1) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
};
```
```java []
class Solution {
    public void setZeroes(int[][] matrix) {
        int[] row = new int[matrix.length];
        int [] col = new int[matrix[0].length];
    for(int i = 0 ; i < matrix.length ; i++){
        for(int j = 0 ; j <matrix[0].length ; j++){
            if(matrix[i][j] == 0){
                col[j] = 1;
                row[i] = 1;

            }
        }
    }

    for(int i = 0 ; i < matrix.length ; i++){
        for(int j = 0 ; j <matrix[0].length ; j++){
            if(row[i] == 1 ||col[j] == 1){
               matrix[i][j] = 0;
            }
        }
    }
    }
}
```
```dart []
class Solution {
  void setZeroes(List<List<int>> matrix) {
    List<int> row = List.filled(matrix.length, 0);
    List<int> col = List.filled(matrix[0].length, 0);
    for(int i = 0 ; i < matrix.length ; i++){
        for(int j = 0 ; j <matrix[0].length ; j++){
            if(matrix[i][j] == 0){
                col[j] = 1;
                row[i] = 1;

            }
        }
    }

    for(int i = 0 ; i < matrix.length ; i++){
        for(int j = 0 ; j <matrix[0].length ; j++){
            if(row[i] == 1 ||col[j] == 1){
               matrix[i][j] = 0;
            }
        }
    }
  }
}
```
```python []
class Solution(object):
    def setZeroes(self, matrix):
        row = [0 for _ in range(len(matrix))]
        col = [0 for _ in range(len(matrix[0]))]
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if matrix[i][j] == 0:
                    row[i] = 1
                    col[j] = 1
        print(row)
        print(col)
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if row[i] == 1 or col[j] == 1:
                    matrix[i][j] = 0 
```