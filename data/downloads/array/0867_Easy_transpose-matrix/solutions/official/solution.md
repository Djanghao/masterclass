# Official Solution

**Link:** [https://leetcode.com/problems/transpose-matrix/solution/](https://leetcode.com/problems/transpose-matrix/solution/)

---

[TOC]

## Solution
---
### Approach 1: Copy Directly

**Intuition and Algorithm**

The transpose of a matrix `A` with dimensions `R x C` is a matrix `ans` with dimensions `C x R` for which `ans[c][r] = A[r][c]`.

Let's initialize a new matrix `ans` representing the answer.  Then, we'll copy each entry of the matrix as appropriate.

<iframe src="https://leetcode.com/playground/caa5uZ7X/shared" frameBorder="0" width="100%" height="242" name="caa5uZ7X"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(R * C)$$, where $$R$$ and $$C$$ are the number of rows and columns in the given matrix `A`.

* Space Complexity:  $$O(R * C)$$, the space used by the answer.
<br />
<br />