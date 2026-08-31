# Official Solution

**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solution/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solution/)

---

[TOC]

## Solution

---

### Approach: Greedy

#### Intuition

The task is to select the longest subsequence of $s$ such that the binary value of this subsequence is less than or equal to $k$. The first instinct is to select as many $0$s as possible, because compared to $1$, a $0$ contributes nothing to the binary value.

So, is it okay to include all the $0$s? Yes, because choosing a $0$ is always better than choosing a $1$. Suppose we’ve already selected a subsequence and now want to add a $0$ to it. While the $0$ itself does not increase the binary value, it does double the contribution of any $1$s already present by shifting them to higher positions. However, if needed, we can simply remove the highest-order $1$ to maintain the binary value, keeping the total length the same. Therefore, adding a $0$ is always beneficial or at least non-harmful compared to adding a $1$.

After adding all the $0$s, we then try to include as many $1$s as possible. To do this, we start from the least significant bit and add $1$s greedily, ensuring the binary value always remains $\leq k$. Since $k$ restricts the maximum binary value, we can precompute the highest bit position that can be set to $1$, avoiding the need to recalculate the contribution of that bit each time.

With these two strategies, we identify all positions that can be added to the subsequence and return the result.

#### Implementation

<iframe src="https://leetcode.com/playground/F9B5znsG/shared" frameBorder="0" width="100%" height="395" name="F9B5znsG"></iframe>

#### Complexity Analysis

Let $n$ be the length of the string $s$.

- Time complexity: $O(n)$.
  
  We only need to traverse the string once.

- Space complexity: $O(1)$.

  Only a few additional variables are needed.