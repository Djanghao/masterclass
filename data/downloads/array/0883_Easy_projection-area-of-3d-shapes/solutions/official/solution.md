# Official Solution

**Link:** [https://leetcode.com/problems/projection-area-of-3d-shapes/solution/](https://leetcode.com/problems/projection-area-of-3d-shapes/solution/)

---

[TOC]

## Solution
---
### Approach 1: Mathematical

**Intuition and Algorithm**

From the top, the shadow made by the shape will be 1 square for each non-zero value.

From the side, the shadow made by the shape will be the largest value for each row in the grid.

From the front, the shadow made by the shape will be the largest value for each column in the grid.


**Example**

With the example `[[1,2],[3,4]]`:

* The shadow from the top will be 4, since there are four non-zero values in the grid;

* The shadow from the side will be `2 + 4`, since the maximum value of the first row is `2`, and the maximum value of the second row is `4`;

* The shadow from the front will be `3 + 4`, since the maximum value of the first column is `3`, and the maximum value of the second column is `4`.

<iframe src="https://leetcode.com/playground/8KjgTxTA/shared" frameBorder="0" width="100%" height="429" name="8KjgTxTA"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2)$$, where $$N$$ is the length of `grid`.

* Space Complexity:  $$O(1)$$.
<br />
<br />