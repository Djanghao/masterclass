# Official Solution

**Link:** [https://leetcode.com/problems/count-partitions-with-even-sum-difference/solution/](https://leetcode.com/problems/count-partitions-with-even-sum-difference/solution/)

---

### Approach: Mathematics

#### Intuition

Let the sum of the elements in the array $\text{nums}$ be $\textit{sum}$, and let the sums of the two non-empty subarrays be $x$ and $y$, respectively. Clearly, $x + y = \textit{sum}$.

- If $\textit{sum}$ is odd, then either $x$ is odd and $y$ is even, or $x$ is even and $y$ is odd, so $x - y$ is odd.

- If $\textit{sum}$ is even, then either both $x$ and $y$ are odd or both are even, so $x - y$ is even.

From this, let $n$ be the number of elements in $\textit{nums}$. When $\textit{sum}$ is even, the number of partitioning schemes with an even difference is $n - 1$. When $\textit{sum}$ is odd, the number of such schemes is $0$.

#### Implementation

<iframe src="https://leetcode.com/playground/Bd4MEA3R/shared" frameBorder="0" width="100%" height="225" name="Bd4MEA3R"></iframe>

#### Complexity Analysis

Let $n$ be the length of $\textit{nums}$.

- Time complexity: $O(n)$.

- Space complexity: $O(1)$.

---