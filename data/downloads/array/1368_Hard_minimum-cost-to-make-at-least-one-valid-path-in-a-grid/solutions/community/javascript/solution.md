# 1368. Minimum Cost to Make at Least One Valid Path in a Grid Solution

**Author:** jamessalinas
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/6109819/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/6109819/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This solution uses a 0-1 BFS approach to solve the problem. First, initialize a distance matrix with Infinity values. Next, use a deque to process cells, with zero-cost moves added to the front and cost-1 moves added to the back. For each cell, explore all four directions: if following the current sign, add to front of deque (cost 0). If changing direction, add to back of deque (cost 1). Continue until reaching the bottom-right cell.  

This algorithm efficiently finds the minimum cost to create a valid path from top-left to bottom-right of the grid using a 0-1 BFS approach. 

# Approach
<!-- Describe your approach to solving the problem. -->
Set (m) to 'length of grid'. Set (n) to 'length of grid[0]'. Set (dist) to 'Array(m).fill().map(() => Array(n).fill(Infinity))'. Set (dequeue) to '[[0, 0, 0]]'. Set (dirs) to '[[0, 1], [0, -1], [1, 0], [-1, 0]]'. Set (dist[0][0]) to 0. while 'dequeue' is not empty, set ([cost, row, col]) to 'dequeue.shift()'. If cost is greater than 'dist[row][col]', continue. For i from 0 to 3, set (newRow) to 'row + dirs[i][0]'. Set (newCol) to 'col + dirs[i][1]'. If newRow is greater than or equal to 0 AND newRow is less than m AND newCol is greater than or equal to 0 AND newCol is less than n, set (newCost) to 'cost + (grid[row][col] === i + 1 ? 0 : 1)'. If newCost is less than 'dist[newRow][newCol]', set (dist[newRow][newCol] = newCost) to newCost. If grid[row][col] is equal to 'i + 1', unshift ([newCost, newRow, newCol]) from 'dequeue'. Else, push ([newCost, newRow, newCol]) to dequeue. Return dist[m-1][n-1]. 

We use a deque to handle zero and one cost moves efficiently. Our distance matrix tracks minimum cost to reach each cell. Our direction handling checks if current direction matches grid value. We ensure moves stay within grid boundaries. 

# Complexity
- Time complexity: O(mn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The algorithm has O(mn) time complexity where m and n are the dimensions of the grid. 

- Space complexity: O(mn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The algorithm has O(mn) space complexity to store the distance matrix. 

# Code
```javascript []
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const dist = Array(m).fill().map(() => Array(n).fill(Infinity));
    const deque = [[0, 0, 0]]; // [cost, row, col]
    const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    dist[0][0] = 0;
    
    while (deque.length > 0) {
        const [cost, row, col] = deque.shift();
        
        if (cost > dist[row][col]) continue;
        
        for (let i = 0; i < 4; i++) {
            const newRow = row + dirs[i][0];
            const newCol = col + dirs[i][1];
            
            if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                const newCost = cost + (grid[row][col] === i + 1 ? 0 : 1);
                
                if (newCost < dist[newRow][newCol]) {
                    dist[newRow][newCol] = newCost;
                    if (grid[row][col] === i + 1) {
                        deque.unshift([newCost, newRow, newCol]);
                    } else {
                        deque.push([newCost, newRow, newCol]);
                    }
                }
            }
        }
    }
    
    return dist[m-1][n-1];
};
```