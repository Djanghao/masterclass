# Official Solution

**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solution/](https://leetcode.com/problems/string-without-aaa-or-bbb/solution/)

---

[TOC]

## Solution
---
### Approach 1: Greedy

**Intuition**

Intuitively, we should write the most common letter first.  For example, if we have `A = 6, B = 2`, we want to write `'aabaabaa'`.  The only time we don't write the most common letter is if the last two letters we have written are also the most common letter

**Algorithm**

Let's maintain `A, B`: the number of `'a'` and `'b'`'s left to write.

If we have already written the most common letter twice, we'll write the other letter.  Otherwise, we'll write the most common letter.

<iframe src="https://leetcode.com/playground/ZfukSBhF/shared" frameBorder="0" width="100%" height="500" name="ZfukSBhF"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(A+B)$$.

* Space Complexity:  $$O(A+B)$$.
<br />
<br />