# Dijkstra's algorithm using Swift Collections (Easy for Interview)

**Author:** sonnytron
**Votes:** 0
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/5878620/](https://leetcode.com/problems/swim-in-rising-water/solutions/5878620/)

---

# Intuition
Greedy solution using Dijkstra's algorithm and Swift Collections

# Approach
During an interview, you should take advantage of API and SDK that reduces the complexity of your solution. Using Swift Collections will show a strong understanding of Swift language development, and time management skills. Swift Collections has a Heap DS with min/max element lookup. 
  
Begin by storing a set of visited cells to reduce redundancy. Insert the very first cell into it. 

Create a cell struct that conforms to Comparable so it can be used for the Heap. It should have time (height at the cell), row and column. 

1. While the heap isn't empty, complete the following steps. 
2. Remove the min (smallest height) from the stack. 
3. If the row/col is at last cell (bottom right), return its height/time. 
4. Go to each direction surrounding the cell, if valid (not visited and not out of bounds). 
5. Insert the new cell into the heap, but the time should be the max of that cell's elevation and the previous cell's. 
6. Repeat steps 2 to 5. 

The reason for step 5, is that if a cell at row/col's height is 1, but the cell before it had a height of 2 (on that path), then the minimum height for that path is 2 and will be 2 until a higher elevation is reached. 

The advantage of using a min Heap is that you will not travel down higher cost paths until you have no choice. 

This is an iteration of NeetCode's solution.

# Complexity
- Time complexity:
O((n^2)*log (n))

- Space complexity:
O(N^2)

*I noticed some Dijkstra's solutions claiming the space complexity is O(N), please recheck your math, our Heap can have numerous paths at each point and can get quite large*

# Code
```swift []
import Collections
struct Cell: Comparable {
    let time, r, c: Int
    static func < (lhs: Cell, rhs: Cell) -> Bool {
        return lhs.time < rhs.time
    }
}
class Solution {
    func swimInWater(_ grid: [[Int]]) -> Int {
        let (n, m) = (grid.count, grid[0].count)
        var visited = Set([[0, 0]])
        var minHeap = Heap<Cell>()
        minHeap.insert(Cell(time: grid[0][0], r: 0, c: 0))
        let directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        while !minHeap.isEmpty {
            let cell = minHeap.removeMin()
            if cell.r == n - 1, cell.c == m - 1 { return cell.time }
            for (dr, dc) in directions {
                let (row, col) = (cell.r + dr, cell.c + dc)
                if row < 0 || col < 0 || row == n || col == m || visited.contains([row, col]) { continue }
                visited.insert([row, col])
                minHeap.insert(Cell(time: max(cell.time, grid[row][col]), r: row, c: col))
            }
        }
        return -1
    }
}
```