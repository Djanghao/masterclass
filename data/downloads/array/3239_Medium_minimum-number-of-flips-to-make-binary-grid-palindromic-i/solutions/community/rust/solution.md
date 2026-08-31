# Easy and Simple Approach | Easy Understanding | Beats 100%| Best for Beginners

**Author:** tNikhil
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581197/](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/solutions/5581197/)

---

# Intuition
*The goal is to make the rows and columns of a binary matrix palindromic by flipping the minimum number of cells*.

# **Counting Flips for Rows:**

- For each row, Let us check how many elements need to be flipped to make it palindromic.
- A row is palindromic if it reads the same forward and backward.
- Let us iterates through each row and compares the elements from the start and the end, moving towards the center. If the elements are different, it increments the row_count.
# Counting Flips for Columns:

- Similarly, for each column, Let us check how many elements need to be flipped to make it palindromic.
- A column is palindromic if it reads the same from top to bottom and bottom to top.
- Let us iterate through each column and compares the elements from the top and the bottom, moving towards the center. If the elements are different, it increments the col_count.

# Calculating Minimum Flips:

Finally, Let us return the minimum number of flips required. Since each pair of elements (one from the start and one from the end) can be flipped to make the row or column palindromic, the total number of flips is divided by 2.
# Complexity
- Time complexity: O(M*N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code


```python []
class Solution:
    def minFlips(self, grid: List[List[int]]) -> int:
        row_count=0
        n=len(grid)
        m=len(grid[0])
        for i in range(len(grid)):
            for j in range(len(grid[0])-1,-1,-1):
                if grid[i][m-j-1]!=grid[i][j]:
                    row_count+=1

        col_count=0

        for j in range(m):
            for i in range(n-1,-1,-1):
                if grid[n-i-1][j]!=grid[i][j]:
                    col_count+=1

        return min(row_count//2,col_count//2)
```
```Java []
import java.util.List;

class Solution {
    public int minFlips(int[][] grid) {
        int row_count = 0;
        int n = grid.length;
        int m = grid[0].length;

        // Count flips needed for each row to make them palindromic
        for (int i = 0; i < n; i++) {
            for (int j = m - 1; j >= 0; j--) {
                if (grid[i][m - j - 1] != grid[i][j]) {
                    row_count++;
                }
            }
        }

        int col_count = 0;

        // Count flips needed for each column to make them palindromic
        for (int j = 0; j < m; j++) {
            for (int i = n - 1; i >= 0; i--) {
                if (grid[n - i - 1][j] != grid[i][j]) {
                    col_count++;
                }
            }
        }

        // Return the minimum number of flips required
        return Math.min(row_count / 2, col_count / 2);
    }
}

```

```Cpp []
#include <vector>
#include <algorithm>
#include <iostream>

class Solution {
public:
    int minFlips(std::vector<std::vector<int>>& grid) {
        int row_count = 0;
        int n = grid.size();
        int m = grid[0].size();

        // Count flips needed for each row to make them palindromic
        for (int i = 0; i < n; i++) {
            for (int j = m - 1; j >= 0; j--) {
                if (grid[i][m - j - 1] != grid[i][j]) {
                    row_count++;
                }
            }
        }

        int col_count = 0;

        // Count flips needed for each column to make them palindromic
        for (int j = 0; j < m; j++) {
            for (int i = n - 1; i >= 0; i--) {
                if (grid[n - i - 1][j] != grid[i][j]) {
                    col_count++;
                }
            }
        }

        // Return the minimum number of flips required
        return std::min(row_count / 2, col_count / 2);
    }
};

```

``` JavaScript []
class Solution {
    minFlips(grid) {
        let row_count = 0;
        const n = grid.length;
        const m = grid[0].length;

        // Count flips needed for each row to make them palindromic
        for (let i = 0; i < n; i++) {
            for (let j = m - 1; j >= 0; j--) {
                if (grid[i][m - j - 1] !== grid[i][j]) {
                    row_count++;
                }
            }
        }

        let col_count = 0;

        // Count flips needed for each column to make them palindromic
        for (let j = 0; j < m; j++) {
            for (let i = n - 1; i >= 0; i--) {
                if (grid[n - i - 1][j] !== grid[i][j]) {
                    col_count++;
                }
            }
        }

        // Return the minimum number of flips required
        return Math.min(Math.floor(row_count / 2), Math.floor(col_count / 2));
    }
}
```

``` Rust []

struct Solution;

impl Solution {
    pub fn min_flips(grid: Vec<Vec<i32>>) -> i32 {
        let mut row_count = 0;
        let n = grid.len();
        let m = grid[0].len();

        // Count flips needed for each row to make them palindromic
        for i in 0..n {
            for j in (0..m).rev() {
                if grid[i][m - j - 1] != grid[i][j] {
                    row_count += 1;
                }
            }
        }

        let mut col_count = 0;

        // Count flips needed for each column to make them palindromic
        for j in 0..m {
            for i in (0..n).rev() {
                if grid[n - i - 1][j] != grid[i][j] {
                    col_count += 1;
                }
            }
        }

        // Return the minimum number of flips required
        (row_count / 2).min(col_count / 2) as i32
    }
}
```

``` Go []
package main

import "fmt"

type Solution struct{}

func (s Solution) minFlips(grid [][]int) int {
    rowCount := 0
    n := len(grid)
    m := len(grid[0])

    // Count flips needed for each row to make them palindromic
    for i := 0; i < n; i++ {
        for j := m - 1; j >= 0; j-- {
            if grid[i][m-j-1] != grid[i][j] {
                rowCount++
            }
        }
    }

    colCount := 0

    // Count flips needed for each column to make them palindromic
    for j := 0; j < m; j++ {
        for i := n - 1; i >= 0; i-- {
            if grid[n-i-1][j] != grid[i][j] {
                colCount++
            }
        }
    }

    // Return the minimum number of flips required
    return min(rowCount/2, colCount/2)
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```
