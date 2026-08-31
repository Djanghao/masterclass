# Short Ruby solution with explanation

**Author:** dtkalla
**Votes:** 4
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630785/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630785/)

---

# Intuition
Count how often each row appears.  Total the number of rows matching each column.

# Approach
1. Create a hash where rows are keys and their frequencies are values.  (We're using a hash instead of a set because a row can appear multiple times.)
2. Initialize total to 0.
3. Transpose the grid to iterate through the columns.  For each column, add the number of matching rows to total.
4. Return the total.

# Complexity
- Time complexity:
$$O(m*n)$$

- Space complexity:
$$O(m*n)$$

# Code
```
def equal_pairs(grid)
    rows = grid.tally
    total = 0

    grid.transpose.each do |col|
        total += rows[col] if rows[col]
    end

    total
end
```