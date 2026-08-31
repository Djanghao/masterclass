# Official Solution

**Link:** [https://leetcode.com/problems/sort-matrix-by-diagonals/solution/](https://leetcode.com/problems/sort-matrix-by-diagonals/solution/)

---

### Approach: Simulation

#### Intuition

This problem requires us to sort the diagonal elements of the lower-left triangle (including the diagonal) of the matrix in non-increasing order, and to sort the diagonal elements of the upper-right triangle in non-decreasing order.

We can directly perform a simulation: extract the elements along the diagonals, sort them, and then place the sorted elements back into the matrix. Therefore, we only need to know how to traverse the elements along the diagonals. Let the element at the $i$-th row and $j$-th column be denoted as $\textit{grid}[i][j]$.

First, consider the triangle in the lower-left corner. Starting from the upper-left corner and moving toward the lower-right corner, as the row index $i$ increases, the column index $j$ also increases. Since the diagonal runs from the upper-left to the lower-right, each time $j$ starts from $0$, we can traverse column by column, with the row index $i$ changing along with $j$. Therefore, each diagonal in the lower-left triangle can be represented as $\textit{grid}[i+j][j]$.

Next, consider the triangle in the upper-right corner. Again, starting from the upper-left corner and moving toward the lower-right corner, as the column index $j$ increases, the row index $i$ also increases. Since all the elements on the diagonals of the upper-right triangle start from the $0$-th row, we can traverse row by row, with the column index $j$ changing along with $i$. Therefore, the elements on each diagonal of the upper-right triangle are $\textit{grid}[i][j+i]$.

At the same time, for each diagonal, the last element satisfies $i + j = n - 1$, which ensures that we traverse all elements on the diagonals without repetition, omission, or boundary violations.

#### Implementation

<iframe src="https://leetcode.com/playground/Lk3nTWcf/shared" frameBorder="0" width="100%" height="500" name="Lk3nTWcf"></iframe>

#### Complexity Analysis

Let $n$ be the number of rows and columns of $\textit{grid}$.

- Time complexity: $O(n^2 \log n)$.

  There are $2n-1 = O(n)$ diagonals in an $n \times n$ matrix. Sorting a diagonal of length $k$ costs $O(k \log k)$. Summing over all diagonals gives

  $$
  \sum_{\text{diagonals}} O(k \log k) \;\le\; O\!\left(\Big(\sum k\Big)\log n\right)
  \;=\; O(n^2 \log n),
  $$

  since $\sum k = n^2$ and each $k \le n$.
  Equivalently, $O(n)$ diagonals × $O(n \log n)$ per diagonal in the worst case yields $O(n^2 \log n)$. Traversal to extract and write back elements is $O(n^2)$ and does not change the bound.

- Space complexity: $O(n)$.

  We use a temporary array to store the elements of a diagonal before sorting them.

---