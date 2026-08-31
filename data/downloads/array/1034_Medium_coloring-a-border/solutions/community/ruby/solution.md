# Ruby DFS

**Author:** puneetloya
**Votes:** 0
**Link:** [https://leetcode.com/problems/coloring-a-border/solutions/3752956/](https://leetcode.com/problems/coloring-a-border/solutions/3752956/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[][]} grid
# @param {Integer} row
# @param {Integer} col
# @param {Integer} color
# @return {Integer[][]}
def color_border(grid, row, col, color)
   @main_color = grid[row][col]
   @output = Array.new(grid.size){Array.new(grid[0].size)}
   for i in 0..grid.size - 1
        for j in 0..grid[0].size - 1
            @output[i][j] = grid[i][j]
        end
    end
   visited = Array.new(grid.size){Array.new(grid[0].size)}
   dfs([row, col], grid, visited, color)
   @output
end


def neighbours(location, row_length, col_length)
    nb = []
    nb << [location[0]+1, location[1]] if location[0] + 1 < row_length
    nb << [location[0]-1, location[1]] if location[0] > 0
    nb << [location[0], location[1]+1] if location[1] + 1 < col_length
    nb << [location[0], location[1]-1] if location[1] > 0
    nb
end

def dfs(loc, grid, visited, color)
    visited[loc[0]][loc[1]] = true
    nbrs = neighbours(loc, grid.size, grid[0].size)

    if (loc[0] == 0 || loc[0] == grid.size - 1) || (loc[1] == 0 || loc[1] == grid[0].size - 1)
        @output[loc[0]][loc[1]] = color
    else
        for nb in nbrs
            if @main_color != grid[nb[0]][nb[1]]            
                @output[loc[0]][loc[1]] = color
                break
            end
        end
    end

    for nb in nbrs
        if @main_color == grid[nb[0]][nb[1]] && !visited[nb[0]][nb[1]]
            dfs([nb[0],nb[1]], grid, visited, color)
        end
    end

end
```