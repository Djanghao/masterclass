# Official Solution

**Link:** [https://leetcode.com/problems/count-covered-buildings/solution/](https://leetcode.com/problems/count-covered-buildings/solution/)

---

### Approach: Simulation

#### Intuition

According to the problem statement, we are given a two-dimensional array `buildings` and need to count how many buildings are **covered**. A building is considered **covered** if there is at least one other coordinate in each of the four directions: left, right, up, and down. If we treat the scattered coordinates as forming an area, we are essentially counting how many of them are not located on the **edges** of that area.

All coordinates lie within an `n × n` grid, and each coordinate `(x, y)` satisfies
`x in [0, n)` and `y in [0, n)`. This allows us to determine which coordinates lie on the **edges** by examining their positions within their respective rows and columns:

+ If a coordinate is the leftmost in its row, there is no coordinate to its left because all coordinates are unique; similarly, if it is the rightmost, there is no coordinate to its right.

+ If a coordinate is the topmost in its column, there is no coordinate above it; if it is the bottommost, there is no coordinate below it.

+ If a coordinate is neither the leftmost nor rightmost in its row, and also neither the topmost nor bottommost in its column, then it has neighbors in all four directions and is therefore covered.

Based on this observation, the computation proceeds as follows:

+ Traverse all building coordinates and record, for each row, the minimum and maximum `x` values, and for each column, the minimum and maximum `y` values.

+ For a coordinate `(x, y)`, if `x` lies strictly between the row's minimum and maximum, and `y` lies strictly between the column's minimum and maximum, then the coordinate is covered and we increment the answer.

The final result is the value of `ans`.

#### Implementation

<iframe src="https://leetcode.com/playground/dxu6qJ6q/shared" frameBorder="0" width="100%" height="500" name="dxu6qJ6q"></iframe>

#### Complexity Analysis

Let $m$ be the length of `buildings` and $n$ be the given grid size.

- Time complexity: $O(m)$.
  
  Only two passes over the array are required.

- Space complexity: $O(n)$.
  
  We store the minimum and maximum values for each of the `n` rows and `n` columns.
  
---