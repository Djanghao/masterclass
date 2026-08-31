# Ruby Solution

**Author:** ozovalihasan
**Votes:** 0
**Link:** [https://leetcode.com/problems/bricks-falling-when-hit/solutions/2497401/](https://leetcode.com/problems/bricks-falling-when-hit/solutions/2497401/)

---

```ruby
# @param {Integer[][]} grid
# @param {Integer[][]} hits
# @return {Integer[]}
def hit_bricks(grid, hits)
  hits.each do |(row, col)|
    grid[row][col] = :hit if grid[row][col] == 1 
  end 
  
  hits.reverse!
  
  grid.first.each_with_index do |item, col|
    check_coordinates(grid, 0, col)
  end
  
  result = []

  hits.each do |row, col|
    result << 0

    next if grid[row][col] == 0

    update = false
    if grid[row][col] == :hit
      if (row > 0 && grid[row - 1][col] == :strong) ||
        (row < grid.size - 1 && grid[row + 1][col] == :strong) ||
        (col > 0 && grid[row][col - 1] == :strong) ||
        (col < grid.first.size - 1 && grid[row][col + 1] == :strong) ||
        row == 0
        update = true
      else
        grid[row][col] = 1
        next
      end
      
    end
    
    grid[row][col] = 1
    
    count_coordinates(grid, row, col, result)
    
    result[-1] -= 1

    if row == 0 || update == true
      check_coordinates(grid, row, col)
    end
    

  end

  result.reverse

end

def count_coordinates(grid, row, col, result)

  return unless grid[row][col] == 1
  
  result[-1] += 1
  grid[row][col] = :checked

  if row > 0
    count_coordinates(grid, row - 1, col, result)
  end
  
  if row < grid.size - 1
    count_coordinates(grid, row + 1, col, result)
  end
  
  if col > 0
    count_coordinates(grid, row, col - 1 , result)
  end
  
  if col < grid.first.size - 1
    count_coordinates(grid, row, col + 1 , result)
  end
  
end


def check_coordinates(grid, row, col)
  return unless grid[row][col] == 1 || grid[row][col] == :checked

  grid[row][col] = :strong
  
  if row > 0
    check_coordinates(grid, row - 1, col)
  end
  
  if row < grid.size - 1
    check_coordinates(grid, row + 1, col)
  end
  
  if col > 0
    check_coordinates(grid, row, col - 1 )
  end
  
  if col < grid.first.size - 1
    check_coordinates(grid, row, col + 1 )
  end

end
```