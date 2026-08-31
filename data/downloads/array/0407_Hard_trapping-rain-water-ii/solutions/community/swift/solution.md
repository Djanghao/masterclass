# Accepted Solution in iOS Swift || Priority Queue (Min Heap) with BFS

**Author:** naveen_gcode
**Votes:** 0
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/5428060/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/5428060/)

---


# Approach
# **Priority Queue (Min Heap) with BFS**

#### 1. **Initialization and Edge Cases Handling:**
   - **Input Validation**: Start by checking if the `heightMap` is empty (`m = 0` or `n = 0`). If so, return `0` since there are no buildings to trap water.
   - **Variables Initialization**: Initialize necessary variables:
     - `visited`: 2D boolean array to track visited cells.
     - `pq`: Min-heap priority queue to process cells based on their heights.
     - `result`: Accumulator to store the total volume of trapped rainwater.

#### 2. **Boundary Cells Initialization:**
   - **Pushing Boundary Cells**: Traverse all boundary cells (first and last rows, first and last columns) of the grid.
     - Push each boundary cell into the priority queue (`pq`).
     - Mark these cells as visited in the `visited` array.

#### 3. **Breadth-First Search (BFS) Using Priority Queue:**
   - **Process Cells in Priority Order**: While the priority queue (`pq`) is not empty:
     - Dequeue the cell with the smallest height (`current`) from the priority queue.
     - Explore its neighboring cells (up, down, left, right).
       - For each valid neighboring cell (`next`):
         - If `next` has not been visited:
           - Mark `next` as visited.
           - Calculate the potential water level at `next`:
             - If `next.height` is less than `current.height`, water can be trapped.
             - Accumulate the trapped water volume into `result`.
           - Push `next` into the priority queue with its height adjusted to `max(next.height, current.height)`.
             - This ensures that `next` can potentially trap water up to the level of `current` or higher.

#### 4. **Return Result:**
   - Once all cells are processed, `result` contains the total volume of rainwater trapped between buildings.


# Code
```
class Solution {
    func trapRainWater(_ heightMap: [[Int]]) -> Int {
        let m = heightMap.count
        guard m > 0 else { return 0 }
        let n = heightMap[0].count
        guard n > 0 else { return 0 }
        
        var visited = Array(repeating: Array(repeating: false, count: n), count: m)
        var pq = PriorityQueue<Cell>(ascending: true) { $0.height < $1.height }
        var result = 0
        
        // Push all boundary cells into the priority queue
        for i in 0..<m {
            for j in 0..<n {
                if i == 0 || i == m - 1 || j == 0 || j == n - 1 {
                    pq.push(Cell(row: i, col: j, height: heightMap[i][j]))
                    visited[i][j] = true
                }
            }
        }
        
        // Directions for neighboring cells (up, down, left, right)
        let directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
        
        while !pq.isEmpty {
            let cell = pq.pop()!
            
            for dir in directions {
                let newRow = cell.row + dir.0
                let newCol = cell.col + dir.1
                
                if newRow >= 0 && newRow < m && newCol >= 0 && newCol < n && !visited[newRow][newCol] {
                    let newHeight = heightMap[newRow][newCol]
                    visited[newRow][newCol] = true
                    if newHeight < cell.height {
                        result += cell.height - newHeight
                    }
                    pq.push(Cell(row: newRow, col: newCol, height: max(newHeight, cell.height)))
                }
            }
        }
        
        return result
    }
}

struct Cell {
    let row: Int
    let col: Int
    let height: Int
}



struct PriorityQueue<Element> {
    private var heap: [Element]
    private let comparator: (Element, Element) -> Bool
    
    init(ascending: Bool, comparator: @escaping (Element, Element) -> Bool) {
        if ascending {
            self.comparator = comparator
        } else {
            self.comparator = { !comparator($0, $1) }
        }
        self.heap = []
    }
    
    var isEmpty: Bool {
        return heap.isEmpty
    }
    
    mutating func push(_ element: Element) {
        heap.append(element)
        siftUp(heap.count - 1)
    }
    
    mutating func pop() -> Element? {
        if heap.isEmpty {
            return nil
        }
        if heap.count == 1 {
            return heap.removeFirst()
        }
        heap.swapAt(0, heap.count - 1)
        let element = heap.removeLast()
        siftDown(0)
        return element
    }
    
    private mutating func siftUp(_ index: Int) {
        var child = index
        var parent = (child - 1) / 2
        while child > 0 && comparator(heap[child], heap[parent]) {
            heap.swapAt(child, parent)
            child = parent
            parent = (child - 1) / 2
        }
    }
    
    private mutating func siftDown(_ index: Int) {
        var parent = index
        while true {
            var leftChild = 2 * parent + 1
            var rightChild = 2 * parent + 2
            var minIndex = parent
            if leftChild < heap.count && comparator(heap[leftChild], heap[minIndex]) {
                minIndex = leftChild
            }
            if rightChild < heap.count && comparator(heap[rightChild], heap[minIndex]) {
                minIndex = rightChild
            }
            if minIndex == parent {
                break
            }
            heap.swapAt(parent, minIndex)
            parent = minIndex
        }
    }
}
```

### Key Points:
- **Priority Queue**: Used to process cells in order of increasing height, ensuring that lower cells are processed first to calculate trapped water accurately.
- **BFS Strategy**: Ensures that each cell and its neighbors are visited and processed efficiently, leveraging the priority queue for optimal height management.
- **Visited Array**: Prevents re-processing of cells and ensures each cell's water trapping capacity is calculated only once.

### Complexity:
- **Time Complexity**: O(m * n * log(m + n)) due to priority queue operations combined with BFS traversal.
- **Space Complexity**: O(m * n) for the `visited` array and the priority queue, as they both potentially store all cells of the grid.