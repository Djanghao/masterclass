# Official Solution

**Link:** [https://leetcode.com/problems/positions-of-large-groups/solution/](https://leetcode.com/problems/positions-of-large-groups/solution/)

---

[TOC]

---
### Approach #1: Two Pointer [Accepted]

**Intuition**

We scan through the string to identify the start and end of each group.  If the size of the group is at least 3, we add it to the answer.

**Algorithm**

Maintain pointers `i, j` with `i <= j`.  The `i` pointer will represent the start of the current group, and we will increment `j` forward until it reaches the end of the group.

We know that we have reached the end of the group when `j` is at the end of the string, or `S[j] != S[j+1]`.  At this point, we have some group `[i, j]`; and after, we will update `i = j+1`, the start of the next group.

<iframe src="https://leetcode.com/playground/WaEqu5Kq/shared" frameBorder="0" width="100%" height="327" name="WaEqu5Kq"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `S`.

* Space Complexity: $$O(N)$$, the space used by the answer.