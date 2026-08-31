# Ruby, DFS, Cache

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/5308566/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/5308566/)

---

# Code
```
def longest_increasing_path(matrix)
  rows = matrix.length - 1
  columns = matrix[0].length - 1

  directions = ->(row, column) { [[1,0],[-1,0],[0,1],[0,-1]].map { |r, c| [r + row, c + column] } }
  in_bounds = ->(row, column) { row.between?(0, rows) && column.between?(0, columns) }
  directions_in_bounds = ->(row, column) { directions.call(row, column).select { |r, c| in_bounds.call(r, c) } }
  
  cache = {}
  
  dfs = ->(row, column) do
    return cache[[row, column]] if cache.include?([row, column])

    result = 1
    directions_in_bounds.call(row, column).each do |r, c|
      if matrix[row][column] < matrix[r][c]
        result = [result, dfs.call(r, c) + 1].max
      end
    end
    cache[[row, column]] = result
  end

  (0..rows).each do |row|
    (0..columns).each do |column|
      dfs.call(row, column)
    end
  end

  cache.values.max
end
```