# Ruby DFS solution

**Author:** aa1109
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/421666/](https://leetcode.com/problems/max-area-of-island/solutions/421666/)

---

```ruby

def max_area_of_island(grid)
  MaxAreaIsland.search(grid)    
end

class MaxAreaIsland
  def self.search(grid)
    new(grid).search
  end

  def search
    max_area = 0

    grid.each_with_index do |row, i|
      row.each_with_index do |cell, j|
		  max_area = [max_area, dfs(i,j)].max if cell == 1
      end
    end

    max_area
  end
  
  private

  attr_accessor :grid

  def initialize(grid)
    @grid = grid
  end

  def dfs(row, col, counter=0)
    return counter if row < 0 || row >= grid.size || col < 0 || col >= grid[0].size
    return counter if grid[row][col] != 1

    grid[row][col] = "*"
    counter += 1
    
    counter = dfs(row+1, col, counter)
    counter = dfs(row-1, col, counter)
    counter = dfs(row, col+1, counter)
    counter = dfs(row, col-1, counter)
  end

end
```