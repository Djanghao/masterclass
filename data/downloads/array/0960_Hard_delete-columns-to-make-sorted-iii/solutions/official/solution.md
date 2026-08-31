# Official Solution

**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solution/](https://leetcode.com/problems/delete-columns-to-make-sorted-iii/solution/)

---

[TOC]

## Solution
---
### Approach 1: Dynamic Programming

**Intuition and Algorithm**

This is a tricky problem that is hard to build an intuition about.

First, lets try to find the number of columns to keep, instead of the number to delete.  At the end, we can subtract to find the desired answer.

Now, let's say we must keep the first column `C`.  The next column `D` we keep must have all rows lexicographically sorted (ie. `C[i] <= D[i]`), and we can say that we have deleted all columns between `C` and `D`.

Now, we can use dynamic programming to solve the problem in this manner.  Let `dp[k]` be the number of columns that are kept in answering the question for input `[row[k:] for row in A]`.  The above gives a simple recursion for `dp[k]`.

<iframe src="https://leetcode.com/playground/gKLeGQRp/shared" frameBorder="0" width="100%" height="395" name="gKLeGQRp"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N * W^2)$$, where $$N$$ is the length of `A`, and $$W$$ is the length of each word in `A`.

* Space Complexity:  $$O(W)$$.
<br />
<br />