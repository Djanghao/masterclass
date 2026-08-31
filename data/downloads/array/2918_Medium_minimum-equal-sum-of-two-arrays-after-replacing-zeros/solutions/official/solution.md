# Official Solution

**Link:** [https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solution/](https://leetcode.com/problems/minimum-equal-sum-of-two-arrays-after-replacing-zeros/solution/)

---

[TOC]

## Solution

--- 

### Approach: Minimum Sum Matching

#### Intuition

The task requires us to replace all $0$s in the two arrays with positive integers and make their sums equal. It is not difficult to imagine that replacing all $0$s in an array with $1$s will make the sum of its elements as small as possible.

Let $\textit{sum}_1$ and $\textit{sum}_2$ be the sums of $\textit{nums}_1$ and $\textit{nums}_2$, respectively. Let $\textit{zero}_1$ and $\textit{zero}_2$ be the number of zeros in the two arrays. The minimum sums that the two arrays can reach are $\textit{sum}_1 + \textit{zero}_1$ and $\textit{sum}_2 + \textit{zero}_2$, respectively.

When there is at least one $0$ in both arrays, a solution always exists, and the minimum possible equal sum is $\max(\textit{sum}_1 + \textit{zero}_1, \textit{sum}_2 + \textit{zero}_2)$. However, if there are no $0$s in one of the arrays, and the minimum possible sum of the other array exceeds the fixed sum of this array, then it is impossible to make the sums equal, so we return $-1$.

#### Implementation

<iframe src="https://leetcode.com/playground/6TJxj3Hx/shared" frameBorder="0" width="100%" height="500" name="6TJxj3Hx"></iframe>

#### Complexity Analysis

Let $n$ and $m$ be the lengths of $\textit{nums}_1$ and $\textit{nums}_2$, respectively.

- Time complexity: $O(n + m)$.

We need to traverse both arrays once.

- Space complexity: $O(1)$.

Only a few additional variables are needed.