# Official Solution

**Link:** [https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solution/](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/solution/)

---

### Approach: Dynamic Programming

#### Intuition

Given a number $n$, the task is to return the number of sets of distinct integers $[n_1, n_2, \cdots, n_k]$ such that:

$$
n = n_1^x + n_2^x + \cdots + n_k^x.
$$

We can think of $n$ as the capacity of a backpack, and the values $[1^x, 2^x, 3^x, \cdots]$ as items. The essence of the problem is a 0-1 knapsack problem. We define $\textit{dp}[i][j]$ as the number of ways to choose distinct integers from the first $i$ integers such that the sum of their $x$-th powers is $j$.

Starting from $1$, we enumerate all integers. Suppose the current enumerated number is $i$ and the target sum is $j$. Then we consider two cases:
- Case 1: Do not select $i$

This is equivalent to selecting a subset from the first $i - 1$ numbers whose $x$-th powers sum to $j$. So,
  $$
  \textit{dp}[i][j] = \textit{dp}[i - 1][j].
  $$

- Case 2: Select $i$

The $x$-th power of $i$ is $i^x$. This is only valid if $i^x \le j$. In this case, we must select distinct numbers from the first $i - 1$ numbers such that their $x$-th powers sum to $j - i^x$. We then add $i^x$ to reach $j$. So,
  $$
  \textit{dp}[i][j] = \textit{dp}[i - 1][j - i^x].
  $$
Putting both cases together, the state transition formula becomes:

- If $j < i^x$, then
  $$
  \textit{dp}[i][j] = \textit{dp}[i - 1][j].
  $$
 
- If $j \geq i^x$, then
  $$
  \textit{dp}[i][j] = \textit{dp}[i - 1][j] + \textit{dp}[i - 1][j - i^x].
  $$

To compute the result, we iterate over all $i$ from $1$ to $n$, and for each $i$, we iterate $j$ from $0$ to $n$, filling in each subproblem $\textit{dp}[i][j]$ using the above recurrence. The final answer is $\textit{dp}[n][n]$.

#### Implementation

<iframe src="https://leetcode.com/playground/kqTMVEMj/shared" frameBorder="0" width="100%" height="378" name="kqTMVEMj"></iframe>

**Space Optimization**

According to the knapsack principle, the space complexity can be optimized by reducing the dimensionality of the DP array. Let $\textit{dp}[j]$ represent the number of combinations of distinct integers whose $x$-th powers sum up to $j$. To compute this efficiently, we iterate over $j$ in reverse order (from $n$ down to $0$) to avoid overcounting combinations that reuse the same number.

When considering whether to include the number $i$, the update rules are as follows:

- If $j < i^x$, then $\textit{dp}[j]$ remains unchanged because $i^x$ is too large to contribute to the current sum.
- If $j \geq i^x$, then we update:
  $$
  \textit{dp}[j] = \textit{dp}[j] + \textit{dp}[j - i^x].
  $$

This reflects the idea that any way to form the sum $j - i^x$ can be extended by adding $i^x$ to reach $j$.

After processing all valid $i$ values, the final answer is given by $\textit{dp}[n]$.

<iframe src="https://leetcode.com/playground/W49C26wY/shared" frameBorder="0" width="100%" height="378" name="W49C26wY"></iframe>

#### Complexity Analysis

Let $n$ and $x$ be the given numbers.

- Time complexity: $O(n\sqrt[x]{n})$. 
  
  We traverse $i$ from small to large. Since $i^x$ must not exceed $n$, the maximum value of $i$ is at most $\sqrt[x]{n}$. The dynamic programming needs to compute at most $n\sqrt[x]{n}$ substates, and the time to compute each substate is $O(1)$. Therefore, the total time complexity is $O(n\sqrt[x]{n})$.

- Space complexity: $O(n)$.
  
  After space optimization, we only need to store $n$ states, which requires $O(n)$ space.
  
---