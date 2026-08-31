# Official Solution

**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solution/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solution/)

---

### Approach: Dynamic Programming

#### Intuition

It can be seen that this is a typical counting problem, which is generally solved using dynamic programming algorithms.

Considering the scale of $k$ is $1 \le k \le 50$, let the state $\textit{dp}(i,\, j,\, \textit{r})$ represent the number of ways to have a path sum with remainder $r$ when divided by $k$ at position $(i,\, j)$ in the matrix. Then, the initial state is:

$$
\begin{aligned}

\textit{dp}(i,\, j,\, \textit{r}) =
    \begin{cases}
    1, & (i,\, j,\, r) = (0,\, 0,\, \textit{grid}_{0,0} \bmod k)\\
    0, & (i,\, j,\, r) \ne (0,\, 0,\, \textit{grid}_{0,0} \bmod k)
    \end{cases}

\end{aligned}
$$

Then consider the state transition. $dp(i,\, j,\, r)$ can be derived from the states above and to the left, that is:

$$
\begin{aligned}

\textit{dp}(i,\, j,\, r) =

    \begin{cases}
    \textit{dp}(i - 1,\, j,\, \textit{prevMod}), & i \gt 0, & j = 0\\
    \textit{dp}(i,\, j - 1,\, \textit{prevMod}), & i = 0, & j \gt 0\\
    \textit{dp}(i - 1,\, j,\, \textit{prevMod}) + dp(i,\, j - 1,\, \textit{prevMod}), & i \gt 0, & j \gt 0
    \end{cases}

\end{aligned}
$$

The key is $\textit{prevMod}$, which represents the remainder component of the previous state. Considering the relationship between $\textit{prevMod}$ and $r$, we have:

$$
\begin{aligned}
\textit{prevMod} + \textit{grid}_{i,j} \equiv r \pmod k
\end{aligned}
$$

That is:

$$
\begin{aligned}
\textit{prevMod} \equiv r - \textit{grid}_{i,j} \pmod k
\end{aligned}
$$

Expand it according to the rules of congruence, finally getting:

$$
\begin{aligned}
\textit{prevMod} = (r - \textit{grid}_{i,j} + k) \bmod k
\end{aligned}
$$

This is a typical counting problem that is well suited to a dynamic programming approach.

Given that $1 \le k \le 50$, let the state $\textit{dp}(i, j, r)$ represent the number of ways to obtain a path sum whose remainder modulo $k$ is $r$ at position $(i, j)$ in the matrix. The initial state is:

$$
\begin{aligned}

\textit{dp}(i, j, r) =
\begin{cases}
1, & (i, j, r) = (0, 0,, \textit{grid}_{0,0} \bmod k)\
0, & \text{otherwise}
\end{cases}

\end{aligned}
$$

For the transition, $\textit{dp}(i, j, r)$ can be derived from the cell above or the cell to the left:

$$
\begin{aligned}

\textit{dp}(i, j, r) =
\begin{cases}
\textit{dp}(i - 1, j, \textit{prevMod}), & i > 0,, j = 0\
\textit{dp}(i, j - 1, \textit{prevMod}), & i = 0,, j > 0\
\textit{dp}(i - 1, j, \textit{prevMod}) + \textit{dp}(i, j - 1, \textit{prevMod}), & i > 0,, j > 0
\end{cases}

\end{aligned}
$$

The term $\textit{prevMod}$ is the remainder needed from the preceding state. From the congruence relation

$$
\begin{aligned}
\textit{prevMod} + \textit{grid}_{i,j} \equiv r \pmod{k}
\end{aligned}
$$

we obtain

$$
\begin{aligned}
\textit{prevMod} = (r - \textit{grid}_{i,j} + k) \bmod k
\end{aligned}
$$

Using this recurrence, compute the dp table and apply the modulus $10^9 + 7$ as required. After filling the table, $\textit{dp}(n, m, 0)$ is the final result.

#### Implementation

<iframe src="https://leetcode.com/playground/cHM7q6Dh/shared" frameBorder="0" width="100%" height="500" name="cHM7q6Dh"></iframe>

#### Complexity Analysis

- Time complexity: $O(m \times n \times k)$.

- Space complexity: $O(m \times n \times k)$.