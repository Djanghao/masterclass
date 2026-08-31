# ✅ Beats 100% | C++/Java/C#/Rust | With Explanation | 0 ms runtime

**Author:** Muhammad-Diyor
**Votes:** 10
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/4387695/](https://leetcode.com/problems/transpose-matrix/solutions/4387695/)

---

# Intuition
We're essentially flipping the matrix over its main diagonal, which means swapping the rows and columns. So, for a given element at `matrix[i][j]`, we want it to be at `newMatrix[j][i]` in the transposed matrix.

# Approach
\u26A0\uFE0F Guys, this approach was written for my C# solution. In the code block, I provided code in some other languages and they may have minor differences.

1) Determine the number of rows and columns in the original matrix.
2) Create a new matrix with swapped dimensions (rows become columns, and vice versa).
3) Iterate through each element in the original matrix.
4) Place the element at `matrix[i][j]` into the transposed matrix at `newMatrix[j][i]`.
5) Return the transposed matrix.


# Complexity
- Time complexity is O(rows * columns)

- Space complexity: also O(rows * columns)

##### Also, I have to mention that our solution beats 100 % in time complexity in Java and Rust with 0 ms runtime
![image.png](./images/0.png)



# Code
```C# []
public class Solution {
    public int[][] Transpose(int[][] matrix) {

        int rows = matrix[0].Length;
        int columns = matrix.Length;

        int[][] newMatrix = new int[rows][];

        for (int i = 0; i < rows; i++) {
            newMatrix[i] = new int[columns];
            for (int j = 0; j < columns; j++) {
                newMatrix[i][j] = matrix[j][i];
            }
        }

        return newMatrix;
    }
}
```
```C++ []
class Solution {
public:
    vector<vector<int>> transpose(vector<vector<int>>& matrix) {
        int rows = matrix[0].size();
        int columns = matrix.size();

        std::vector<std::vector<int>> newMatrix(rows, std::vector<int>(columns, 0));

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                newMatrix[i][j] = matrix[j][i];
            }
        }

        return newMatrix;
    }
};
```
```Java []
class Solution {
    public int[][] transpose(int[][] matrix) {
        int rows = matrix[0].length;
        int columns = matrix.length;

        int[][] newMatrix = new int[rows][columns];

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < columns; j++) {
                newMatrix[i][j] = matrix[j][i];
            }
        }

        return newMatrix;
    }
}
```
```Rust []
impl Solution {
    pub fn transpose(matrix: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        let mut transposed_matrix: Vec<Vec<i32>> = Vec::new();

        for col in 0..matrix[0].len() {
            let mut row: Vec<i32> = Vec::new();
            for row_index in 0..matrix.len() {
                row.push(matrix[row_index][col]);
            }

            transposed_matrix.push(row);
        }

        transposed_matrix
    }
}
```

![Now, you have to upvote!.png](./images/1.png)

### \u2B06\uFE0F Upvote to keep me motivated and don't stop the hardwork, else, I'm coming for you!
