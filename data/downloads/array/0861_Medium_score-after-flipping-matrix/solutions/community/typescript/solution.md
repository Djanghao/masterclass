# Fastest execution || Beats 100% users with JAVA || C++ || PYTHON# || TYPESCRIPT || Greedy

**Author:** SanketSawant18
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/5150191/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/5150191/)

---

# Approach
Greedy method

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Explanation
1. **Class Declaration:**

- Solution: This class encapsulates the solution logic for the problem.
2. **Method Declaration:**

- public int matrixScore(int[][] grid): This method takes a 2D integer array grid as input and returns an integer representing the highest possible score.
3. **Variable Initialization:**

- int rows = grid.length;: Initializes rows variable to store the number of rows in the grid.
- int cols = grid[0].length;: Initializes cols variable to store the number of columns in the grid.
4. **Toggling Rows:**

- This part of the code iterates through each row of the grid and checks if the value in the first column is 0.
- If the value is 0, it toggles the entire row by flipping the values (0 to 1 and 1 to 0).
5. **Counting Zeroes in Columns:**

- This section uses a map (counts) to count the number of zeroes in each column (except the first one).
- It iterates through each cell in the grid (excluding the first column) and increments the count in the counts map for each zero encountered.
6. **Calculating the Score:**

- The score calculation starts by initializing res to the maximum possible score that can be achieved if all values in the first column are set to 1.
- Then, for each column (starting from the second column), it calculates the contribution to the score based on the number of zeroes in that column.
- It adds to res the maximum of the number of zeroes or the number of ones in that column (whichever is greater), multiplied by the corresponding power of 2 (based on the column position).
7. **Return:**

- The method returns the final calculated score (res). 

---

```java []
import java.util.*;

class Solution {
    public int matrixScore(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;
        
        for (int r = 0; r < rows; r++) {
            if (grid[r][0] == 0) {
                for (int c = 0; c < cols; c++) {
                    if (grid[r][c] == 0) {
                        grid[r][c] = 1;
                    } else {
                        grid[r][c] = 0;
                    }
                }
            }
        }
        
        Map<Integer, Integer> counts = new HashMap<>();
        for (int c = 1; c < cols; c++) {
            for (int r = 0; r < rows; r++) {
                if (grid[r][c] == 0) {
                    counts.put(c, counts.getOrDefault(c, 0) + 1);
                }
            }
        }
        
        int res = rows * (1 << (cols - 1));
        for (int c = 1; c < cols; c++) {
            res += Math.max(counts.getOrDefault(c, 0), rows - counts.getOrDefault(c, 0)) * (1 << (cols - c - 1));
        }
        
        return res;
    }
}

```
```python3 []
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:

        rows,cols = len(grid),len(grid[0])
        for r in range(rows):
            if grid[r][0] == 0:
                for c in range(cols):
                    if grid[r][c] == 0:
                        grid[r][c] = 1
                    else:
                        grid[r][c] = 0

        counts = collections.defaultdict(int)
        for c in range(1,cols):
            for r in range(rows):
                if grid[r][c] == 0:
                    counts[c] += 1

        res = rows * (2**(cols-1))
        for c in range(1,cols):
            res += max(counts[c],rows - counts[c])*2**(cols - c - 1)

        return res
```
```C++ []
#include <vector>
#include <unordered_map>
#include <algorithm>

class Solution {
public:
    int matrixScore(std::vector<std::vector<int>>& grid) {
        int rows = grid.size();
        int cols = grid[0].size();
        
        // Toggle rows
        for (int r = 0; r < rows; ++r) {
            if (grid[r][0] == 0) {
                for (int c = 0; c < cols; ++c) {
                    grid[r][c] = 1 - grid[r][c];
                }
            }
        }
        
        // Count zeroes in columns
        std::unordered_map<int, int> counts;
        for (int c = 1; c < cols; ++c) {
            for (int r = 0; r < rows; ++r) {
                if (grid[r][c] == 0) {
                    counts[c]++;
                }
            }
        }
        
        // Calculate score
        int res = rows * (1 << (cols - 1));
        for (int c = 1; c < cols; ++c) {
            res += std::max(counts[c], rows - counts[c]) * (1 << (cols - c - 1));
        }
        
        return res;
    }
};

```
```Typescript []
function matrixScore(grid: number[][]): number {
    const rows: number = grid.length;
        const cols: number = grid[0].length;
        
        // Toggle rows
        for (let r = 0; r < rows; r++) {
            if (grid[r][0] === 0) {
                for (let c = 0; c < cols; c++) {
                    grid[r][c] = 1 - grid[r][c];
                }
            }
        }
        
        // Count zeroes in columns
        const counts: Map<number, number> = new Map();
        for (let c = 1; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                if (grid[r][c] === 0) {
                    counts.set(c, (counts.get(c) || 0) + 1);
                }
            }
        }
        
        // Calculate score
        let res: number = rows * Math.pow(2, cols - 1);
        for (let c = 1; c < cols; c++) {
            const count: number = counts.get(c) || 0;
            res += Math.max(count, rows - count) * Math.pow(2, cols - c - 1);
        }
        
        return res;
};
```