# Ruby O(n) - BFS - Faster than 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2277142/](https://leetcode.com/problems/shortest-path-in-binary-matrix/solutions/2277142/)

---

```
# @param {Integer[][]} grid
# @return {Integer}
def shortest_path_binary_matrix(grid)
  return -1 if grid[0][0] != 0
  n = grid.size - 1
  return -1 if grid[n][n] != 0

  queue = [[0, 0, 1]]

  while (i, j, length = queue.shift)
    return length if i == n && j == n
    add_to_queue(queue, grid, i - 1, j, length + 1) if i > 0 && grid[i - 1][j] == 0
    add_to_queue(queue, grid, i + 1, j, length + 1) if i < n && grid[i + 1][j] == 0
    add_to_queue(queue, grid, i, j - 1, length + 1) if j > 0 && grid[i][j - 1] == 0
    add_to_queue(queue, grid, i, j + 1, length + 1) if j < n && grid[i][j + 1] == 0
    add_to_queue(queue, grid, i - 1, j - 1, length + 1) if i > 0 && j > 0 && grid[i - 1][j - 1] == 0
    add_to_queue(queue, grid, i - 1, j + 1, length + 1) if i > 0 && j < n && grid[i - 1][j + 1] == 0
    add_to_queue(queue, grid, i + 1, j - 1, length + 1) if i < n && j > 0 && grid[i + 1][j - 1] == 0
    add_to_queue(queue, grid, i + 1, j + 1, length + 1) if i < n && j < n && grid[i + 1][j + 1] == 0
  end

  -1
end

def add_to_queue(queue, grid, i, j, length)
  grid[i][j] = 2
  queue << [i, j, length]
end