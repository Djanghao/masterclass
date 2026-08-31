# Ruby 100%

**Author:** MonkeeIT
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-1-bordered-square/solutions/3933746/](https://leetcode.com/problems/largest-1-bordered-square/solutions/3933746/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
def largest1_bordered_square(grid)
  rows, cols = grid.size, grid[0].size
  max_side = 0
  dp = Array.new(rows) { Array.new(cols) { [0, 0] } }

  (0...rows).each do |r|
    (0...cols).each do |c|
      next if grid[r][c].zero?
      dp[r][c] = [c > 0 ? dp[r][c - 1][0] + 1 : 1, r > 0 ? dp[r - 1][c][1] + 1 : 1]
      side = [dp[r][c][0], dp[r][c][1]].min

      while side > max_side
        max_side = side if dp[r - side + 1][c][0] >= side && dp[r][c - side + 1][1] >= side
        side -= 1
      end
    end
  end

  max_side * max_side
end

grid = [[1, 1, 1], [1, 0, 1], [1, 1, 1]]
puts largest1_bordered_square(grid)

```