# Official Solution

**Link:** [https://leetcode.com/problems/number-of-corner-rectangles/solution/](https://leetcode.com/problems/number-of-corner-rectangles/solution/)

---

[TOC]

### Approach #1: Count Corners [Accepted]

**Intuition**

We ask the question: for each additional row, how many more rectangles are added?

For each pair of 1s in the new row (say at `new_row[i]` and `new_row[j]`), we could create more rectangles where that pair forms the base. The number of new rectangles is the number of times some previous row had `row[i] = row[j] = 1`.

**Algorithm**

Let's maintain a count `count[i, j]`, the number of times we saw `row[i] = row[j] = 1`. When we process a new row, for every pair `new_row[i] = new_row[j] = 1`, we add `count[i, j]` to the answer, then we increment `count[i, j]`.

<iframe src="https://leetcode.com/playground/HykhmQ33/shared" frameBorder="0" width="100%" height="344" name="HykhmQ33"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(R*C^2)$$ where $$R, C$$ is the number of rows and columns.

* Space Complexity: $$O(C^2)$$ in additional space.

---
### Approach #2: Heavy and Light Rows [Accepted]

**Intuition and Algorithm**

Can we improve on the ideas in *Approach #1*? When a row is filled with $$X$$ 1s, we do $$O(X^2)$$ work to enumerate every pair of 1s.  This is okay when $$X$$ is small, but expensive when $$X$$ is big.

Say the entire top row is filled with 1s. When looking at the next row with say, `f` 1s that match the top row, the number of rectangles created is just the number of pairs of 1s, which is `f * (f-1) / 2`. We could find each `f` quickly using a Set and a simple linear scan of each row.

Let's call a row to be *heavy* if it has more than $$\sqrt N$$ points. The above algorithm changes the complexity of counting a heavy row from $$O(C^2)$$ to $$O(N)$$, and there are at most $$\sqrt N$$ heavy rows.

<iframe src="https://leetcode.com/playground/FTrcpQKN/shared" frameBorder="0" width="100%" height="500" name="FTrcpQKN"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N \sqrt N + R*C)$$ where $$N$$ is the number of ones in the grid.

* Space Complexity: $$O(N + R + C^2)$$ in additional space, for `rows`, `target`, and `count`.