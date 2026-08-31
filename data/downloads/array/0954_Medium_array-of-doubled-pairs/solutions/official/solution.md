# Official Solution

**Link:** [https://leetcode.com/problems/array-of-doubled-pairs/solution/](https://leetcode.com/problems/array-of-doubled-pairs/solution/)

---

[TOC]

## Solution
---
### Approach 1: Greedy

**Intuition**

If `x` is currently the array element with the least absolute value, it must pair with `2*x`, as there does not exist any other `x/2` to pair with it.

**Algorithm**

Let's try to (virtually) "write" the final reordered array.

Let's check elements in order of absolute value.  When we check an element `x` and it isn't used, it must pair with `2*x`.  We will attempt to write `x, 2x` - if we can't, then the answer is `false`.  If we write everything, the answer is `true`.

To keep track of what we have not yet written, we will store it in a `count`.

<iframe src="https://leetcode.com/playground/KYkpdZQT/shared" frameBorder="0" width="100%" height="500" name="KYkpdZQT"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N \log N)$$, where $$N$$ is the length of `A`.

* Space Complexity:  $$O(N)$$.
<br />
<br />