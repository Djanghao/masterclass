# Official Solution

**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solution/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solution/)

---

[TOC]

---
### Approach #1: Row and Column Maximums [Accepted]

**Intuition and Algorithm**

The skyline looking from the top is `col_maxes = [max(column_0), max(column_1), ...]`.  Similarly, the skyline from the left is `row_maxes [max(row_0), max(row_1), ...]`

In particular, each building `grid[r][c]` could become height `min(max(row_r), max(col_c))`, and this is the largest such height.  If it were larger, say `grid[r][c] > max(row_r)`, then the part of the skyline `row_maxes = [..., max(row_r), ...]` would change.

These increases are also independent (none of them change the skyline), so we can perform them independently.

<iframe src="https://leetcode.com/playground/TY4kLmTB/shared" frameBorder="0" width="100%" height="395" name="TY4kLmTB"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2)$$, where $$N$$ is the number of rows (and columns) of the grid.  We iterate through every cell of the grid.

* Space Complexity: $$O(N)$$, the space used by `row_maxes` and `col_maxes`.