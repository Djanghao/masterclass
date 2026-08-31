# PHP DFS Solution

**Author:** mohammed_aladham
**Votes:** 1
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/3406770/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/3406770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[][] $heights
     * @return Integer[][]
     */
    function pacificAtlantic($heights) {
        $m = count($heights);
        $n = count($heights[0]);

        // Create two 2D arrays to mark the reachable cells
        $pacific =[];
        $atlantic = [];

        // Call the DFS function for each cell on the borders
        for ($i = 0; $i < $m; $i++) {
            $this->DFS($heights, $pacific, $i, 0, $heights[$i][0]);
            $this->DFS($heights, $atlantic, $i, $n-1, $heights[$i][$n-1]);
        }
        for ($j = 0; $j < $n; $j++) {
            $this->DFS($heights, $pacific, 0, $j, $heights[0][$j]);
            $this->DFS($heights, $atlantic, $m-1, $j, $heights[$m-1][$j]);
        }

        // Find the cells that can flow to both oceans
        $result = array();
        for ($i = 0; $i < $m; $i++) {
            for ($j = 0; $j < $n; $j++) {
                if ($pacific[$i][$j] && $atlantic[$i][$j]) {
                    $result[] = array($i, $j);
                }
            }
        }

        return $result;
    }

    function DFS($heights, &$ocean, $i, $j, $prev) {
        // Check if the cell is out of bounds or already marked
        if ($i < 0 || $i >= count($heights) || $j < 0 || $j >= count($heights[0]) || $ocean[$i][$j] || $heights[$i][$j] < $prev) {
            return;
        }

        // Mark the cell as reachable
        $ocean[$i][$j] = true;

        // Recursively call DFS on neighboring cells
        $this->DFS($heights, $ocean, $i+1, $j, $heights[$i][$j]);
        $this->DFS($heights, $ocean, $i-1, $j, $heights[$i][$j]);
        $this->DFS($heights, $ocean, $i, $j+1, $heights[$i][$j]);
        $this->DFS($heights, $ocean, $i, $j-1, $heights[$i][$j]);
    }
}

```