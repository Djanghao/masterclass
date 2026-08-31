# ⭐Most intuitive explaination by itsYeshu ⭐ Beats 90% ⭐ Python, C++, Java, Javascript, Typescript ⭐

**Author:** itsyeshu
**Votes:** 3
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5039548/](https://leetcode.com/problems/island-perimeter/solutions/5039548/)

---

# Intuition
We are asked to find the perimeter of an island. We are also given that there is only one island.
Island is a connected cells in a grid $grid$ with value of $1$ representing *land* surrounded by water represented by $0$.

Looking at the $grid$, you will think of using *DFS* or *BFS*. But there is a simpler way of calculating the perimeter.

See if a *land* cell is connected to another *land* cell we loose $1$ side from the $4$ sides that it can contribute towards perimeter.

So, directly iterating over the grid one *land* cell at a time and counting all neighbouring *land* cells, we can calculate the *perimeter* easily.

**How to get neighbouring cells in a grid without hardcoding?**
Use a list of $[1, -1, 0, 0]$ to create pairs of $[1,0]$, $[0,1]$, $[-1,0]$ and $[0,-1]$ which is when added to the positions $(row, col)$ we get neighbouring cells.

## Further optimization :
If a *land* is connected to another *land* cell, the second *land* cell is also connected to this *land* cell. So, we can optimize this and remove $2$ sides from our perimeter calculation.
To avoid duplicates, we can choose any 2 specific directions to look for *land* cells *i.e* *top and left*, *top and right*, *bottom and left* or *bottom and right*.

*Now let's code.*

> If this intuition helped you, **please upvote** this solution.

# Approach
1. Initialize our result `perimeter` to *zero*
2. Get count of rows and columns in `grid` in `rows` and `cols`, respectively
3. Interate over `grid` and if cell is a *land* cell, then do:
    1. Every cell has $4$ sides, so initialize `neighbouringLand` to $4$
    2. Look in the *top* & *left* direction.
    3. If current cell has a neighbouring *land* cell in that direction, reduce `neighbouringLand` by 2
    4. Add `neighbouringLand` to our result `perimeter`.
4. Return our result `perimeter`

# Complexity
- Time complexity: $O(rows * cols)$
    - Iterating over all possible cells in $grid$ takes $O(rows * cols)$

- Space complexity: $O(1)$
    - Our algorithm doesnot use any variable length variable.

# Code
``` Python []
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        perimeter = 0
        rows, cols = len(grid), len(grid[0])

        LAND_CELL = 1

        for row in range(rows):
            for col in range(cols):
                # Land cell
                if grid[row][col] == LAND_CELL:
                    neighbouringLand = 4

                    # Look in the top direction
                    if row > 0 and grid[row - 1][col] == LAND_CELL:
                        neighbouringLand -= 2

                    # Look in the left direction
                    if col > 0 and grid[row][col - 1] == LAND_CELL:
                        neighbouringLand -= 2

                    perimeter += neighbouringLand
        return perimeter
```

``` C++ []
class Solution {
public:
    int islandPerimeter(std::vector<std::vector<int>>& grid) {
        int perimeter = 0;
        int rows = grid.size();
        int cols = grid[0].size();
        int LAND_CELL = 1;
        
        for (int row = 0; row < rows; ++row) {
            for (int col = 0; col < cols; ++col) {
                if (grid[row][col] == LAND_CELL) {
                    int neighbouringLand = 4;
                    
                    if (row > 0 && grid[row - 1][col] == LAND_CELL) {
                        neighbouringLand -= 2;
                    }
                    
                    if (col > 0 && grid[row][col - 1] == LAND_CELL) {
                        neighbouringLand -= 2;
                    }
                    
                    perimeter += neighbouringLand;
                }
            }
        }
        
        return perimeter;
    }
};
```

``` Java []
class Solution {
    public int islandPerimeter(int[][] grid) {
        int perimeter = 0;
        int rows = grid.length;
        int cols = grid[0].length;
        int LAND_CELL = 1;

        for (int row = 0; row < rows; ++row) {
            for (int col = 0; col < cols; ++col) {
                if (grid[row][col] == LAND_CELL) {
                    int neighbouringLand = 4;

                    if (row > 0 && grid[row - 1][col] == LAND_CELL) {
                        neighbouringLand -= 2;
                    }

                    if (col > 0 && grid[row][col - 1] == LAND_CELL) {
                        neighbouringLand -= 2;
                    }

                    perimeter += neighbouringLand;
                }
            }
        }

        return perimeter;
    }
}
```

``` Javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = (grid) => {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const LAND_CELL = 1;

    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (grid[row][col] === LAND_CELL) {
                let neighbouringLand = 4;

                if (row > 0 && grid[row - 1][col] === LAND_CELL) {
                    neighbouringLand -= 2;
                }

                if (col > 0 && grid[row][col - 1] === LAND_CELL) {
                    neighbouringLand -= 2;
                }

                perimeter += neighbouringLand;
            }
        }
    }

    return perimeter;
}
```

``` Typescript []
function islandPerimeter(grid: number[][]): number {
    let perimeter = 0;
    const rows = grid.length;
    const cols = grid[0].length;
    const LAND_CELL = 1;

    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (grid[row][col] === LAND_CELL) {
                let neighbouringLand = 4;

                if (row > 0 && grid[row - 1][col] === LAND_CELL) {
                    neighbouringLand -= 2;
                }

                if (col > 0 && grid[row][col - 1] === LAND_CELL) {
                    neighbouringLand -= 2;
                }

                perimeter += neighbouringLand;
            }
        }
    }

    return perimeter;
}
```