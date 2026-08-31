# Clear dynamic programming solution without dp table

**Author:** andgursky
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-square/solutions/5149666/](https://leetcode.com/problems/maximal-square/solutions/5149666/)

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
# @param {Character[][]} matrix
# @return {Integer}
def maximal_square(matrix)
  # dynamic programming (from top to bottom) without dp table
  max_val = 0
  # iterate throw matrix and search for square 2x2
  matrix.each_with_index do |e, i|
    e.each_with_index do |_, j|
      matrix[i][j] = matrix[i][j].to_i
      current  = matrix[i][j]
      left     = matrix[i][j - 1] unless j.zero?
      top      = matrix[i - 1][j] unless i.zero?
      top_left = matrix[i - 1][j - 1] unless i.zero? && j.zero?
      if left&.positive? && top&.positive? && top_left&.positive? && current&.positive?
        # increment the bottom rigth corner of square with 1
        # to find squares grater then 2x2 declare iterator (inc_val) with a min value of left, top and top_left cells
        inc_val = [left, top, top_left].min
        matrix[i][j] = inc_val + 1
      end
    end
    max_val = [max_val, matrix[i].max].max
  end
  max_val * max_val
end
```