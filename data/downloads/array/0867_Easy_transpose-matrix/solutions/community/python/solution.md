# ✅ Beats 100% - Explained with [ Video ] - C++/Java/Python/JS - Visualized

**Author:** lancertech6
**Votes:** 83
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/4384031/](https://leetcode.com/problems/transpose-matrix/solutions/4384031/)

---

![Screenshot 2023-12-10 062820.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/P9dFhd_003k](https://youtu.be/P9dFhd_003k)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 800 Subscribers*
*Current Subscribers: 703*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The transpose of a matrix can be obtained by swapping its rows and columns. We iterate through each element of the original matrix and fill the corresponding position in the transposed matrix.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Determine the number of rows (`row`) and columns (`col`) in the original matrix.
2. Create a new matrix `arr` with dimensions `col x row`.
3. Iterate through each element of the original matrix, assigning it to the corresponding position in the transposed matrix.
4. Return the transposed matrix.

# Complexity
- Time Complexity: `O(m * n)` where m and n are the number of rows and columns in the matrix.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space Complexity: `O(m * n)` for the transposed matrix.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int[][] transpose(int[][] matrix) {
        int row=matrix.length;
        int col=matrix[0].length;
        int arr[][]=new int[col][row];
        for(int i=0;i<col;i++)
        {
            for(int j=0;j<row;j++)
            {
            arr[i][j]=matrix[j][i];
            }
        }
        return arr;
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        int row = matrix.size();
        int col = matrix[0].size();
        vector<vector<int>> result(col, vector<int>(row, 0));
        
        for (int i = 0; i < col; ++i) {
            for (int j = 0; j < row; ++j) {
                result[i][j] = matrix[j][i];
            }
        }
        
        return result;
    }
};
```
```Python []
class Solution(object):
    def transpose(self, matrix):
        row = len(matrix)
        col = len(matrix[0])
        result = [[0] * row for _ in range(col)]
        
        for i in range(col):
            for j in range(row):
                result[i][j] = matrix[j][i]
                
        return result
        
```
```JavaScript []
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let col = matrix[0].length;
    let result = Array.from({ length: col }, () => Array(row).fill(0));
    
    for (let i = 0; i < col; ++i) {
        for (let j = 0; j < row; ++j) {
            result[i][j] = matrix[j][i];
        }
    }
    
    return result;
};
```
![upvote.png](./images/1.png)
