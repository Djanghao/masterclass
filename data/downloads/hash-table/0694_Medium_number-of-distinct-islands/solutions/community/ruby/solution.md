# Ruby, DFS

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-islands/solutions/5557914/](https://leetcode.com/problems/number-of-distinct-islands/solutions/5557914/)

---

# Code
```
def num_distinct_islands(grid)
  rows = grid.length - 1
  columns = grid[0].length - 1

  directions_in_bounds = lambda { |row, column|
    [[1, 0], [-1, 0], [0, 1], [0, -1]].map { [_1 + row, _2 + column] }
                                      .select { _1.between?(0, rows) && _2.between?(0, columns) }
  }

  visited = Set.new
  unique_islands = Set.new

  dfs = lambda do |row, column, origin, dfs_visited|
    return dfs_visited if grid[row][column].zero? || visited.include?([row, column])

    visited.add([row, column])
    
    dfs_visited.add([row - origin[0], column - origin[1]])
    
    directions_in_bounds.call(row, column).each do |row, column|
      dfs.call(row, column, origin, dfs_visited)
    end
    
    dfs_visited
  end

  (0..rows).each do |row|
    (0..columns).each do |column|
      dfs_visited = dfs.call(row, column, [row, column], Set.new)
      unique_islands.add(dfs_visited.to_a) if dfs_visited.any?
    end
  end
  
  unique_islands.length
end
```