# Official Solution

**Link:** [https://leetcode.com/problems/broken-calculator/solution/](https://leetcode.com/problems/broken-calculator/solution/)

---

[TOC]

## Solution
---
### Approach 1: Work Backwards

**Intuition**

Instead of multiplying by 2 or subtracting 1 from `startValue`, we could divide by 2 (when `target` is even) or add 1 to `target`.

The motivation for this is that it turns out we always greedily divide by 2:

* If say `target` is even, then if we perform 2 additions and one division, we could instead perform one division and one addition for less operations [`(target + 2) / 2` vs `target / 2 + 1`].

* If say `target` is odd, then if we perform 3 additions and one division, we could instead perform 1 addition, 1 division, and 1 addition for less operations [`(target + 3) / 2` vs `(target + 1) / 2 + 1`].

**Algorithm**

While `target` is larger than `startValue`, add 1 if it is odd, else divide by 2.  After, we need to do `startValue - target` additions to reach `startValue`.

<iframe src="https://leetcode.com/playground/B7BL7uJQ/shared" frameBorder="0" width="100%" height="293" name="B7BL7uJQ"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(\log target)$$.

* Space Complexity:  $$O(1)$$.
<br />
<br />