# Ruby O(n * n) - BFS - Faster than 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/shortest-bridge/solutions/2281782/](https://leetcode.com/problems/shortest-bridge/solutions/2281782/)

---

Did a little trick to use only 1 "queue" for the 2 BFS tasks

```
# @param {Integer[][]} grid
# @return {Integer}
def shortest_bridge(grid)
  n = grid.size - 1
  i = 0

  queue = []
  while i <= n
    j = 0
  
    while j <= n
      if grid[i][j] == 1
        add_to_queue(queue, grid, i, j, 0)
        return find_shortest(queue, grid, n)
      end
      
      j += 1
    end

    i += 1
  end
end

def find_shortest(queue, grid, n)
  k = 0
  while (i, j, _ = queue[k])
    add_to_queue(queue, grid, i - 1, j, 0) if i > 0 && grid[i - 1][j] == 1
    add_to_queue(queue, grid, i + 1, j, 0) if i < n && grid[i + 1][j] == 1
    add_to_queue(queue, grid, i, j - 1, 0) if j > 0 && grid[i][j - 1] == 1
    add_to_queue(queue, grid, i, j + 1, 0) if j < n && grid[i][j + 1] == 1
    k += 1
  end

  while (i, j, distance = queue.shift)
    if i > 0 && grid[i - 1][j] < 2 && add_to_queue(queue, grid, i - 1, j, distance + 1) ||
       i < n && grid[i + 1][j] < 2 && add_to_queue(queue, grid, i + 1, j, distance + 1) ||
       j > 0 && grid[i][j - 1] < 2 && add_to_queue(queue, grid, i, j - 1, distance + 1) ||
       j < n && grid[i][j + 1] < 2 && add_to_queue(queue, grid, i, j + 1, distance + 1)
      return distance
    end
  end

  -1
end

def add_to_queue(queue, grid, i, j, distance)
  grid_val = grid[i][j]
  grid[i][j] = 2
  queue << [i, j, distance]
  grid_val == 1
end