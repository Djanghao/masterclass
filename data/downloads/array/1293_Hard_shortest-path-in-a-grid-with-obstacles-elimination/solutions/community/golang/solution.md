# Modified BFS with Pruning Redundant Paths - beats 92% in Time and 96% in Space

**Author:** mochii
**Votes:** 3
**Link:** [https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4455609/](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/solutions/4455609/)

---

# Intuition
**Layered Exploration (BFS Nature)**: The core of BFS is its layered exploration, where each step moves uniformly outward from the starting point. This ensures that the first time you reach the target, you do so with the minimum number of steps. In the context of the grid, this means checking all paths of length 1, then all paths of length 2, and so on, until the destination is reached.

**State Representation (Location + Remaining Barrier Removals):** Each state in the BFS is not just a grid location but also includes how many barriers you can still remove (k). This allows the algorithm to treat the same physical location differently depending on how many removals are left, leading to different potential future paths.

**Efficiency through Pruning Redundant Paths:** The key to making the algorithm efficient is avoiding unnecessary exploration. If you reach a cell with fewer remaining barrier removals `(k)` than a previous visit, there's no need to explore from that state again since it offers no new possibilities. This pruning significantly reduces the number of states to consider.

**The Seen Map (Optimizing Exploration):** The use of a seen map to track the best `k` value for each cell is crucial. It ensures that each cell is only re-explored if it's reached with a higher remaining `k` value, thus optimizing the BFS exploration.

**First Arrival Guarantees Shortest Path:** Due to the nature of BFS, the first time the algorithm reaches the destination, it guarantees that the path taken is the shortest possible considering the constraints. This is because BFS explores all possible paths of level `n` before it explores any paths of level `n+1`.

# Approach
**State Representation**: Each state in the search is represented by a structure StepState that includes the current cell coordinates (x, y), the number of steps taken to reach that cell, and the remaining count of barriers (k) that can still be removed.

**Breadth-First Search**: The algorithm uses BFS to explore the grid. It starts from the top-left corner of the grid, considering the initial number of barriers that can be removed.

**Queue for States**: A queue is used to manage the exploration. It holds states to be explored next. Initially, it contains only the starting state.

**Tracking Visited States**: A map named seen is used to track the visited states. Unlike traditional BFS, this map keeps track of the best k value (maximum remaining barriers that can be removed) for each cell, instead of just marking cells as visited.

**Exploring Neighbors**: For each state, the algorithm explores its neighboring cells (up, down, left, right). It calculates the new state considering the barrier removal count (k). If a barrier is encountered, k is decremented.

**Pruning Redundant Paths**: Before a new state is added to the queue, the algorithm checks if this new state represents a better scenario (higher k) than any previously recorded state for the same cell. If not, the state is skipped to avoid redundant exploration.

**Goal Check**: If the bottom-right corner is reached, the algorithm returns the number of steps taken to get there.

**Handling Unreachable Scenarios**: If the queue is exhausted and the bottom-right corner has not been reached, the algorithm returns -1, indicating the target is unreachable within the given constraints.

# Complexity
- Time complexity:
    1. The time complexity is primarily driven by the breadth-first search (BFS). In the worst case, the algorithm might explore every cell in the grid multiple times (once for each distinct k value).

   2.  K Value: The maximum number of distinct states for each cell is determined by `k` (the number of walls you can eliminate). In the worst case, you might have to explore each cell with different k values ranging from `0` to `k`.

   3.  Total States: The total number of distinct states is `O(m*n*k)`. For each state, you perform a constant amount of work (checking bounds, updating the queue, etc.). Thus, the worst-case time complexity is `O(m * n * k)`.

- Space complexity:
    1. `Queue` Size: The queue used in BFS can hold at most `O(m * n * k)` states since each state is characterized by its position and the remaining k value.

    2. `Seen` Map: The seen map keeps track of the best k value for each cell. Since there are m * n cells and you store a single integer (the best k) for each cell, the space used by this map is `O(m * n)`.

    3. Total Space Usage: The dominant factor here is the size of the queue. Therefore, the space complexity is also `O(m * n * k)`.

# Code
```
type StepState struct {
    steps int
    x, y  int
    k     int
}

func shortestPath(grid [][]int, k int) int {
    rows := len(grid)
    cols := len(grid[0])
    if k >= rows+cols-2 {
        return rows + cols - 2
    }

    q := []StepState{}
    seen := make(map[[2]int]int)

    start := StepState{0, 0, 0, k}
    q = append(q, start)
    // The seen map tracks the maximum k value for each cell ([x, y]).
    // It's a map from a 2-element array (representing the cell coordinates) to an integer (the best k for that cell).
    seen[[2]int{0, 0}] = k 

    dirs := [][]int{{0, 1}, {0, -1}, {-1, 0}, {1, 0}}

    for len(q) > 0 {
        cur := q[0]
        q = q[1:]

        if cur.x == rows-1 && cur.y == cols-1 {
            return cur.steps
        }

        for _, dir := range dirs {
            x, y := cur.x+dir[0], cur.y+dir[1]
            if x < 0 || y < 0 || x >= rows || y >= cols {
                continue
            }

            nextK := cur.k - grid[x][y]
            if nextK >= 0 {
                cell := [2]int{x, y}
                if val, exists := seen[cell]; !exists || nextK > val {
                    // Before enqueueing a new state, check if this state has a better k (higher remaining number of barriers that can be removed) than the best one recorded in seen for that cell.
                    // If the state is either not seen before or has a higher k, it is added to the queue and seen is updated.
                    seen[cell] = nextK
                    q = append(q, StepState{cur.steps + 1, x, y, nextK})
                }
            }
        }
    }
    return -1
}

```