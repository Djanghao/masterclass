# [Ruby] O(mn), DP

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-paths-ii/solutions/1182421/](https://leetcode.com/problems/unique-paths-ii/solutions/1182421/)

---

```
# @param {Integer[][]} obstacle_grid
# @return {Integer}
def unique_paths_with_obstacles(obstacle_grid)
  hight = obstacle_grid.count
  width = obstacle_grid[0].count

  return 0 if hight*width == 0 || obstacle_grid[0][0] == 1

  obstacle_grid[0][0] = 1

  (1...hight).each do |y|
    obstacle_grid[y][0] = obstacle_grid[y-1][0]*(1 - obstacle_grid[y][0])
  end
  
  (1...width).each do |x|
    obstacle_grid[0][x] = obstacle_grid[0][x-1]*(1 - obstacle_grid[0][x])
  end

  (1...hight).each do |y|
    (1...width).each do |x|
      obstacle_grid[y][x] = (obstacle_grid[y][x-1] + obstacle_grid[y-1][x])*(1 - obstacle_grid[y][x])
    end
  end

  obstacle_grid[hight-1][width-1]
end

```