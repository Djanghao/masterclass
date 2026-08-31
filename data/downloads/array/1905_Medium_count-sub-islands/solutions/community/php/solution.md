# PHP | DFS | 100% | Explanation

**Author:** bbc21249
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/3338733/](https://leetcode.com/problems/count-sub-islands/solutions/3338733/)

---

# Intuition
To solve this problem, we can iterate over every cell of grid2 and check if it is a part of an island. If it is, then we can check if this island is a sub-island of grid1. We can do this by performing a Depth-First Search (DFS) on grid2 and checking if the corresponding cells in grid1 are also 1s. If all cells of the island in grid2 are also 1s in grid1, then it is a sub-island.
# Approach
We start by initializing a variable count to 0. We then iterate over every cell of grid2. If the current cell is 0, we skip it. Otherwise, we perform a DFS on grid2 starting from the current cell. During the DFS, we also check if the corresponding cells in grid1 are also 1s. If they are, we mark them as 0 in grid2 to avoid revisiting them. If all cells of the island in grid2 are also 1s in grid1, then we increment count.

Finally, we return count, which represents the number of sub-islands in grid2.

# Complexity
- Time complexity:
O(mn), where m is the number of rows and n is the number of columns in grid2. This is because we visit every cell in grid2 once.

- Space complexity:
O(mn), where m is the number of rows and n is the number of columns in grid2. This is because we use a recursive DFS function, which can go as deep as the number of cells in grid2.

# Code
```
class Solution {

    /**
     * @param Integer[][] $grid1
     * @param Integer[][] $grid2
     * @return Integer
     */
    function countSubIslands($grid1, $grid2) {
        $m = count($grid2);
        $n = count($grid2[0]);
        $count = 0;
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($grid2[$i][$j] == 0) {
                    continue;
                }
                if ($this->dfs($grid2, $grid1, $i, $j)) {
                    $count++;
                }
            }
        }
        return $count;
    }

    function dfs(&$grid2, $grid1, $i, $j) {
        $current = $grid2[$i][$j] == $grid1[$i][$j];
        $grid2[$i][$j] = 0;
        $left = $right = $up = $down = true;

        if (isset($grid2[$i][$j+1]) && $grid2[$i][$j+1] == 1) {
            $left = $this->dfs($grid2, $grid1, $i, $j+1);
        }

        if (isset($grid2[$i][$j-1]) && $grid2[$i][$j-1] == 1) {
            $right = $this->dfs($grid2, $grid1, $i, $j-1);
        }

        if (isset($grid2[$i+1][$j]) && $grid2[$i+1][$j] == 1) {
            $up = $this->dfs($grid2, $grid1, $i+1, $j);
        }

        if (isset($grid2[$i-1][$j]) && $grid2[$i-1][$j] == 1) {
            $down = $this->dfs($grid2, $grid1, $i-1, $j);
        }

        return $current && $left && $right && $up && $down;
    }
}
```