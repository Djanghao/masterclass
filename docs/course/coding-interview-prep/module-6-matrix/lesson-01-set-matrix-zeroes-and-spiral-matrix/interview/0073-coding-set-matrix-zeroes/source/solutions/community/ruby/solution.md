# Ruby: Two passes, log and fill.

**Author:** user9697N
**Votes:** 3
**Link:** [https://leetcode.com/problems/set-matrix-zeroes/solutions/1401169/](https://leetcode.com/problems/set-matrix-zeroes/solutions/1401169/)

---

## Leetcode: 73. Set Matrix Zeroes.


**Ruby: Two passes, log and fill.**

Iterate over all cells of matrix and log where mark arrays and collumns to fill by zeros. At the second pass over the matrix set cell to zero if it's row OR column marked for change. To store information about changes use two arrays one to mark rows second to mark collumns.

Ruby code:
```Ruby
# Leetcode: 73. Set Matrix Zeroes.
# https://leetcode.com/explore/challenge/card/august-leetcoding-challenge-2021/614/week-2-august-8th-august-14th/3888/
# https://leetcode.com/problems/set-matrix-zeroes/
# = = = = = = =
# Accepted.
# Thanks God!
# = = = = = = =
# @param {Integer[][]} matrix
# @return {Void} Do not return anything, modify matrix in-place instead.
def set_zeroes(matrix)
  rows = Array.new(matrix.size,false)
  columns = Array.new(matrix[0].size,false)

  # Find where zeros are.
  (0...matrix.size).each do |i|
    (0...matrix[0].size).each do |j|
      if matrix[i][j].zero?
        rows[i] = true
        columns[j] = true
      end
    end
  end

  # Set values to the matrix.
  (0...matrix.size).each do |i|
    (0...matrix[0].size).each do |j|
      matrix[i][j] = 0 if rows[i] || columns[j]
    end
  end
end
```
