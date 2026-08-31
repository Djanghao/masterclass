# ✍ ✅ [PHP🚀 27ms Beats 100%][PHP][JavaScript 96.55%]  Depth-First-Search Approach

**Author:** akunopaka
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-closed-islands/solutions/3384964/](https://leetcode.com/problems/number-of-closed-islands/solutions/3384964/)

---


# Approach
This approach uses depth-first-search to traverse through the grid and count the number of closed islands in the grid. 

We check each cell of the grid, if it is 0 (meaning land), then we perform a depth-first-search to check if it is a closed island or not. If it is a closed island, we increment the count of closed islands. 

To check if the cell is a closed island, we perform a depth-first-search on it and check if all of its neighbors are 1 (meaning water). 

The result is increased by 1 for each closed island found.

# Complexity
*Time complexity:* $$O(m * n)$$ - where m is the number of rows and n is the number of columns in the grid.
*Space complexity:* $$O(m * n)$$ - since we use a recursive depth-first-search to traverse the grid.

# Code

```javascript []
var closedIsland = function (grid) {
    let result = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    if (cols < 3 || rows < 3) return 0;
    let checkNeighbours = (i, j) => {
        if (i < 0 || i >= rows || j < 0 || j >= cols) {
            return false;
        }
        if (grid[i][j] === 1) {
            return true;
        }
        grid[i][j] = 1;
        let left = checkNeighbours(i, j - 1);
        let right = checkNeighbours(i, j + 1);
        let top = checkNeighbours(i - 1, j);
        let bottom = checkNeighbours(i + 1, j);
        return left && right && top && bottom;
    }

    for (let i = 1; i < rows - 1; i++) {
        for (let j = 1; j < cols - 1; j++) {
            if (grid[i][j] === 0) {
                result += checkNeighbours(i, j);
            }
        }
    }
    return result;
};
```
```php []
class Solution
{
    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function closedIsland(array $grid): int {
        $islandsCount = 0;
        $m = count($grid);     // y
        $n = count($grid[0]);  // x

        if ($m < 3 || $n < 3) return 0;

        for ($i = 1; $i < $m - 1; $i++) {
            for ($j = 1; $j < $n - 1; $j++) {
                if ($grid[$i][$j] === 0) {
                    if ($this->checkNeighbours($grid, $i, $j)) {
                        $islandsCount++;
                    }
                }
            }
        }
        return $islandsCount;
    }

    function checkNeighbours(array &$grid, int $i, int $j): bool {
        if (!isset($grid[$i][$j])) return false;
        if ($grid[$i][$j] === 1) return true;

        $grid[$i][$j] = 1;

        $left = $this->checkNeighbours($grid, $i, $j - 1);
        $right = $this->checkNeighbours($grid, $i, $j + 1);
        $top = $this->checkNeighbours($grid, $i - 1, $j);
        $bottom = $this->checkNeighbours($grid, $i + 1, $j);

        return $left && $right && $top && $bottom;
    }
}
```

##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**