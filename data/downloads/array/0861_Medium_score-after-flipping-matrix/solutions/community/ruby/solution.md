# Ruby - T: O(mn), S: O(1) 100% 100%

**Author:** hoangphanbk10
**Votes:** 1
**Link:** [https://leetcode.com/problems/score-after-flipping-matrix/solutions/2532889/](https://leetcode.com/problems/score-after-flipping-matrix/solutions/2532889/)

---

```
# @param {Integer[][]} grid
# @return {Integer}
def matrix_score(grid)
  m = grid.size
  n = grid[0].size

  0.upto(m - 1) do |i|
    next if grid[i][0] == 1

    0.upto(n - 1) do |j|
      grid[i][j] = 1 - grid[i][j]
    end
  end

  result = 0
  0.upto(n - 1) do |j|
    sum = 0

    0.upto(m - 1) do |i|
      sum += grid[i][j]
    end
  
    result = result * 2 + [sum, m - sum].max
  end

  result
end