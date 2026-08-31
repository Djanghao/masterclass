# Ruby, BFS, Lambda

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/walls-and-gates/solutions/4979359/](https://leetcode.com/problems/walls-and-gates/solutions/4979359/)

---

# Code
```
def walls_and_gates(rooms)
  wall = -1
  gate = 0

  rows = rooms.length - 1
  columns = rooms[0].length - 1

  directions = ->(row, column) { [[1, 0],[-1, 0],[0, 1],[0, -1]].map { |x, y| [ row + x, column + y ] } }
  in_bounds = ->(row, column) { row.between?(0, rows) && column.between?(0, columns) }
  directions_in_bounds = ->(row, column) { directions.call(row, column).select { |r, c| in_bounds.call(r, c) } }

  bfs = ->(row, column) do
    visited = Set.new

    queue = [[[row, column], 0]]
    until queue.empty?
      (row, column), level = queue.shift

      rooms[row][column] = [level, rooms[row][column]].min

      directions_in_bounds.call(row, column).each do |x, y|
        next if [wall, gate].include?(rooms[x][y]) || visited.include?([x, y])
        queue.append([[x, y], level + 1])
        visited.add([x, y])
      end
    end
  end

  (0..rows).each do |row|
    (0..columns).each do |column|
      bfs.call(row, column) if rooms[row][column] == gate
    end
  end

  rooms
end
```