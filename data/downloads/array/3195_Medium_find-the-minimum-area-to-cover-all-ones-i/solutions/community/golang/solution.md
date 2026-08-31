# ✔️ Beats 100% : Simple logic :Detailed Step-by-Step Explanation - C++/Java/C#/Python/JS/Ruby/Go/Dart

**Author:** Cregan_wolf
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355567/](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-i/solutions/5355567/)

---

# Intuition
The problem requires us to find the minimum area of a rectangle that encloses all `1`s in a binary grid. My first thought is to determine the boundaries of the rectangle by finding the minimum and maximum rows and columns that contain `1`s.

# Approach
1. Traverse the grid to find the minimum and maximum row and column indices that contain `1`s.
2. Calculate the height and width of the rectangle using these indices.
3. The area of the rectangle is then given by the product of its height and width.

# Complexity
- Time complexity: $$O(n \	imes m)$$, where $$n$$ is the number of rows and $$m$$ is the number of columns in the grid.
- Space complexity: $$O(1)$$, since we are using only a constant amount of extra space.

# Code
```C++ []
class Solution {
public:
    int minimumArea(vector<vector<int>>& grid) {
        int min_row = INT_MAX;
        int max_row = INT_MIN;
        int min_col = INT_MAX;
        int max_col = INT_MIN;
        
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[0].size(); ++j) {
                if (grid[i][j] == 1) {
                    min_row = min(min_row, i);
                    max_row = max(max_row, i);
                    min_col = min(min_col, j);
                    max_col = max(max_col, j);
                }
            }
        }
        
        int height = max_row - min_row + 1;
        int width = max_col - min_col + 1;
        
        return height * width;
    }
};

```
```python []
class Solution:
    def minimumArea(self, grid: List[List[int]]) -> int:
        min_row = float('inf')
        max_row = float('-inf')
        min_col = float('inf')
        max_col = float('-inf')
        
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == 1:
                    min_row = min(min_row, i)
                    max_row = max(max_row, i)
                    min_col = min(min_col, j)
                    max_col = max(max_col, j)
        
        height = max_row - min_row + 1
        width = max_col - min_col + 1
        
        return height * width
```
```C# []
public class Solution {
    public int MinimumArea(int[][] grid) {
        int minRow = int.MaxValue;
        int maxRow = int.MinValue;
        int minCol = int.MaxValue;
        int maxCol = int.MinValue;
        
        for (int i = 0; i < grid.Length; i++) {
            for (int j = 0; j < grid[0].Length; j++) {
                if (grid[i][j] == 1) {
                    minRow = Math.Min(minRow, i);
                    maxRow = Math.Max(maxRow, i);
                    minCol = Math.Min(minCol, j);
                    maxCol = Math.Max(maxCol, j);
                }
            }
        }
        
        int height = maxRow - minRow + 1;
        int width = maxCol - minCol + 1;
        
        return height * width;
    }
}

```
```Java []
class Solution {
    public int minimumArea(int[][] grid) {
        int minRow = Integer.MAX_VALUE;
        int maxRow = Integer.MIN_VALUE;
        int minCol = Integer.MAX_VALUE;
        int maxCol = Integer.MIN_VALUE;
        
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    minRow = Math.min(minRow, i);
                    maxRow = Math.max(maxRow, i);
                    minCol = Math.min(minCol, j);
                    maxCol = Math.max(maxCol, j);
                }
            }
        }
        
        int height = maxRow - minRow + 1;
        int width = maxCol - minCol + 1;
        
        return height * width;
    }
}

```
```javascript []
class Solution {
    minimumArea(grid) {
        let minRow = Infinity;
        let maxRow = -Infinity;
        let minCol = Infinity;
        let maxCol = -Infinity;
        
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === 1) {
                    minRow = Math.min(minRow, i);
                    maxRow = Math.max(maxRow, i);
                    minCol = Math.min(minCol, j);
                    maxCol = Math.max(maxCol, j);
                }
            }
        }
        
        let height = maxRow - minRow + 1;
        let width = maxCol - minCol + 1;
        
        return height * width;
    }
}

```
```Dart []
class Solution {
  int minimumArea(List<List<int>> grid) {
    int minRow = double.infinity.toInt();
    int maxRow = double.negativeInfinity.toInt();
    int minCol = double.infinity.toInt();
    int maxCol = double.negativeInfinity.toInt();
    
    for (int i = 0; i < grid.length; i++) {
      for (int j = 0; j < grid[0].length; j++) {
        if (grid[i][j] == 1) {
          minRow = min(minRow, i);
          maxRow = max(maxRow, i);
          minCol = min(minCol, j);
          maxCol = max(maxCol, j);
        }
      }
    }
    
    int height = maxRow - minRow + 1;
    int width = maxCol - minCol + 1;
    
    return height * width;
  }
}

```
```ruby []
class Solution
  def minimum_area(grid)
    min_row = Float::INFINITY
    max_row = -Float::INFINITY
    min_col = Float::INFINITY
    max_col = -Float::INFINITY
    
    grid.each_with_index do |row, i|
      row.each_with_index do |cell, j|
        if cell == 1
          min_row = [min_row, i].min
          max_row = [max_row, i].max
          min_col = [min_col, j].min
          max_col = [max_col, j].max
        end
      end
    end
    
    height = max_row - min_row + 1
    width = max_col - min_col + 1
    
    height * width
  end
end

```
```Go []
package main

import (
    "fmt"
    "math"
)

type Solution struct{}

func (s Solution) minimumArea(grid [][]int) int {
    minRow, maxRow := math.MaxInt64, math.MinInt64
    minCol, maxCol := math.MaxInt64, math.MinInt64
    
    for i := 0; i < len(grid); i++ {
        for j := 0; j < len(grid[0]); j++ {
            if grid[i][j] == 1 {
                if i < minRow {
                    minRow = i
                }
                if i > maxRow {
                    maxRow = i
                }
                if j < minCol {
                    minCol = j
                }
                if j > maxCol {
                    maxCol = j
                }
            }
        }
    }
    
    height := maxRow - minRow + 1
    width := maxCol - minCol + 1
    
    return height * width
}

func main() {
    solution := Solution{}
    grid := [][]int{
        {0, 0, 1, 0},
        {0, 1, 1, 0},
        {0, 0, 0, 0},
    }
    fmt.Println(solution.minimumArea(grid)) // Output: 4
}

```