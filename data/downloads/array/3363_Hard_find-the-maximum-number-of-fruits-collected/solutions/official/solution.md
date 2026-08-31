# Official Solution

**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solution/](https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/solution/)

---

### Approach: Dynamic Programming

#### Intuition

Firstly, since the child starting from $(0,0)$ can only move $n-1$ times, he can only walk along the main diagonal. Therefore, we only need to calculate the maximum total number of fruits collected by the remaining two children.

For the child starting from the upper-right corner $(0, n-1)$, it's easy to see that he can only move above the main diagonal and cannot cross it; otherwise, he won’t be able to reach the lower-right corner in exactly $n-1$ moves. The same constraint applies to the other child starting from the lower-left corner $(n-1, 0)$.

Since the three children are not allowed to enter the same room, we only need to consider one of these two diagonal-symmetric cases. We can use dynamic programming to compute the maximum fruits collected along one valid path. Then, by flipping the matrix along the main diagonal, we can reuse the same logic to compute the other path. This transforms the problem into:

- Starting from the top-right corner $(0, n-1)$, without passing through the main diagonal, find the maximum number of fruits that can be collected by the time the child reaches room $(n-2, n-1)$.

This can be solved using dynamic programming. Let $\textit{dp}[i][j]$ represent the maximum number of fruits that can be collected when reaching room $(i, j)$. For $1 \leq i < n-1$ and $1 < j < n$, we define the recurrence as

$$
\textit{dp}[i][j] = \max(\textit{dp}[i-1][j-1],\ \textit{dp}[i-1][j],\ \textit{dp}[i-1][j+1]) + \textit{fruits}[i][j].
$$

Since the destination is $(n-2, n-1)$, and every step moves the child downward (increasing $i$), the column index $j$ is always greater than $i$. So we can initialize $j$ to start from $\max(n-1-i,\ i+1)$ at each row.

#### Implementation

<iframe src="https://leetcode.com/playground/QAGUp2fg/shared" frameBorder="0" width="100%" height="500" name="QAGUp2fg"></iframe>

#### Complexity Analysis

Let $n$ be the size of the 2D grid $\textit{fruits}$.

- Time complexity: $O(n^2)$.
  
  The dynamic programming required to calculate the contribution of the upper triangular area takes $O(n^2)$ time.

- Space complexity: $O(n)$.
  
  We use a rolling array to optimize the space complexity from $O(n^2)$ to $O(n)$.
  
---