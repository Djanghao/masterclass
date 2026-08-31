# Official Solution

**Link:** [https://leetcode.com/problems/shifting-letters/solution/](https://leetcode.com/problems/shifting-letters/solution/)

---

[TOC]

---
### Approach #1: Prefix Sum [Accepted]

**Intuition**

Let's ask how many times the `i`th character is shifted.

**Algorithm**

The `i`th character is shifted `shifts[i] + shifts[i+1] + ... + shifts[shifts.length - 1]` times.  That's because only operations at the `i`th operation and after, affect the `i`th character.

Let `X` be the number of times the current `i`th character is shifted.  Then the next character `i+1` is shifted `X - shifts[i]` times.

For example, if `S.length = 4` and `S[0]` is shifted `X = shifts[0] + shifts[1] + shifts[2] + shifts[3]` times, then `S[1]` is shifted `shifts[1] + shifts[2] + shifts[3]` times, `S[2]` is shifted `shifts[2] + shifts[3]` times, and so on.

In general, we need to do `X -= shifts[i]` to maintain the correct value of `X` as we increment `i`.

<iframe src="https://leetcode.com/playground/JbgCrRzF/shared" frameBorder="0" width="100%" height="327" name="JbgCrRzF"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `S` (and `shifts`).

* Space Complexity:  $$O(N)$$, the space needed to output the answer.