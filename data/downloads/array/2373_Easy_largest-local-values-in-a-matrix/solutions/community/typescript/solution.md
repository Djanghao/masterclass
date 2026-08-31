# Fastest execution || beats 100% users with JAVA || C++ || PYTHON3 || TYPESCRIPT

**Author:** SanketSawant18
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145188/](https://leetcode.com/problems/largest-local-values-in-a-matrix/solutions/5145188/)

---

# Approach
Iterate Through Grid

# Complexity
- Time complexity: O(n^2)

- Space complexity: O(n^2)

# Explanation
1. **Method Signature:**

- We start with the Solution class containing the largestLocal method. The method takes a 2D integer array grid as input and returns a 2D integer array as the result.

2. **Initialization:**

- We initialize variables n to store the size of the input grid and result as a 2D array to store the resulting matrix.

3. **Iterating Over Submatrices:**

- We use two nested loops to iterate through the input grid, considering each cell as the top-left corner of a 3x3 submatrix. Since we are generating a matrix of size (n - 2) x (n - 2), we iterate up to n - 2.

4. **Finding Maximum Value:**

- For each cell (i, j), we initialize maxVal to the minimum integer value. Then, we iterate over the corresponding 3x3 submatrix using nested loops.
- Within the nested loops, we update maxVal to store the maximum value found in the submatrix using the Math.max method.

5. **Storing Maximum Value:**

- After finding the maximum value within the submatrix, we store it in the corresponding position of the result matrix at index (i, j).
6. **Returning Result:**

- After iterating through all cells, we have computed the maximum values for each contiguous 3x3 submatrix in the input grid. We return the result matrix containing these maximum values.

---


```java []
import java.util.*;

class Solution {
    public int[][] largestLocal(int[][] grid) {
        int n = grid.length;
        int[][] result = new int[n - 2][n - 2];
        
        for (int i = 0; i < n - 2; i++) {
            for (int j = 0; j < n - 2; j++) {
                int maxVal = Integer.MIN_VALUE;
                // Iterate over the 3x3 submatrix
                for (int r = i; r < i + 3; r++) {
                    for (int c = j; c < j + 3; c++) {
                        maxVal = Math.max(maxVal, grid[r][c]);
                    }
                }
                result[i][j] = maxVal;
            }
        }
        
        return result;
    }
}

```
```python3 []
class Solution:
    def largestLocal(self, grid: List[List[int]]) -> List[List[int]]:
        length = len(grid)
        res =[]
        for i in range(length-2):
            temp=[]
            for j in range(length-2):
                maxi = max(grid[i][j],grid[i][j+1],grid[i][j+2],
                           grid[i+1][j],grid[i+1][j+1],grid[i+1][j+2],
                           grid[i+2][j],grid[i+2][j+1],grid[i+2][j+2])
                temp.append(maxi)
            res.append(temp)
        return res
```
```C++ []
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> largestLocal(vector<vector<int>>& grid) {
        int n = grid.size();
        vector<vector<int>> result(n - 2, vector<int>(n - 2));

        for (int i = 0; i < n - 2; i++) {
            for (int j = 0; j < n - 2; j++) {
                int maxVal = numeric_limits<int>::min();
                for (int r = i; r < i + 3; r++) {
                    for (int c = j; c < j + 3; c++) {
                        maxVal = max(maxVal, grid[r][c]);
                    }
                }
                result[i][j] = maxVal;
            }
        }

        return result;
    }
};

```
```Typescript []
function largestLocal(grid: number[][]): number[][] {
    const n: number = grid.length;
        const result: number[][] = [];

        for (let i = 0; i < n - 2; i++) {
            result[i] = [];
            for (let j = 0; j < n - 2; j++) {
                let maxVal: number = Number.MIN_SAFE_INTEGER;
                for (let r = i; r < i + 3; r++) {
                    for (let c = j; c < j + 3; c++) {
                        maxVal = Math.max(maxVal, grid[r][c]);
                    }
                }
                result[i].push(maxVal);
            }
        }

        return result;
};
```
