# Official Solution

**Link:** [https://leetcode.com/problems/validate-stack-sequences/solution/](https://leetcode.com/problems/validate-stack-sequences/solution/)

---

[TOC]

## Solution
---
### Approach 1: Greedy

**Intuition**

We have to push the items in order, so when do we pop them?

If the stack has say, `2` at the top, then if we have to pop that value next, we must do it now.  That's because any subsequent push will make the top of the stack different from `2`, and we will never be able to pop again.

**Algorithm**

For each value, push it to the stack.

Then, greedily pop values from the stack if they are the next values to pop.

At the end, we check if we have popped all the values successfully.

<iframe src="https://leetcode.com/playground/SCthwzaC/shared" frameBorder="0" width="100%" height="344" name="SCthwzaC"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(N)$$, where $$N$$ is the length of `pushed` and `popped`.

* Space Complexity:  $$O(N)$$.
<br />
<br />