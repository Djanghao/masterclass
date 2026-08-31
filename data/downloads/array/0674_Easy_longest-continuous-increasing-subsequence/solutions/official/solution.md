# Official Solution

**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solution/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solution/)

---

[TOC]


### Approach #1: Sliding Window [Accepted]

**Intuition and Algorithm**

Every (continuous) increasing subsequence is disjoint, and the boundary of each such subsequence occurs whenever `nums[i-1] >= nums[i]`. When it does, it marks the start of a new increasing subsequence at `nums[i]`, and we store such `i` in the variable `anchor`.

For example, if `nums = [7, 8, 9, 1, 2, 3]`, then `anchor` starts at `0` (`nums[anchor] = 7`) and gets set again to `anchor = 3` (`nums[anchor] = 1`). Regardless of the value of `anchor`, we record a candidate answer of `i - anchor + 1`, the length of the subarray `nums[anchor], nums[anchor+1], ..., nums[i]`, and our answer gets updated appropriately.

<iframe src="https://leetcode.com/playground/aQJp75Ls/shared" frameBorder="0" width="100%" height="225" name="aQJp75Ls"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the length of `nums`. We perform one loop through `nums`.

* Space Complexity: $$O(1)$$, the space used by `anchor` and `ans`.