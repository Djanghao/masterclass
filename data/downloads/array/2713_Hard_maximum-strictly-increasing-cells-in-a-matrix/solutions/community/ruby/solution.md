# Ruby solution with DP (100%/100%)

**Author:** dtkalla
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3579639/](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3579639/)

---

# Intuition
Go through the numbers from smallest to largest and create the longest path up to each cell with tabulation

# Approach
Translated to Ruby from mdakram28's solution:
https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/solutions/3570677/explained-o-m-n-log-m-n-solution-python/

1. Find the dimensions of the matrix.
2. Group the cells of the matrix by value, storing their position.  (They need to be grouped because the path must be strictly increasing.)
3. Create hashes for the longest sequence so far in each row.
4. Iterate through the values of the matrix in reverse order:
    - For each cell, the new longest path will be either 1 more than the previous longest path for that row, or 1 more than the previous longest for that column.
    - Don't update previous until you've gone through all cells of a given value -- this leads to issues if you have two cells with the same value in the same row/column.
5. Take the largest value from each prev_row or prev_col



# Complexity
- Time complexity:
$$O(m * n * log(m*n))$$

- Space complexity:
$$O(m * n)$$

# Code
```
def max_increasing_cells(mat)
    m,n = mat.length,mat[0].length

    positions = Hash.new { |h,k| h[k] = [] }

    (0...m).each do |i|
        (0...n).each do |j|
            positions[mat[i][j]] << [i,j]
        end
    end

    prev_row = Hash.new(0)
    prev_col = Hash.new(0)

    positions.keys.sort.reverse.each do |key|
        next_row = Hash.new(0)
        next_col = Hash.new(0)

        positions[key].each do |pos|
            row,col = pos
            prev = [prev_row[row], prev_col[col]].max

            next_row[row] = [next_row[row], prev + 1].max
            next_col[col] = [next_col[col], prev + 1].max
        end

        prev_row.merge!(next_row)
        prev_col.merge!(next_col)
    end

    prev_row.values.max
end
```