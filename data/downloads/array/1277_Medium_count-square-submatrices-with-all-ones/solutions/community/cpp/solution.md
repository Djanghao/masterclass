# ✅ Explained step by step | Beats 100% | ✅ Working 27.10.2024

**Author:** Piotr_Maminski
**Votes:** 125
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5972616/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5972616/)

---

```python3 []
class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        # Get dimensions of the matrix
        n = len(matrix)    # number of rows
        m = len(matrix[0]) # number of columns
        
        # Create a DP table with same dimensions as matrix
        dp = [[0] * m for _ in range(n)]
        
        # Variable to store total count of squares
        ans = 0
        
        # Initialize first column of DP table
        for i in range(n):
            dp[i][0] = matrix[i][0]
            ans += dp[i][0]
        
        # Initialize first row of DP table
        for j in range(1, m):
            dp[0][j] = matrix[0][j]
            ans += dp[0][j]
        
        # Fill the DP table for remaining cells
        for i in range(1, n):
            for j in range(1, m):
                # Only process if current cell in matrix is 1
                if matrix[i][j] == 1:
                    # Find minimum of left, top, and diagonal cells and add 1
                    dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])
                ans += dp[i][j]
        
        return ans


```
```cpp []
class Solution {
public:
    int countSquares(vector<vector<int>>& matrix) {
        // Get dimensions of the matrix
        int n = matrix.size();    // number of rows
        int m = matrix[0].size(); // number of columns
        
        // Create a DP table with same dimensions as matrix
        vector<vector<int>> dp(n, vector<int>(m, 0));
        
        // Variable to store total count of squares
        int ans = 0;
        
        // Initialize first column of DP table
        // Each cell in first column can only form a 1x1 square if matrix[i][0] = 1
        for (int i = 0; i < n; i++) {
            dp[i][0] = matrix[i][0];
            ans += dp[i][0];  // Add the count of squares from the first column
        }
        
        // Initialize first row of DP table
        // Each cell in first row can only form a 1x1 square if matrix[0][j] = 1
        for (int j = 1; j < m; j++) {
            dp[0][j] = matrix[0][j];
            ans += dp[0][j];  // Add the count of squares from the first row
        }
        
        // Fill the DP table for remaining cells
        for(int i = 1; i < n; i++) {
            for(int j = 1; j < m; j++) {
                // Only process if current cell in matrix is 1
                if(matrix[i][j] == 1) {
                    // For each cell, check the minimum value among:
                    // 1. Left cell (dp[i][j-1])
                    // 2. Top cell (dp[i-1][j])
                    // 3. Top-left diagonal cell (dp[i-1][j-1])
                    // Add 1 to this minimum value
                    dp[i][j] = 1 + min({dp[i][j-1], dp[i-1][j], dp[i-1][j-1]});
                }
                // Add current cell's value to total count
                ans += dp[i][j];
            }
        }
        
        // Return total count of squares
        return ans;
    }
};

```
```java []
class Solution {
    public int countSquares(int[][] matrix) {
        // Get dimensions of the matrix
        int n = matrix.length;    // number of rows
        int m = matrix[0].length; // number of columns
        
        // Create a DP table with same dimensions as matrix
        int[][] dp = new int[n][m];
        
        // Variable to store total count of squares
        int ans = 0;
        
        // Initialize first column of DP table
        for (int i = 0; i < n; i++) {
            dp[i][0] = matrix[i][0];
            ans += dp[i][0];
        }
        
        // Initialize first row of DP table
        for (int j = 1; j < m; j++) {
            dp[0][j] = matrix[0][j];
            ans += dp[0][j];
        }
        
        // Fill the DP table for remaining cells
        for(int i = 1; i < n; i++) {
            for(int j = 1; j < m; j++) {
                if(matrix[i][j] == 1) {
                    dp[i][j] = 1 + Math.min(Math.min(dp[i][j-1], dp[i-1][j]), dp[i-1][j-1]);
                }
                ans += dp[i][j];
            }
        }
        
        return ans;
    }
}


```
```csharp []
public class Solution {
    public int CountSquares(int[][] matrix) {
        // Get dimensions of the matrix
        int n = matrix.Length;    // number of rows
        int m = matrix[0].Length; // number of columns
        
        // Create a DP table with same dimensions as matrix
        int[][] dp = new int[n][];
        for(int i = 0; i < n; i++) {
            dp[i] = new int[m];
        }
        
        // Variable to store total count of squares
        int ans = 0;
        
        // Initialize first column of DP table
        for (int i = 0; i < n; i++) {
            dp[i][0] = matrix[i][0];
            ans += dp[i][0];
        }
        
        // Initialize first row of DP table
        for (int j = 1; j < m; j++) {
            dp[0][j] = matrix[0][j];
            ans += dp[0][j];
        }
        
        // Fill the DP table for remaining cells
        for(int i = 1; i < n; i++) {
            for(int j = 1; j < m; j++) {
                if(matrix[i][j] == 1) {
                    dp[i][j] = 1 + Math.Min(dp[i][j-1], 
                                Math.Min(dp[i-1][j], dp[i-1][j-1]));
                }
                ans += dp[i][j];
            }
        }
        
        return ans;
    }
}

```
```golang []
func countSquares(matrix [][]int) int {
    // Get dimensions of the matrix
    n := len(matrix)    // number of rows
    m := len(matrix[0]) // number of columns
    
    // Create a DP table with same dimensions as matrix
    dp := make([][]int, n)
    for i := range dp {
        dp[i] = make([]int, m)
    }
    
    // Variable to store total count of squares
    ans := 0
    
    // Initialize first column of DP table
    for i := 0; i < n; i++ {
        dp[i][0] = matrix[i][0]
        ans += dp[i][0]
    }
    
    // Initialize first row of DP table
    for j := 1; j < m; j++ {
        dp[0][j] = matrix[0][j]
        ans += dp[0][j]
    }
    
    // Fill the DP table for remaining cells
    for i := 1; i < n; i++ {
        for j := 1; j < m; j++ {
            if matrix[i][j] == 1 {
                // Find minimum of left, top, and diagonal cells
                min := dp[i][j-1]
                if dp[i-1][j] < min {
                    min = dp[i-1][j]
                }
                if dp[i-1][j-1] < min {
                    min = dp[i-1][j-1]
                }
                dp[i][j] = 1 + min
            }
            ans += dp[i][j]
        }
    }
    
    return ans
}
```
```swift []
class Solution {
    func countSquares(_ matrix: [[Int]]) -> Int {
        // Get dimensions of the matrix
        let n = matrix.count    // number of rows
        let m = matrix[0].count // number of columns
        
        // Create a DP table with same dimensions as matrix
        var dp = Array(repeating: Array(repeating: 0, count: m), count: n)
        
        // Variable to store total count of squares
        var ans = 0
        
        // Initialize first column of DP table
        for i in 0..<n {
            dp[i][0] = matrix[i][0]
            ans += dp[i][0]  // Add the count of squares from the first column
        }
        
        // Initialize first row of DP table
        for j in 1..<m {
            dp[0][j] = matrix[0][j]
            ans += dp[0][j]  // Add the count of squares from the first row
        }
        
        // Fill the DP table for remaining cells
        for i in 1..<n {
            for j in 1..<m {
                // Only process if current cell in matrix is 1
                if matrix[i][j] == 1 {
                    // For each cell, check the minimum value among:
                    // 1. Left cell (dp[i][j-1])
                    // 2. Top cell (dp[i-1][j])
                    // 3. Top-left diagonal cell (dp[i-1][j-1])
                    // Add 1 to this minimum value
                    dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j], dp[i-1][j-1])
                }
                // Add current cell's value to total count
                ans += dp[i][j]
            }
        }
        
        // Return total count of squares
        return ans
    }
}
```
```javascript [JS]
// JavaScript


/**
 * @param {number[][]} matrix
 * @return {number}
 */
function countSquares(matrix) {
    // Get dimensions of the matrix
    const n = matrix.length;    // number of rows
    const m = matrix[0].length; // number of columns
    
    // Create a DP table with same dimensions as matrix
    const dp = Array(n).fill().map(() => Array(m).fill(0));
    
    // Variable to store total count of squares
    let ans = 0;
    
    // Initialize first column of DP table
    for (let i = 0; i < n; i++) {
        dp[i][0] = matrix[i][0];
        ans += dp[i][0];
    }
    
    // Initialize first row of DP table
    for (let j = 1; j < m; j++) {
        dp[0][j] = matrix[0][j];
        ans += dp[0][j];
    }
    
    // Fill the DP table for remaining cells
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(
                    dp[i][j-1],
                    dp[i-1][j],
                    dp[i-1][j-1]
                );
            }
            ans += dp[i][j];
        }
    }
    
    return ans;
}
```
```typescript [TS]
// TypeScript


function countSquares(matrix: number[][]): number {
    const n: number = matrix.length;    // number of rows
    const m: number = matrix[0].length; // number of columns
    
    // Create a DP table with same dimensions as matrix
    const dp: number[][] = Array(n).fill(0).map(() => Array(m).fill(0));
    
    let ans: number = 0;
    
    // Initialize first column of DP table
    for (let i = 0; i < n; i++) {
        dp[i][0] = matrix[i][0];
        ans += dp[i][0];
    }
    
    // Initialize first row of DP table
    for (let j = 1; j < m; j++) {
        dp[0][j] = matrix[0][j];
        ans += dp[0][j];
    }
    
    // Fill the DP table for remaining cells
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 1 + Math.min(
                    dp[i][j-1],
                    dp[i-1][j],
                    dp[i-1][j-1]
                );
            }
            ans += dp[i][j];
        }
    }
    
    return ans;
}
```
```rust []
impl Solution {
    pub fn count_squares(matrix: Vec<Vec<i32>>) -> i32 {
        let n = matrix.len();
        let m = matrix[0].len();
        
        // Create DP table
        let mut dp = vec![vec![0; m]; n];
        let mut ans = 0;
        
        // Initialize first column
        for i in 0..n {
            dp[i][0] = matrix[i][0];
            ans += dp[i][0];
        }
        
        // Initialize first row
        for j in 1..m {
            dp[0][j] = matrix[0][j];
            ans += dp[0][j];
        }
        
        // Fill the DP table
        for i in 1..n {
            for j in 1..m {
                if matrix[i][j] == 1 {
                    dp[i][j] = 1 + dp[i][j-1].min(dp[i-1][j]).min(dp[i-1][j-1]);
                }
                ans += dp[i][j];
            }
        }
        
        ans
    }
}
```
```ruby []
def count_squares(matrix)
    # Get dimensions of the matrix
    n = matrix.size        # number of rows
    m = matrix[0].size     # number of columns
    
    # Create a DP table with same dimensions as matrix
    dp = Array.new(n) { Array.new(m, 0) }
    
    # Variable to store total count of squares
    ans = 0
    
    # Initialize first column of DP table
    n.times do |i|
        dp[i][0] = matrix[i][0]
        ans += dp[i][0]
    end
    
    # Initialize first row of DP table
    (1...m).each do |j|
        dp[0][j] = matrix[0][j]
        ans += dp[0][j]
    end
    
    # Fill the DP table for remaining cells
    (1...n).each do |i|
        (1...m).each do |j|
            if matrix[i][j] == 1
                dp[i][j] = 1 + [dp[i][j-1], dp[i-1][j], dp[i-1][j-1]].min
            end
            ans += dp[i][j]
        end
    end
    
    ans
end
```
![image.png](./images/0.png)


