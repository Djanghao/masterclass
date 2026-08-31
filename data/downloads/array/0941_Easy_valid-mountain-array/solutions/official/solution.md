# Official Solution

**Link:** [https://leetcode.com/problems/valid-mountain-array/solution/](https://leetcode.com/problems/valid-mountain-array/solution/)

---

[TOC]

## Solution
---
### Approach 1: One Pass

**Intuition**

If we walk along the mountain from left to right, we have to move strictly up, then strictly down.

**Algorithm**

Let's walk up from left to right until we can't: that has to be the peak.  We should ensure the peak is not the first or last element.  Then, we walk down.  If we reach the end, the array is valid, otherwise its not.

<iframe src="https://leetcode.com/playground/Sfk5vDeR/shared" frameBorder="0" width="100%" height="395" name="Sfk5vDeR"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(1)$$.
<br />
<br />