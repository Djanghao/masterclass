# [Ruby] DFS

**Author:** mistersky
**Votes:** 4
**Link:** [https://leetcode.com/problems/cherry-pickup-ii/solutions/977763/](https://leetcode.com/problems/cherry-pickup-ii/solutions/977763/)

---

```
# @param {Integer[][]} grid
# @return {Integer}
def cherry_pickup(grid)
  @grid = grid
  @rows = grid.count
  @cols = grid[0].count
  @cache = {}
  
  dfs(0, 0, 0, @cols-1)
end

def get_next_pos(i, j)
  pos = [[i + 1, j]]
  pos << [i + 1, j - 1] if j - 1 >= 0
  pos << [i + 1, j + 1] if j + 1 < @cols
  pos
end
        
def dfs(i1, j1, i2, j2)
  cached = @cache[[i1, j1, i2, j2]]
  return cached if cached
  
  current_cherries = @grid[i1][j1]
  current_cherries += @grid[i2][j2] if i2 != i1 || j2 != j1
  return current_cherries if i1 == @rows - 1 || i2 == @rows - 1

  next_pos1 = get_next_pos(i1, j1)
  next_pos2 = get_next_pos(i2, j2)

  next_cherries = 0
  next_pos1.each do |next_i1, next_j1|
    next_pos2.each do |next_i2, next_j2|
      next_cherries = [
        next_cherries,
        dfs(next_i1, next_j1, next_i2, next_j2)
      ].max
    end
  end

  @cache[[i1, j1, i2, j2]] = next_cherries + current_cherries
end

```