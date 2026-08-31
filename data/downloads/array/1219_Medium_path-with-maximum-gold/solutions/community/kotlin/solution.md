# 💯DFS Backtracking🎯✅ | 99.56%🔥| 4 Easy Steps : 🎯| Simple (15 line) to understand💯Explained

**Author:** Prathamesh18X
**Votes:** 12
**Link:** [https://leetcode.com/problems/path-with-maximum-gold/solutions/5154938/](https://leetcode.com/problems/path-with-maximum-gold/solutions/5154938/)

---

# Intuition

We are navigating through a maze of `gold blocks`, we begin exploring from various starting points, moving `up`, `down`, `left`, and `right`\uD83D\uDC41\uFE0F .
 At each step, we collect the gold and `keep track of the maximum` amount obtained.\uD83E\uDD73 If we hit a dead end or a block with no gold, you `backtrack` and try another route. After exploring from all starting points.\uD83D\uDD25\uD83D\uDD25
And this way we'll  complete problem \uD83E\uDD73 ,  look\uD83D\uDC41\uFE0F at approch...

# Dont Forget to Vote\u2B06\uFE0F

# Code\uD83C\uDFAF
```javascript []
var getMaximumGold = function(grid) {
    let row = grid.length
    let col = grid[0].length
    let maxGold = 0

    const dfsBacktrack = (i,j,currentGold) =>{
        if(i<0 || j<0 || i>=row || j>=col || grid[i][j]==0){
            return 0;
        }//out of bound conditions

        const goldInCurrentCell = grid[i][j]
        currentGold += goldInCurrentCell

        //mark Visited 
        grid[i][j] = 0

        //update Max Gold
        maxGold = Math.max(maxGold , currentGold)

        //traverse all dir 
        dfsBacktrack(i+1,j,currentGold)
        dfsBacktrack(i-1,j,currentGold)
        dfsBacktrack(i,j+1,currentGold)
        dfsBacktrack(i,j-1,currentGold)

        //backtrack
        grid[i][j] =goldInCurrentCell
    }


    //main 
    for(let i=0 ; i<row ; i++){
        for(let j=0 ; j<col ; j++){
            if(grid[i][j] !== 0){
                dfsBacktrack(i, j, 0)
            }
        }
    }

    return maxGold
};
```
```cpp []
class Solution {
public:
    int getMaximumGold(vector<vector<int>>& grid) {
        int m = grid.size();
        int n = grid[0].size();
        int maxGold = 0;
        
        function<void(int,int,int)> dfsBacktrack = [&](int i, int j, int currentGold) {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
                return;
            }
            
            int goldInCurrentCell = grid[i][j];
            currentGold += goldInCurrentCell;
            maxGold = max(maxGold, currentGold);
            
            int temp = grid[i][j];
            grid[i][j] = 0;
            
            dfsBacktrack(i + 1, j, currentGold);
            dfsBacktrack(i - 1, j, currentGold);
            dfsBacktrack(i, j + 1, currentGold);
            dfsBacktrack(i, j - 1, currentGold);
            
            grid[i][j] = temp;
        };
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 0) {
                    dfsBacktrack(i, j, 0);
                }
            }
        }
        
        return maxGold;
    }
};
```
```java []
class Solution {
    public int getMaximumGold(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        int maxGold = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 0) {
                    maxGold = Math.max(maxGold, dfsBacktrack(grid, i, j, 0));
                }
            }
        }
        
        return maxGold;
    }
    
    private int dfsBacktrack(int[][] grid, int i, int j, int currentGold) {
        int m = grid.length;
        int n = grid[0].length;
        
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
            return currentGold;
        }
        
        int goldInCurrentCell = grid[i][j];
        currentGold += goldInCurrentCell;
        grid[i][j] = 0;
        
        int maxGold = Math.max(
            Math.max(
                dfsBacktrack(grid, i + 1, j, currentGold),
                dfsBacktrack(grid, i - 1, j, currentGold)
            ),
            Math.max(
                dfsBacktrack(grid, i, j + 1, currentGold),
                dfsBacktrack(grid, i, j - 1, currentGold)
            )
        );
        
        grid[i][j] = goldInCurrentCell;
        
        return maxGold;
    }
}

```
```python []
class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int:
        m = len(grid)
        n = len(grid[0])
        maxGold = 0
        
        def dfsBacktrack(i, j, currentGold):
            nonlocal maxGold
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
                return
            goldInCurrentCell = grid[i][j]
            currentGold += goldInCurrentCell
            maxGold = max(maxGold, currentGold)
            temp = grid[i][j]
            grid[i][j] = 0
            dfsBacktrack(i + 1, j, currentGold)
            dfsBacktrack(i - 1, j, currentGold)
            dfsBacktrack(i, j + 1, currentGold)
            dfsBacktrack(i, j - 1, currentGold)
            grid[i][j] = temp
        
        for i in range(m):
            for j in range(n):
                if grid[i][j] != 0:
                    dfsBacktrack(i, j, 0)
        
        return maxGold
```
```ruby []
# @param {Integer[][]} grid
# @return {Integer}
def get_maximum_gold(grid)
    m = grid.length
    n = grid[0].length
    max_gold = 0
    
    dfs_backtrack = lambda do |i, j, current_gold|
        return if i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0
        
        gold_in_current_cell = grid[i][j]
        current_gold += gold_in_current_cell
        max_gold = [max_gold, current_gold].max
        
        temp = grid[i][j]
        grid[i][j] = 0
        
        dfs_backtrack.call(i + 1, j, current_gold)
        dfs_backtrack.call(i - 1, j, current_gold)
        dfs_backtrack.call(i, j + 1, current_gold)
        dfs_backtrack.call(i, j - 1, current_gold)
        
        grid[i][j] = temp
    end
    
    (0...m).each do |i|
        (0...n).each do |j|
            if grid[i][j] != 0
                dfs_backtrack.call(i, j, 0)
            end
        end
    end
    
    max_gold
end
```
```kotlin []
class Solution {
    fun getMaximumGold(grid: Array<IntArray>): Int {
        val m = grid.size
        val n = grid[0].size
        var maxGold = 0
        
        fun dfsBacktrack(i: Int, j: Int, currentGold: Int) {
            if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) {
                return
            }
            
            val goldInCurrentCell = grid[i][j]
            val updatedGold = currentGold + goldInCurrentCell
            maxGold = maxOf(maxGold, updatedGold)
            
            val temp = grid[i][j]
            grid[i][j] = 0
            
            dfsBacktrack(i + 1, j, updatedGold)
            dfsBacktrack(i - 1, j, updatedGold)
            dfsBacktrack(i, j + 1, updatedGold)
            dfsBacktrack(i, j - 1, updatedGold)
            
            grid[i][j] = temp
        }
        
        for (i in 0 until m) {
            for (j in 0 until n) {
                if (grid[i][j] != 0) {
                    dfsBacktrack(i, j, 0)
                }
            }
        }
        
        return maxGold
    }
}
```

# Approach\uD83D\uDD25\uD83D\uDCAF

1. Start by setting up some constants and variables: 
   - Create a constant array called `DIRECTIONS` representing up, down, left, and right movements.
   - Initialize variables for the number of `rows` and `cols` in the grid, and a variable `maxGold` to keep track of the maximum gold collected.

2. Define a function called `dfsBacktrack` to find the maximum gold path:
   - If the current cell has no gold or is outside the grid, return `0`.
   - Set a local variable `maxGold` to `0`.
   - Mark the current cell as visited and save its original gold value.
   - Explore each adjacent cell and call `dfsBacktrack` on them.
   - Update `maxGold` if a better path is found.
   - Restore the current cell's original gold value before backtracking.
   - Return the sum of `maxGold` and the original gold value of the current cell.

3. Iterate through each cell in the grid:
   - For each cell, call `dfsBacktrack` to find the maximum gold path starting from that cell.
   - Update `maxGold` if a better path is found.

4. Return `maxGold`, which represents the maximum gold collected from any path.



