# O(m*n) to O(m) to O(1) Search Time || C++

**Author:** NeerajSati
**Votes:** 109
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2104545/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/2104545/)

---

These are the three approaches for this question:
**1. Bruteforce (TLE)**
**T.C : O(m*n)**

We just traverse through all the required elements and return the sum.
```
class NumMatrix {
public:
    vector<vector<int>> mat;
    NumMatrix(vector<vector<int>>& matrix) {
        mat = matrix;
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        int sum = 0;
        for(int i = row1 ; i <= row2; i++){
            for(int j = col1 ; j <= col2; j++){
                sum += mat[i][j];
            }
        }
        return sum;
    }
};
```

**2. Using Row as Prefix Sum (767ms)**
**T.C : O(m)**

In each row of matrix we store the sum of that row till that column. And while returning we return the sum of that row till final column - sum of that row before initial column.
i.e, For this matrix we store
```
1  2  3                      1  3  6
4  1  2           ->         4  5  7
1  2  1                      1  3  4
```
```
class NumMatrix {
public:
    vector<vector<int>> mat;
    NumMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(),n = matrix[0].size();
        for(int i = 0 ; i < m; i++){
            vector<int> row(n);
            row[0] = matrix[i][0];
            for(int j = 1 ; j < n; j++){
                row[j] = row[j-1] + matrix[i][j];
            }
            mat.push_back(row);
        }
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        int sum = 0,minus = 0;
        for(int i = row1 ; i <= row2; i++){
            sum += mat[i][col2];
            if(col1 > 0)
                minus += mat[i][col1-1];
        }
        return sum - minus;
    }
};

```


**3. Storing sum of all the elements in the upper left square**
**T.C : O(1)**

In every block, we store the sum of all the elements in the matrix from upper left corner to that point. i.e,
```
1  2  3                      1  3  6
4  1  2           ->         5  8  13
1  2  1                      6  11 17
```

```
class NumMatrix {
public:
    vector<vector<int>> mat;
    NumMatrix(vector<vector<int>>& matrix) {
        int m = matrix.size(),n = matrix[0].size();
        mat = vector<vector<int>>(m+1,vector<int>(n+1,0));
        for(int i = 1 ; i <= m; i++){
            for(int j = 1; j <= n; j++){
                    mat[i][j] = matrix[i-1][j-1] + mat[i-1][j] + mat[i][j-1] - mat[i-1][j-1];
            }
        }
    }
    
    int sumRegion(int row1, int col1, int row2, int col2) {
        return mat[row2+1][col2+1] - mat[row1][col2 + 1] - mat[row2 + 1][col1] + mat[row1][col1];
    }
};
```


**Upvote :(**