### Complexity 
- Time complexity: O(n * m)

- Space complexity: O(n * m)



## Explanation Step by Step

---
1. Purpose of the Algorithm
- This code counts the total number of square submatrices that contain only 1's in a given binary matrix.
2. Initialization Steps
```
// Matrix dimensions
int n = matrix.size();    // rows
int m = matrix[0].size(); // columns
// Create DP table
vector<vector<int>> dp(n, vector<int>(m, 0));
int ans = 0;

```

3. Base Cases Setup
- First column initialization:
```
for (int i = 0; i < n; i++) {
    dp[i][0] = matrix[i][0];
    ans += dp[i][0];
}

```

- First row initialization:
```
for (int j = 1; j < m; j++) {
    dp[0][j] = matrix[0][j];
    ans += dp[0][j];
}

```
4. Main DP Logic
- For each cell (i,j), if matrix[i][j] = 1:
    - Look at three adjacent cells: left, top, and diagonal top-left
    - Take minimum of these three values and add 1
    - This gives the size of the largest square possible at current position
```
dp[i][j] = 1 + min({dp[i][j-1], dp[i-1][j], dp[i-1][j-1]});

```

5. Why This Works
- dp[i][j] represents the size of the largest square submatrix ending at position (i,j)
- If any of the three adjacent positions has a smaller value, we can't form a larger square
- Adding 1 accounts for the current cell itself

6. Example For matrix:
```
1 1 1
1 1 1
1 1 1

```
The DP table becomes:

```
1 1 1
1 2 2
1 2 3
```

Where each number represents the size of the largest square possible at that position.

7. Final Answer
- The sum of all values in the DP table gives the total count of all possible squares
- Each value in dp[i][j] contributes to that many squares ending at position (i,j)

---

![image.png](./images/1.png)
![image.png](./images/2.png)



