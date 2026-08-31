# Official Solution

**Link:** [https://leetcode.com/problems/binary-prefix-divisible-by-5/solution/](https://leetcode.com/problems/binary-prefix-divisible-by-5/solution/)

---

### Approach: Traversal

#### Intuition

Let $\textit{num}_i$ be the binary number represented by the prefix of the array $\textit{nums}$ from index $0$ to index $i$. Then $\textit{num}_0 = \textit{nums}[0]$, and when $i > 0$, $\textit{num}i = \textit{num}{i-1} \times 2 + \textit{nums}[i]$. Let $n$ be the length of $\textit{nums}$. For each $0 \le i < n$, we can compute $\textit{num}_i$ sequentially. For each value, we check whether it is divisible by $5$ to obtain the answer.

Since $\textit{nums}$ may be very long, storing the full value of each $\textit{num}_i$ can lead to overflow. Because we only need to know whether each $\textit{num}_i$ is divisible by $5$, it is enough to keep track of the remainder during the calculation.

Let $\textit{remain}_i$ be the remainder when $\textit{num}_i$ is divided by $5$. Then $\textit{remain}_0 = \textit{nums}[0]$ (since $\textit{nums}[0]$ is always less than $5$), and when $i > 0$, $\textit{remain}i = (\textit{remain}{i-1} \times 2 + \textit{nums}[i]) \bmod 5$. We simply check whether each $\textit{remain}_i$ equals $0$. Because $\textit{remain}_i$ is always less than $5$, overflow cannot occur.

Why does checking whether $\textit{remain}_i$ equals zero give the correct result? We can prove this by induction.

When $i = 0$, since $\textit{num}_0 = \textit{nums}[0] < 5$, we have $\textit{remain}_0 = \textit{num}_0$, so $\textit{remain}_0 = \textit{num}_0 \bmod 5$ holds.

When $i > 0$, assume that $\textit{remain}{i-1} = \textit{num}{i-1} \bmod 5$ holds. Consider $\textit{num}_i \bmod 5$ and $\textit{remain}_i$:

$$
\begin{aligned}
\textit{num}_i\bmod 5=&(\textit{num}_{i-1} \times 2+\textit{nums}[i])\bmod 5 \\
=&(\textit{num}_{i-1} \times 2)\bmod 5+\textit{nums}[i]\bmod 5 \\
\\
\textit{remain}_i=&(\textit{remain}_{i-1} \times 2+\textit{nums}[i])\bmod 5 \\
=&(\textit{num}_{i-1}\bmod 5 \times 2+\textit{nums}[i])\bmod 5 \\
=&(\textit{num}_{i-1}\bmod 5 \times 2)\bmod 5+\textit{nums}[i]\bmod 5 \\
=&(\textit{num}_{i-1} \times 2)\bmod 5+\textit{nums}[i]\bmod 5
\end{aligned}
$$

Thus $\textit{remain}_i = \textit{num}_i \bmod 5$.

Therefore, for any $0 \le i < n$, we have $\textit{remain}_i = \textit{num}_i \bmod 5$, so computing $\textit{remain}_i$ always yields the correct result.

#### Implementation

<iframe src="https://leetcode.com/playground/9nPbAr47/shared" frameBorder="0" width="100%" height="276" name="9nPbAr47"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.
  
  Traverse the array once and compute the prefix as we go.

- Space complexity: $O(1)$.
  
  In addition to the return value, the extra space used is constant.

---