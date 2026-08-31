# Official Solution

**Link:** [https://leetcode.com/problems/toeplitz-matrix/solution/](https://leetcode.com/problems/toeplitz-matrix/solution/)

---

[TOC]

## Solution


---

### Approach 1: Group by Category 

#### Intuition and Algorithm

We ask what feature makes two coordinates `(r1, c1)` and `(r2, c2)` belong to the same diagonal?

It turns out two coordinates are on the same diagonal if and only if `r1 - c1 == r2 - c2`.

This leads to the following idea: remember the value of that diagonal as `groups[r-c]`.  If we see a mismatch, the matrix is not Toeplitz; otherwise it is.

#### Implementation

<iframe src="https://leetcode.com/playground/GakXvRAM/shared" frameBorder="0" width="100%" height="293" name="GakXvRAM"></iframe>

#### Complexity Analysis

* Time Complexity: $O(M*N)$.  (Recall in the problem statement that $M, N$ are the number of rows and columns in `matrix`.)

* Space Complexity: $O(M+N)$.

---

### Approach 2: Compare With Top-Left Neighbor

#### Intuition and Algorithm

For each diagonal with elements in order $a_1, a_2, a_3, \dots, a_k$, we can check $a_1 = a_2, a_2 = a_3, \dots, a_{k-1} = a_k$.  The matrix is *Toeplitz* if and only if all of these conditions are true for all (top-left to bottom-right) diagonals.

Every element belongs to some diagonal, and it's previous element (if it exists) is it's top-left neighbor.  Thus, for the square `(r, c)`, we only need to check `r == 0 OR c == 0 OR matrix[r-1][c-1] == matrix[r][c]`.

#### Implementation

<iframe src="https://leetcode.com/playground/87BeW6dQ/shared" frameBorder="0" width="100%" height="208" name="87BeW6dQ"></iframe>

#### Complexity Analysis

* Time Complexity: $O(M*N)$, as defined in the problem statement.

* Space Complexity: $O(1)$.