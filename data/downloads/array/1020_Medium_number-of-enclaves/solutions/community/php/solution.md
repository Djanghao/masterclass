# ✍ ✅ [PHP🚀 207 ms Beats 100%][JavaScript 73 ms Beats 98.41%] Depth-First-Search Approach

**Author:** akunopaka
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-enclaves/solutions/3388246/](https://leetcode.com/problems/number-of-enclaves/solutions/3388246/)

---


# Approach
This approach uses Depth First Search (DFS) to identify and traverse all the 1s on the outer boundary of the grid. 
Any 1s connected to the outer boundary are set to 0, leaving all the unconnected 1s inside the grid to be counted. 
To traverse the grid using DFS, a helper function is used to check the adjacent cells and set them to 0 if they are 1s. 
This process is repeated until all the adjacent cells have been checked. 

The remaining 1s that are not connected to the outer boundary are then counted and returned. 


# Complexity
*Time complexity:* $$O(m*n)$$, where n is the number of rows and m is the number of columns. Since we are looping through the 2D array, the time complexity is O(n*m). 
*Space complexity:* $$O(m*n)$$ - where m and n is the number of rows and columns respectively.


```php []
class Solution
{
    /**
     * @param Integer[][] $grid
     * @return Integer
     */
    function numEnclaves(array $grid): int {
        $col = count($grid); // y
        $row = count($grid[0]); // x

        // check boundary
        // top and bottom
        for ($i = 0; $i < $col; $i++) {
            $this->checkIsland($grid, $i, 0);
            $this->checkIsland($grid, $i, $row - 1);
        }
        // left and right
        for ($i = 0; $i < $row; $i++) {
            $this->checkIsland($grid, 0, $i);
            $this->checkIsland($grid, $col - 1, $i);
        }

        $isolatedIslandCount = 0;
        for ($i = 1; $i < $col - 1; $i++) {
            $isolatedIslandCount += array_sum($grid[$i]);
        }

        return $isolatedIslandCount;
    }


    function checkIsland(array &$grid, int $y, int $x): void {
        if (!isset($grid[$y][$x]) || $grid[$y][$x] === 0) return;

        $grid[$y][$x] = 0;

        $this->checkIsland($grid, $y - 1, $x);
        $this->checkIsland($grid, $y + 1, $x);
        $this->checkIsland($grid, $y, $x - 1);
        $this->checkIsland($grid, $y, $x + 1);
    }
}
```
```javascript []
var numEnclaves = function (grid) {
    const col = grid.length;
    const row = grid[0].length;

    // 1. find all the 1s on the boundary
    // 2. find all the 1s connected to the boundary and set them to 0
    // 3. count the rest 1s
    // 4. return the count

    let checkNeighboursDFS = (i, j) => {
        if (i < 0 || i >= col || j < 0 || j >= row || grid[i][j] === 0) {
            return;
        }
        grid[i][j] = 0;
        checkNeighboursDFS(i - 1, j);
        checkNeighboursDFS(i + 1, j);
        checkNeighboursDFS(i, j - 1);
        checkNeighboursDFS(i, j + 1);
    };

    // 1. find all the 1s on the boundary
    for (let i = 0; i < col; i++) {
            checkNeighboursDFS(i, 0);
            checkNeighboursDFS(i, row - 1);
    }
    for (let i = 0; i < row; i++) {
            checkNeighboursDFS(0, i);
            checkNeighboursDFS(col - 1, i);
    }

    // 3. count the rest 1s
    let isolatedIslandCount = 0;
    // isolatedIslandCount = grid.flat().reduce((a, b) => a + b);
    for (let i = 1; i < col - 1; i++) {
        for (let j = 1; j < row - 1; j++) {
            if (grid[i][j] === 1) {
                isolatedIslandCount++;
            }
        }
    }

    return isolatedIslandCount;
};
```

##### Thanks for reading! If you have any questions or suggestions, please leave a comment below. I would love to hear your thoughts! \uD83D\uDE0A
### **Please upvote if you found this post helpful! \uD83D\uDC4D**