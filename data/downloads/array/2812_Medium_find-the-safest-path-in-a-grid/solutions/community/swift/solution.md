# Swift | O(n²) solution with deque

**Author:** VladimirTheLeet
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5161214/](https://leetcode.com/problems/find-the-safest-path-in-a-grid/solutions/5161214/)

---

# Complexity
- Time complexity: $O(n^2)$
- Space complexity: $O(n^2)$

# Code
```
import Collections
class Solution
{
    func maximumSafenessFactor(_ grid: [[Int]]) -> Int
    {
        let n = grid.count
        if grid[0][0] == 1 || grid[n-1][n-1] == 1 { return 0 }

        // Mark empty cells as -1, thieves as 0, and push thieves to the queue
        var safenessGrid: [[Int]] = Array(repeating: Array(repeating: -1, count: n), count: n)
        var deque: Deque<(i: Int, j: Int, safeness: Int)> = []
        for i in 0..<n {
        for j in 0..<n where grid[i][j] == 1
        {
            deque.append((i, j, 0))
            safenessGrid[i][j] = 0
        }}

        // Auxiliary function, returns in-grid neighbors of a cell
        func neighbors(_ i: Int, _ j: Int) -> [(Int, Int)]
        {
            var arr: [(Int, Int)] = []
            if i > 0 { arr.append((i-1, j)) }
            if i < n-1 { arr.append((i+1, j)) }
            if j > 0 { arr.append((i, j-1)) }
            if j < n-1 { arr.append((i, j+1)) }
            return arr
        }

        // Calculate safeness for each cell in grid using multi-source BFS
        while let (i, j, safeness) = deque.popFirst()
        {
            for (ni, nj) in neighbors(i, j) where safenessGrid[ni][nj] == -1
            {
                safenessGrid[ni][nj] = safeness + 1
                deque.append((ni, nj, safeness + 1))
            }
        }

        var maxSafeness = safenessGrid[0][0]
        // deque will prioritize cells with higher safeness
        deque = [(0, 0, safenessGrid[0][0])]
        safenessGrid[0][0] = 0 // mark as visited
        while let (i, j, safeness) = deque.popFirst() 
        {
            maxSafeness = min(maxSafeness, safeness)
            if i == n-1 && j == n-1 { return maxSafeness } // reached destination

            // process neighbor cells
            for (ni, nj) in neighbors(i, j) where safenessGrid[ni][nj] != 0
            {
                // cells within our safety limit will be evaluated first
                if safenessGrid[ni][nj] >= maxSafeness { 
                    deque.prepend((ni, nj, safenessGrid[ni][nj]))
                }
                else { // cells with safeness value maxSafeness-1 will be evaluated after
                    deque.append((ni, nj, safenessGrid[ni][nj]))
                }
                safenessGrid[ni][nj] = 0 // mark as visited
            }
        }
        return 0 // hasn't found any path with safeness > 0 
    }
}
```