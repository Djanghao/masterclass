# Binary Search + DFS | Python / JS Solution

**Author:** TFDLeeter
**Votes:** 11
**Link:** [https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698534/](https://leetcode.com/problems/last-day-where-you-can-still-cross/solutions/3698534/)

---

Hello **Tenno Leetcoders**, 

For this problem, we are given a binary matrix representing land and water, where `0` represents land and `1` represents water, we want to find the `last day where it is possible to walk from the top row to the bottom row by only walking on land cells`. Each day, a new cell becomes flooded with water, and we are given a list of cells that will be flooded on each day.

### Explanation

Since, this problem involves in finding the last day where it is possible to cross from `top` to `bottom`. As the days progress, more cells become flooded with water. 

- If we were to consider day `x` where it is possible to cross, this represents that all subsequent days `x+1, x+2, etc` will also be possible to cross

- If we were to consider a day `y` where it is not possible to cross, this represents that all previous days `y+1, y+2, etc` will not be possible to cross.

Thus, for each day, we have to perform a decision to see if its possible to cross from top to bottom on a given specific day. We can find the solution to this decision by performing a search for the last day where crossing is possible. 

Therefore, `Binary search` can be applicable to this problem as it is an efficient technique to help us find the last day where it is possible to cross from top to bottom

Using `Binary search`, we are also going to incorporate `Iterative DFS` to help us check the grid to see where it is possible to reach the bottom row from the top row only by walking on land cells as cells will be flooded until a certain day 

#### existingPath()

This method will help keep track of the flooded cells using our grid. We are also going to perform iterative DFS on our grid to check if it is possible to reach the bottom row from the top row only walking on land cells

- Start by creating a grid to represent the binary matrix with rows/ cols and initialize the grid with all 0s, indicating land cells

- We are going to simulate the flooding process and update the grid accordingly. For each day up until `middle`, we are going to extract the coordinates from `cells[i]`, represented as a cell that will be flooded on the `ith` day, and mark the corresponding cell in the grid as water `1`

- Now, we are going to determine if its possible to reach the bottom row from the top row on land cells, considering the cells will be flooded until a certain day `middle`. To determine this, we are going to perform the following:

    1) Create a stack to store the coordinates of the cells to visit during dfs
    
    2) Add the top row of land cells to the stack and mark them as visited by changing it to `1`
    
    3) Iterate through the stack until it is empty and do the following:
    
        - Pop a cell coordinate of row/ col from the stack
        
        - Check if the popped cell is in the bottom row (r == row - 1). this represents we found a path from top to bottom so return True/true for the binary search
        
        - Iterate over the 4 directions of left, right, top, bottom and check if the neighboring cells is a valid land cell of 0 and it is within the grid bound. 
        
        - If so, push the coordinates onto the stack and mark it as visited by changing its value to a 1
        
        
        - If DFS is finished without finding the path to the bottom, we return False/false for our binary search 

For JavaScript approach, we should create a deep copy of grid as modifying the grid directly will cause incorrect outputs.

In Python, it iteratively marks the cells as flooded in the grid during the flood-fill operation, and those changes persist across iterations of the binary search. This is why creating a deep copy of the grid is not necessary in the Python solution

So, in JavaScript, to address this issue and ensure correct results, we should create a deep copy of the grid array in JavaScript. This will ensure that each iteration starts with a clean grid without any lingering flooded cells from the previous iteration.
        
        
#### Binay search

- Set up our left and right pointer:

    - Left pointer will be set to 0, representing day 0
    
    - Right pointer will be set to the length of the cell array, representing the last day
    
- Perform binary search until left pointer becomes out of bounds and do the following:

    1) Calculate the middle index
    
    2) Using existingPath method, we will call the method with our calculated middle index to check if its possible to cross
    
        - If possible (true/True), we update the possible path variable as we check for the max of possible path and middle to ensure we store the maximum possible day where crossing is possible. We then set the left pointer to `mid + 1` to search for an earlier day where crossing is still possible
        
        
        - If not possible (false/False), set the right pointer to `mid - 1` to search for an earlier day where crossing is still possible
        
- After the binary search iteration, we return possible path which represents the last day where it is possible to cross from top to bottom 


        
        
# Code

**Python**

```
    def latestDayToCross(self, row: int, col: int, cells: List[List[int]]) -> int:
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        
        def existingPath(mid):
            grid = [[0] * col for _ in range(row)]
            
            for i in range(mid):
                r, c = cells[i]
                grid[r-1][c-1] = 1
            
            # Perform a depth-first search to check if there is a path from top to bottom
            stack = []
            for c in range(col):
                if grid[0][c] == 0:
                    stack.append((0, c))
                    grid[0][c] = 1
            
            while stack:
                r, c = stack.pop()
                if r == row - 1: return True
                for dr, dc in directions:
                    nr, nc = r + dr, c + dc
                    if 0 <= nr < row and 0 <= nc < col and grid[nr][nc] == 0:
                        stack.append((nr, nc))
                        grid[nr][nc] = 1
                        
            return False

        left = 0
        right = len(cells)
        possible_path = 0
        
        while left <= right:
            mid = (left + right) // 2
            if existingPath(mid):
                possible_path = max(possible_path, mid)
                left = mid + 1
            else:
                right = mid - 1
        
        return possible_path
```

**JavaScript**
```
/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
var latestDayToCross = function(row, col, cells) {
    const grid = Array(row).fill(0).map(() => Array(col).fill(0))
    let left = 0, right = cells.length 
    let possiblePath = 0

    const existingPath = function(mid){
        // to avoid modifying the orginal grid so create deep copy
        const floodedGrid = grid.map((row) => [...row]);
        const stack = []
        for(let i = 0; i < mid; i++){
            const [r,c] = cells[i]
            floodedGrid[r-1][c-1] = 1
        }

        for(let c  = 0; c < col; c++){
            if (floodedGrid[0][c] === 0){
                stack.push([0, c])
                floodedGrid[0][c] = 1
            } 
        }
        while(stack.length){
            const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
            const [r, c] = stack.pop()

            if(r === row-1)return true

            for(const [dr, dc] of directions){
                const nr = r + dr
                const nc = c + dc

                if(nr >= 0 && nr < row && 
                    nc >= 0 && nc < col && 
                    floodedGrid[nr][nc] === 0
                    ){
                    stack.push([nr,nc])
                    floodedGrid[nr][nc] = 1
                }
            }
        }
        return false
    }


    while(left <= right){
        mid = Math.floor((left + right) / 2)
        if(existingPath(mid)){
            possiblePath = Math.max(possiblePath, mid)
            left = mid + 1
        }else {
            right = mid - 1
        }
    }

    return possiblePath

};
```
### Time Complexity: O(row * col)
### Space Complexity: O(row * col)

 
***Warframe's Darvo wants you to upvote this post  \uD83D\uDE4F\uD83C\uDFFB \u2764\uFE0F\u200D\uD83D\uDD25***

![image](./images/0.gif)