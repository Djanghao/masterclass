# Ruby DFS & BFS, same idea

**Author:** blither
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-islands/solutions/2296867/](https://leetcode.com/problems/number-of-islands/solutions/2296867/)

---

Nothing new here, similar to the other solutions shown.

```
def num_islands(grid)
    m = grid.size
    n = grid[0].size
    num_islands = 0
    
    (0...m).each do |i|
        (0...n).each do |j|
            if grid[i][j] == '1'
                #num_islands += dfs(grid,i,j)
                num_islands += bfs(grid,i,j)
            end
        end
    end      
    num_islands
end

def dfs(grid, i, j)
    if i < 0 || i >= grid.size || j >= grid[0].size || j < 0 || grid[i][j] == '0'
        return 0
    end

    grid[i][j] = '0'
    dfs(grid, i-1, j)
    dfs(grid, i+1, j)
    dfs(grid, i, j-1)
    dfs(grid, i, j+1)
    1
end

def bfs(grid, i, j)    
    queue = [[i,j]]

    while !queue.empty?
        indices = queue.pop
        r, c = indices[0], indices[1]
        if grid[r][c] == '1'
            grid[r][c] = '0'
            queue << [r-1, c] if r - 1 >= 0 && grid[r-1][c] == '1'
            queue << [r+1, c] if r + 1 < grid.size && grid[r+1][c] == '1'
            queue << [r, c-1] if c - 1 >= 0 && grid[r][c-1] == '1'
            queue << [r, c+1] if c + 1 < grid[0].size && grid[r][c+1] == '1'
        end
    end
    1
end
```