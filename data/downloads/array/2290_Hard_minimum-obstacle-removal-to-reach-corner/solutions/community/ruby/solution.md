# Simple BFS 0-1

**Author:** caovanbi235
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090235/](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/solutions/6090235/)

---

# Code
```ruby []
# @param {Integer[][]} grid
# @return {Integer}
def minimum_obstacles(grid)
  m = grid.size
  n = grid[0].size
  deque = [[0, 0, 0]]
  visited = Array.new(m) { Array.new(n, false) }
  visited[0][0] = true
  directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

  until deque.empty?
    x, y, cost = deque.shift
    return cost if x == m - 1 && y == n - 1

    directions.each do |dx, dy|
      nx = x + dx
      ny = y + dy
      next if nx < 0 || nx >= m || ny < 0 || ny >= n || visited[nx][ny]

      visited[nx][ny] = true

      if grid[nx][ny] == 0
        deque.unshift([nx, ny, cost])
      else
        deque.push([nx, ny, cost + 1])
      end
    end
  end
end

```