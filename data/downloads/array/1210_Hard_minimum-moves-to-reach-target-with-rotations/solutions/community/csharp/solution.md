# C# BFS Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/5522864/](https://leetcode.com/problems/minimum-moves-to-reach-target-with-rotations/solutions/5522864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->To solve the problem of finding the minimum number of moves for the snake to reach the target position in the grid, we can use a breadth-first search (BFS) algorithm. This algorithm will explore all possible moves and rotations of the snake in the grid to find the shortest path to the target.
____

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization: We use a queue to perform the BFS. Each element in the queue represents the snake's
//  current position, its orientation (horizontal or virtical), and the number of moves taken so far.
//  BFS Loop: We dequeue an element and check if it has reached the target. If so, we return the number
//  of moves.
//  Possible Moves: We dequeue an element and check if it has reached the target. If so, we return the 
//  number of moves.
//  Return result: If we exhaust the queue without finding a solution, we return -1 indicating that there
//  is no valid path.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^2).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2).
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution
{
    public int MinimumMoves(int[][] grid)
    {
        int n = grid.Length;
        var visited = new HashSet<(int, int, int)>();
        var queue = new Queue<(int, int, int, int)>();
        queue.Enqueue((0, 0, 0, 0));
        visited.Add((0, 0, 0));
        
        while (queue.Count > 0)
        {
            var (x, y, state, moves) = queue.Dequeue();
            
            if (x == n - 1 && y == n - 2 && state == 0)
                return moves;
            
            // Move right
            if (state == 0)
            {
                if (y + 2 < n && grid[x][y + 2] == 0 && !visited.Contains((x, y + 1, 0)))
                {
                    queue.Enqueue((x, y + 1, 0, moves + 1));
                    visited.Add((x, y + 1, 0));
                }
            }
            else
            {
                if (y + 1 < n && grid[x][y + 1] == 0 && grid[x + 1][y + 1] == 0 && !visited.Contains((x, y + 1, 1)))
                {
                    queue.Enqueue((x, y + 1, 1, moves + 1));
                    visited.Add((x, y + 1, 1));
                }
            }
            
            // Move down
            if (state == 0)
            {
                if (x + 1 < n && grid[x + 1][y] == 0 && grid[x + 1][y + 1] == 0 && !visited.Contains((x + 1, y, 0)))
                {
                    queue.Enqueue((x + 1, y, 0, moves + 1));
                    visited.Add((x + 1, y, 0));
                }
            }
            else
            {
                if (x + 2 < n && grid[x + 2][y] == 0 && !visited.Contains((x + 1, y, 1)))
                {
                    queue.Enqueue((x + 1, y, 1, moves + 1));
                    visited.Add((x + 1, y, 1));
                }
            }
            
            // Rotate clockwise
            if (state == 0 && x + 1 < n && grid[x + 1][y] == 0 && grid[x + 1][y + 1] == 0 && !visited.Contains((x, y, 1)))
            {
                queue.Enqueue((x, y, 1, moves + 1));
                visited.Add((x, y, 1));
            }
            
            // Rotate counterclockwise
            if (state == 1 && y + 1 < n && grid[x][y + 1] == 0 && grid[x + 1][y + 1] == 0 && !visited.Contains((x, y, 0)))
            {
                queue.Enqueue((x, y, 0, moves + 1));
                visited.Add((x, y, 0));
            }
        }
        
        return -1;
    }
}
```