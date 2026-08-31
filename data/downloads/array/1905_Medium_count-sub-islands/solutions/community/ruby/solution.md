# DFS - Easy To Understand

**Author:** sumit_dhandale
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-sub-islands/solutions/5702190/](https://leetcode.com/problems/count-sub-islands/solutions/5702190/)

---

# Code
```ruby []
def count_sub_islands(grid1, grid2)
  m = grid1.size
  n = grid1[0].size
  @vis = Array.new(m) { Array.new(n, false) }
  ans = 0
  
  (0...m).each do |i|
    (0...n).each do |j|
      if grid2[i][j] == 1 && !@vis[i][j]
        if dfs(grid1, grid2, i, j, m, n)
          ans += 1
        end
      end
    end
  end

  ans
end

def dfs(grid1, grid2, i, j, m, n)
  return true if i < 0 || i >= m || j < 0 || j >= n || grid2[i][j] == 0 || @vis[i][j]
  
  @vis[i][j] = true
  
  is_sub_island = grid1[i][j] == 1

  is_sub_island &= dfs(grid1, grid2, i - 1, j, m, n)
  is_sub_island &= dfs(grid1, grid2, i + 1, j, m, n)
  is_sub_island &= dfs(grid1, grid2, i, j - 1, m, n)
  is_sub_island &= dfs(grid1, grid2, i, j + 1, m, n)

  is_sub_island
end

```