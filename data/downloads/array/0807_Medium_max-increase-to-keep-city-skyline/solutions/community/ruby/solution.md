# Beginner Friendly Easy Approach || Beats Everyone(100%) || All Popular Languages

**Author:** Garv_Virmani
**Votes:** 5
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/5225539/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/5225539/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Store maximum of each row and column

# Approach
<!-- Describe your approach to solving the problem. -->
GREEDY
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)

# Code
```C++ []
class Solution {
public:
    int maxIncreaseKeepingSkyline(vector<vector<int>>& grid) {
        int n=grid.size(); //n*n
        //Store max of each row and col in vectors
        vector<int>row(n,INT_MIN);
        vector<int>col(n,INT_MIN);
        for(int r=0;r<n;r++){
            for(int c=0;c<n;c++){
                row[r]=max(row[r],grid[r][c]);
                col[c]=max(col[c],grid[r][c]);
            }
        }
        //visit every grid[r][c] and add min(row[r],col[c])-grid[r][c] to the ans
        int ans=0;
        for(int r=0;r<n;r++){
            for(int c=0;c<n;c++){
                ans+=min(row[r],col[c])-grid[r][c];
            }
        }
        return ans;
    }
};
```
```javascript []
class Solution {
    maxIncreaseKeepingSkyline(grid) {
        const n = grid.length;
        // Store max of each row and col in arrays
        const row = new Array(n).fill(Number.MIN_SAFE_INTEGER);
        const col = new Array(n).fill(Number.MIN_SAFE_INTEGER);
        for(let r = 0; r < n; r++){
            for(let c = 0; c < n; c++){
                row[r] = Math.max(row[r], grid[r][c]);
                col[c] = Math.max(col[c], grid[r][c]);
            }
        }
        // Visit every grid[r][c] and add min(row[r], col[c]) - grid[r][c] to the ans
        let ans = 0;
        for(let r = 0; r < n; r++){
            for(let c = 0; c < n; c++){
                ans += Math.min(row[r], col[c]) - grid[r][c];
            }
        }
        return ans;
    }
}
```
```Python []
class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        n = len(grid)

        # Find the maximum elements in each row and column
        row_max = [max(row) for row in grid]
        col_max = [max(col) for col in zip(*grid)]  # Efficient zip for columns

        # Calculate the total increase while maintaining the skyline
        total_increase = 0
        for r in range(n):
            for c in range(n):
                total_increase += min(row_max[r], col_max[c]) - grid[r][c]

        return total_increase

```
```Java []
import java.util.stream.IntStream;

public class Solution {
    public int maxIncreaseKeepingSkyline(int[][] grid) {
        int n = grid.length;

        // Find the maximum elements in each row and column efficiently using streams
        int[] rowMax = IntStream.range(0, n)
                .map(r -> IntStream.of(grid[r]).max().orElse(0))  // Efficiently find row max using stream
                .toArray();
        int[] colMax = IntStream.range(0, n)
                .map(c -> IntStream.range(0, n).map(r -> grid[r][c]).max().orElse(0))  // Efficiently find col max using stream
                .toArray();

        // Calculate the total increase while maintaining the skyline
        int totalIncrease = 0;
        for (int r = 0; r < n; r++) {
            for (int c = 0; c < n; c++) {
                totalIncrease += Math.min(rowMax[r], colMax[c]) - grid[r][c];
            }
        }

        return totalIncrease;
    }
}
```
```C []
#include <stdio.h>
#include <limits.h>

int maxIncreaseKeepingSkyline(int grid[][50], int n) {
    int row_max[n], col_max[n];

    // Initialize row and column maximums
    for (int i = 0; i < n; i++) {
        row_max[i] = col_max[i] = INT_MIN;
    }

    // Find the maximum elements in each row and column
    for (int r = 0; r < n; r++) {
        for (int c = 0; c < n; c++) {
            row_max[r] = fmax(row_max[r], grid[r][c]);
            col_max[c] = fmax(col_max[c], grid[r][c]);
        }
    }

    // Calculate the total increase while maintaining the skyline
    int total_increase = 0;
    for (int r = 0; r < n; r++) {
        for (int c = 0; c < n; c++) {
            total_increase += fmin(row_max[r], col_max[c]) - grid[r][c];
        }
    }

    return total_increase;
}
```
```Ruby []
class Solution
  def max_increase_keeping_skyline(grid)
    n = grid.size

    # Find the maximum elements in each row and column
    row_max = grid.map { |row| row.max }  # Efficiently find row max using map
    col_max = (0...n).map { |c| grid.map { |row| row[c] }.max }  # Efficiently find col max using map

    # Calculate the total increase while maintaining the skyline
    total_increase = 0
    (0...n).each do |r|
      (0...n).each do |c|
        total_increase += [row_max[r], col_max[c]].min - grid[r][c]
      end
    end

    total_increase
  end
end
```
# Don't Scroll BELOW(THANK YOU)
.
.
.
.
.
.
.
![image.png](./images/1.png)
