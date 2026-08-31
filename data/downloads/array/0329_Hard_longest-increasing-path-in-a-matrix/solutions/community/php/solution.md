# Longest Increasing Path in a Matrix || Beats 100.00% of users with PHP

**Author:** logusivam
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/5284208/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/5284208/)

---

# Explanation:

- **Initialization:**

  - Check if the matrix is empty. If so, return 0.
  - Initialize a `memo` array with -1 to store the lengths of the longest paths starting from each cell.
  - Initialize `maxLength` to keep track of the maximum path length found.

- **DFS with Memoization:**

  - Define a recursive `dfs` function that explores all possible increasing paths from the current cell.
  - For each cell, if the result is already computed (`memo[i][j] != -1`), return the stored result.
  - Explore all four directions (right, down, left, up). If the next cell is within bounds and its value is greater than the current cell's value, recursively find the longest path from the next cell and update `maxLength`.
  - Store the computed result in `memo[i][j]` and return it.

- **Compute the Longest Path:**

  - Iterate through each cell in the matrix and compute the longest increasing path starting from that cell using the `dfs` function.
  - Update `maxLength` with the maximum value found.

- **Return Result:**

  - After exploring all cells, return `maxLength` as the length of the longest increasing path.

# Code
```PHP []
class Solution {

    /**
     * @param Integer[][] $matrix
     * @return Integer
     */
    function longestIncreasingPath($matrix) {
        if (empty($matrix) || empty($matrix[0])) {
            return 0;
        }

        $rows = count($matrix);
        $cols = count($matrix[0]);
        $memo = array_fill(0, $rows, array_fill(0, $cols, -1));
        $maxLength = 0;

        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                $maxLength = max($maxLength, $this->dfs($matrix, $i, $j, $memo));
            }
        }

        return $maxLength;
    }

    private function dfs($matrix, $i, $j, &$memo) {
        if ($memo[$i][$j] != -1) {
            return $memo[$i][$j];
        }

        $rows = count($matrix);
        $cols = count($matrix[0]);
        $directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
        $maxLength = 1;

        foreach ($directions as $dir) {
            $x = $i + $dir[0];
            $y = $j + $dir[1];
            if ($x >= 0 && $x < $rows && $y >= 0 && $y < $cols && $matrix[$x][$y] > $matrix[$i][$j]) {
                $maxLength = max($maxLength, 1 + $this->dfs($matrix, $x, $y, $memo));
            }
        }

        $memo[$i][$j] = $maxLength;
        return $maxLength;
    }
}

// Example usage:
$solution = new Solution();
$matrix = [
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
];
echo $solution->longestIncreasingPath($matrix);  // Output: 4

```


![UPVOTE FOR MORE.png](./images/0.png)