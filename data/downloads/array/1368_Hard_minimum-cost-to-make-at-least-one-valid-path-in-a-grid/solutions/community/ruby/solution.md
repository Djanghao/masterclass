# Ruby Easy Solution 100%

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/5364226/](https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/solutions/5364226/)

---

# Code
```
# @param {Integer[][]} grid
# @return {Integer}
def min_cost(grid)
  m = grid.size
  n = grid[0].size
  
  directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
  min_heap = [[0, 0, 0]]  # [cost, x, y]
  min_cost_to_reach = Array.new(m) { Array.new(n, Float::INFINITY) }
  min_cost_to_reach[0][0] = 0
  
  while !min_heap.empty?
    cost, x, y = min_heap.shift
    next if cost > min_cost_to_reach[x][y]  # Skip if we found a cheaper way to reach (x, y)
    
    # Explore each direction
    directions.each_with_index do |(dx, dy), i|
      nx, ny = x + dx, y + dy
      next if nx < 0 || nx >= m || ny < 0 || ny >= n
      
      new_cost = cost + (grid[x][y] != i + 1 ? 1 : 0)
      
      if new_cost < min_cost_to_reach[nx][ny]
        min_cost_to_reach[nx][ny] = new_cost
        if grid[nx][ny] == grid[x][y]  # Same direction, add to the front of the queue
          min_heap.unshift([new_cost, nx, ny])
        else  # Different direction, add to the end of the queue
          min_heap.push([new_cost, nx, ny])
        end
      end
    end
  end
  
  min_cost_to_reach[m-1][n-1]
end

```