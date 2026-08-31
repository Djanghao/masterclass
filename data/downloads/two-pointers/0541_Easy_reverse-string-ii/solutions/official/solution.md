# Official Solution

**Link:** [https://leetcode.com/problems/reverse-string-ii/solution/](https://leetcode.com/problems/reverse-string-ii/solution/)

---

[TOC]

---
### Approach #1: Direct [Accepted]

**Intuition and Algorithm**

We will reverse each block of `2k` characters directly.

Each block starts at a multiple of `2k`: for example, `0, 2k, 4k, 6k, ...`. One thing to be careful about is we may not reverse each block if there aren't enough characters.

To reverse a block of characters from `i` to `j`, we can swap characters in positions `i++` and `j--`.

<iframe src="https://leetcode.com/playground/ke3DMSV2/shared" frameBorder="0" width="100%" height="293" name="ke3DMSV2"></iframe>

**Complexity Analysis**

* Time Complexity: $$O(N)$$, where $$N$$ is the size of `s`. We build a helper array, plus reverse about half the characters in `s`.

* Space Complexity: $$O(N)$$, the size of `a`.