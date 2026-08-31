# Official Solution

**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solution/](https://leetcode.com/problems/increment-submatrices-by-one/solution/)

---

### Approach: 2D Difference + Prefix Sum

#### Intuition

The problem asks us to perform multiple “increment all elements in a rectangle” operations on an $n \times n$ integer matrix $\textit{mat}$, and return the matrix $\textit{mat}$ after all operations have been applied. In the two-dimensional case, if we want to increment all elements within a rectangular submatrix, we can update a two-dimensional difference array $\textit{diff}$ as follows:

$$
\begin{aligned}
diff[row_1][col_1] &+= 1 \\
diff[row_2 + 1][col_1] &-= 1 \\
diff[row_1][col_2 + 1] &-= 1 \\
diff[row_2 + 1][col_2 + 1] &+= 1
\end{aligned}
$$

After processing all queries, the final matrix $\textit{mat}$ can be obtained by computing the prefix sum over the two-dimensional difference array:

$$
\textit{mat}[i][j] = \textit{diff}[i][j] + \textit{mat}[i - 1][j] + \textit{mat}[i][j - 1] - \textit{mat}[i - 1][j - 1]
$$

#### Implementation

<iframe src="https://leetcode.com/playground/BfaRhQnF/shared" frameBorder="0" width="100%" height="500" name="BfaRhQnF"></iframe>

#### Complexity Analysis

- Time complexity: $O( |queries| + n^2)$.

- Space complexity: $O(n^2)$.

---