# Official Solution

**Link:** [https://leetcode.com/problems/shortest-distance-to-a-character/solution/](https://leetcode.com/problems/shortest-distance-to-a-character/solution/)

---

[TOC]

---
### Approach #1: Min Array [Accepted]

**Intuition**

For each index `S[i]`, let's try to find the distance to the next character `C` going left, and going right.  The answer is the minimum of these two values.

**Algorithm**

When going left to right, we'll remember the index `prev` of the last character `C` we've seen.  Then the answer is `i - prev`.

When going right to left, we'll remember the index `prev` of the last character `C` we've seen.  Then the answer is `prev - i`.

We take the minimum of these two answers to create our final answer.

<iframe src="https://leetcode.com/playground/EEsCmUaK/shared" frameBorder="0" width="100%" height="395" name="EEsCmUaK"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `S`.  We scan through the string twice.

* Space Complexity: $$O(N)$$, the size of `ans`.