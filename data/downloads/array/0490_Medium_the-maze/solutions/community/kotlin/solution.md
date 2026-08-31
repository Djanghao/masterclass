# simple dfs

**Author:** kshitij6325
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze/solutions/4140890/](https://leetcode.com/problems/the-maze/solutions/4140890/)

---

# Intuition
The only thing is to find the next cell to move, which can either be the cell before wall or the edge. 

Eg: If the maze is [0, 0, 0, 1, 0] and your are at [0, 1], you can either move to left most cell at the edge (0, 0) or cell before wall (0, 2). So next destination can be (0,0) or (0,2). 
# Approach
It's a simple dfs (you can also use bfs), the next cell can be easily found by checking in left, right, top and down directions by running a simple loop. Keep a set to mark visited cells to avoid any infinite loops.

# Complexity
- Time complexity:
**O(n^2)** , We will be visiting each cell exactly once.

- Space complexity:
**O(n^2)**, for the hashset

# Code
```
class Solution {
    
    fun hasPath(maze: Array<IntArray>, start: IntArray, destination: IntArray): Boolean {
        return hasPath(start[0], start[1], destination, hashSetOf(), maze)
    }


    fun hasPath(row: Int, col: Int, dest: IntArray, visited: HashSet<String>, grid: Array<IntArray>): Boolean {

        if (row == dest[0] && col == dest[1]) {
            return true
        }

        if (visited.contains("$row,$col")) {
            return false
        }

        visited.add("$row,$col")
        
        
        //checking for left wall
        var left = 0
        for (j in col downTo 0) {
            if (grid[row][j] == 1) {
                left = j + 1
                break
            }
        }

        if (hasPath(row, left, dest, visited, grid)) {
            return true
        }

        //checking for right wall
        var right = grid[0].size - 1
        for (j in col..grid[0].size - 1) {
            if (grid[row][j] == 1) {
                right = j - 1
                break
            }
        }
        
        if(hasPath(row, right , dest, visited, grid)) {
            return true
        }

        //checking for top wall
        var top = 0
        for (j in row downTo 0) {
            if (grid[j][col] == 1) {
                top = j + 1
                break
            }
        }
        
        if(hasPath(top, col , dest, visited, grid)) {
            return true
        }
        
        //checking for bottom wall
        var down = grid.size - 1
        for (j in row..grid.size - 1) {
            if (grid[j][col] == 1) {
                down = j - 1
                break
            }
        }

         if(hasPath(down, col , dest, visited, grid)) {
            return true
        }

        return false
    }
}
```