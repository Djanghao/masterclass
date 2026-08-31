# Official Solution

**Link:** [https://leetcode.com/problems/binary-trees-with-factors/solution/](https://leetcode.com/problems/binary-trees-with-factors/solution/)

---

[TOC]

---
### Approach #1: Dynamic Programming [Accepted]

**Intuition**

For any valid tree, the largest value `v`, in that tree, must be the root. So, let's say that `dp(v)` is the number of ways to make a tree with root node `v`.

If the root node of the tree (with value `v`) has children with values `x` and `y` (where `x * y == v` must be true), then there are `dp(x) * dp(y)` ways to make this tree.

Each unique value in `A` is a valid *root* value for *at least one* tree - a tree containing just that node.

To get the total number of valid trees, we should calculate how many valid trees there are with each possible root value, and then add them all together.

**Algorithm**

Let `dp[i]` be the number of ways to have a root node with value `A[i]`.

Since in the above example we always have `x < v` and `y < v`, we can calculate the values of `dp[i]` in increasing order using dynamic programming.

For some root value `A[i]`, let's try to find candidates for the children with values `A[j]` and `A[i] / A[j]` (so that evidently `A[j] * (A[i] / A[j]) = A[i]`).  To do this quickly, we will need `index` which looks up this value: if `A[k] = A[i] / A[j]`, then `index[A[i] / A[j]] = k`.

After, we'll add all possible `dp[j] * dp[k]` (with `j < i, k < i`) to our answer `dp[i]`.  In our Java implementation, we carefully used `long` so avoid overflow issues.

<iframe src="https://leetcode.com/playground/RKzbwMYk/shared" frameBorder="0" width="100%" height="500" name="RKzbwMYk"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N^2)$$, where $$N$$ is the length of `A`.  This comes from the two for-loops iterating `i` and `j`.

* Space Complexity: $$O(N)$$, the space used by `dp` and `index`.