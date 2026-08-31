# 3 Different solutions | C# | O(m+n) complexity

**Author:** rahulvc
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/2327770/](https://leetcode.com/problems/search-a-2d-matrix-ii/solutions/2327770/)

---

Here are the 3 solutions for this problem:
1. Brute force with time complexity O(M x N)
```
  public bool SearchMatrix(int[][] matrix, int target) {
        for(int i=0; i < matrix.Length; i++){
            for(int j=0; j< matrix[0].Length; j++){
                if(matrix[i][j] == target)
                    return true;
            }
        }
        return false;
    }
```

2. Optimized the bruteforce approach to have O(M x N) time complexity where M can be less than actual row length depending on the target's location in matrix
```
 public bool SearchMatrix(int[][] matrix, int target) {
        int rowEnd = matrix[0].Length;
        int columnEnd = matrix.Length;
        for(int j=0; j< rowEnd; j++){
            if(matrix[0][j] == target)
                return true;
            if(matrix[0][j] > target){
                rowEnd = j;
                break;
            }
        }
          for(int j=0; j< columnEnd; j++){
            if(matrix[j][0] == target)
                return true;
            if(matrix[j][0] > target){
                columnEnd = j;
                break;
            }
        }
          for(int i=1; i< columnEnd; i++){
              for(int j=1; j< rowEnd; j++){
                  if(matrix[i][j] == target)
                    return true;
              }
          }
        return false;
    }
```

3. Optimized Code with the best time complexity of O(M + N) (thanks to discussion tab here)
```
 public bool SearchMatrix(int[][] matrix, int target) {
        int column = matrix[0].Length-1;
        int row = 0;
        while(column >= 0 && row < matrix.Length){
            if(matrix[row][column] == target)
                return true;
            else if(matrix[row][column] > target)
                column--;
            else if(matrix[row][column] < target)
                row++;
        }
        return false;
    }
```