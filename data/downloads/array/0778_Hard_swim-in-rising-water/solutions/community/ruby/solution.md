# [Ruby] Binary Search + DFS

**Author:** Brandon_Tat
**Votes:** 1
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/2727741/](https://leetcode.com/problems/swim-in-rising-water/solutions/2727741/)

---

```
# @param {Integer[][]} grid
# @return {Integer}
def swim_in_water(grid)
  low = grid[0][0]
  high = grid.length * grid.length - 1
  
  while low < high
    middle = ((high - low) / 2) + low
    if !is_possible?(grid, middle)
      low = middle + 1
    else
      high = middle
    end
  end
  
  low
end

def is_possible?(grid, middle)
  seen = Set.new([0, 0])
  stack = [[0, 0]]
  directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  
  until stack.empty?
    row, col = stack.pop
    return true if row == grid.length - 1 && col == grid.length - 1
    
    directions.each do |row_change, col_change|
      new_row = row + row_change
      new_col = col + col_change
      
      if new_row.between?(0, grid.length - 1) &&
          new_col.between?(0, grid[0].length - 1) &&
          !seen.include?([new_row, new_col]) &&
          grid[new_row][new_col] <= middle
        
        stack << [new_row, new_col]
        seen.add([new_row, new_col])
      end
    end
  end
  
  false
end
```