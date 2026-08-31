# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 68
**Link:** [https://leetcode.com/problems/spiral-matrix-ii/solutions/3506445/](https://leetcode.com/problems/spiral-matrix-ii/solutions/3506445/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. I planned to give for next 10,000 Subscribers as well. If you're interested **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe


# or

# Click the Link in my Profile

# Approach:

- Initialize an empty matrix of size n x n with all elements set to zero.
- Define variables left, right, top, bottom, and num.
- Use a while loop to iterate over the matrix in a spiral order.
- In each iteration, fill in the top row, right column, bottom row, and left column of the remaining submatrix, in that order.
- Increment/decrement the values of left, right, top, and bottom accordingly after each iteration, and update the value of num to be filled in the next iteration.
- Return the generated matrix.
# Intuition:

The code generates the matrix by filling in its elements in a spiral order, starting from the top-left corner and moving clockwise. It uses the variables left, right, top, and bottom to keep track of the current submatrix being filled in, and the variable num to keep track of the next number to be filled in the matrix. The algorithm fills in the matrix in four steps:

- Fill in the top row from left to right.
- Fill in the right column from top to bottom.
- Fill in the bottom row from right to left.
- Fill in the left column from bottom to top.

After each step, the corresponding variable (left, right, top, or bottom) is incremented or decremented to exclude the already filled elements in the next iteration. The algorithm stops when the submatrix being filled in becomes empty, i.e., left > right or top > bottom. Finally, the generated matrix is returned.


```Python []
class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        if not n:
            return []
        matrix = [[0 for _ in range(n)] for _ in range(n)]
        left, right, top, bottom, num = 0, n-1, 0, n-1, 1
        while left <= right and top <= bottom:
            for i in range(left, right+1):
                matrix[top][i] = num 
                num += 1
            top += 1
            for i in range(top, bottom+1):
                matrix[i][right] = num
                num += 1
            right -= 1
            if top <= bottom:
                for i in range(right, left-1, -1):
                    matrix[bottom][i] = num
                    num += 1
                bottom -= 1
            if left <= right:
                for i in range(bottom, top-1, -1):
                    matrix[i][left] = num
                    num += 1
                left += 1
        return matrix

```
```Java []
class Solution {
    public int[][] generateMatrix(int n) {
        if (n == 0) {
            return new int[0][0];
        }
        int[][] matrix = new int[n][n];
        int left = 0, right = n-1, top = 0, bottom = n-1, num = 1;
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;
            for (int i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    matrix[bottom][i] = num++;
                }
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    matrix[i][left] = num++;
                }
                left++;
            }
        }
        return matrix;
    }
}

```
```C++ []
class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        if (n == 0) {
            return {};
        }
        vector<vector<int>> matrix(n, vector<int>(n, 0));
        int left = 0, right = n-1, top = 0, bottom = n-1, num = 1;
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;
            for (int i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            right--;
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    matrix[bottom][i] = num++;
                }
                bottom--;
            }
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    matrix[i][left] = num++;
                }
                left++;
            }
        }
        return matrix;
    }
};

```
# An Upvote will be encouraging \uD83D\uDC4D