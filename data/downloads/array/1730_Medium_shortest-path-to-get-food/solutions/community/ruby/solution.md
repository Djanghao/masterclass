# Ruby, BFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-path-to-get-food/solutions/5858237/](https://leetcode.com/problems/shortest-path-to-get-food/solutions/5858237/)

---

# Code
```ruby []
def get_food(grid)
  rows = grid.length - 1
  columns = grid[0].length - 1

  directions = ->(row, column) { [[1, 0], [-1, 0], [0, 1], [0, -1]].map { |x, y| [row + x, column + y] } }
  in_bounds = ->(row, column) { row.between?(0, rows) && column.between?(0, columns) }
  directions_in_bounds = ->(row, column) { directions.call(row, column).select { |r, c| in_bounds.call(r, c) } }

  bfs = lambda do |row, column|
    queue = [[[row, column], 0]]
    until queue.empty?
      (row, column), moves = queue.shift
      return moves if grid[row][column] == '#'

      directions_in_bounds.call(row, column).each do |row, column|
        next if grid[row][column] == 'X'

        grid[row][column] = 'X' if grid[row][column] == 'O'
        queue.append([[row, column], moves + 1])
      end
    end
    -1
  end

  (0..rows).each do |row|
    (0..columns).each do |column|
      return bfs.call(row, column) if grid[row][column] == '*'
    end
  end
end
```