# Ruby Dijkstra + Priority Queue, 100% Runtime/Memory

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/4151950/](https://leetcode.com/problems/the-maze-ii/solutions/4151950/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Dijkstra can be used to find the shortest path between start and destination. Priority Queue (Min Heap) can be used to find for hold all neighborg nodes on each step with its tentative distance as key, because we will need to backtrack every time we find a dead end.

# Approach
<!-- Describe your approach to solving the problem. -->
A couple of helper matrices are created, one for visited nodes and another for tracking tentative distances.
Next Moves is a helper function that returns the next cells after after walking all the needed steps in between walls.
In Ruby a <=> b returns 1 if a > b, -1 if b > a or 0 if a == b, we use it to keep track of the direction of movement.
In the block `loop` we use the Dijkstra algo, while skipping visited nodes and pushing into the priority queue.

# Complexity
- Time complexity: $$O(m*n\u2217log(m*n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m*n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} maze
# @param {Integer[]} start
# @param {Integer[]} destination
# @return {Integer}
def shortest_distance(maze, start, destination)
  curr_row, curr_col = start

  distances = Array.new(maze.size){ Array.new(maze[0].size){ Float::INFINITY } }
  distances[curr_row][curr_col] = 0
  visited = Array.new(maze.size){ Array.new(maze[0].size){ false } }

  queue = Containers::PriorityQueue.new
  priority = 0
  queue.push([curr_row, curr_col, nil, nil], priority)

  loop do
    return -1 if queue.empty?

    curr_row, curr_col, dr, dc = queue.pop
    break if [curr_row, curr_col] == destination
    next if visited[curr_row][curr_col]

    neighbors = nextMoves(maze, curr_row, curr_col, dr, dc).reject{ |row, col| visited[row][col] }
    neighbors.each do |row, col, steps|
      distances[row][col] = [steps + distances[curr_row][curr_col], distances[row][col]].min
    end

    visited[curr_row][curr_col] = true
    neighbors.each do |next_row, next_col|
      queue.push([next_row, next_col, next_row <=> curr_row, next_col <=> curr_col], -distances[next_row][next_col])
    end
  end
  distances[curr_row][curr_col]
end

def nextMoves(maze, row, col, dr, dc)
  validate_cell = ->(r, c) { r >= 0 && r < maze.size && c >= 0 && c < maze[0].count && maze[r][c] == 0 }
  validate_deltas = ->(r, c, dr, dc) { (!dr || (r <=> row) == dr) && (!dc || (c <=> col) == dc) }

  surrounding_steps = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]].select{ |row, col| validate_cell.call(row, col) }
  frontal_step = surrounding_steps.select{ |row, col| validate_deltas.call(row, col, dr, dc) }
  candidates = frontal_step.empty? ? surrounding_steps : frontal_step

  candidates.map do |next_row, next_col|    
    dr = next_row <=> row
    dc = next_col <=> col
    steps = 1
    while validate_cell.call(next_row + dr, next_col + dc) && validate_deltas.call(next_row + dr, next_col + dc, dr, dc)
      next_row += dr
      next_col += dc
      steps += 1
    end
    [next_row, next_col, steps]
  end
end
```