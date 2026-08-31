# Official Solution

**Link:** [https://leetcode.com/problems/fair-candy-swap/solution/](https://leetcode.com/problems/fair-candy-swap/solution/)

---

[TOC]

## Solution
---
### Approach 1: Solve the Equation

**Intuition**

If Alice swaps candy `x`, she expects some specific quantity of candy `y` back.

**Algorithm**

Say Alice and Bob have total candy $$S_A, S_B$$ respectively.

If Alice gives candy $$x$$, and receives candy $$y$$, then Bob receives candy $$x$$ and gives candy $$y$$.  Then, we must have

$$
S_A - x + y = S_B - y + x
$$

for a fair candy swap.  This implies

$$
y = x + \frac{S_B - S_A}{2}
$$

Our strategy is simple.  For every candy $$x$$ that Alice has, if Bob has candy $$y = x + \frac{S_B - S_A}{2}$$, we return $$[x, y]$$.  We use a `Set` structure to check whether Bob has the desired candy $$y$$ in constant time.

<iframe src="https://leetcode.com/playground/NhBgEN4r/shared" frameBorder="0" width="100%" height="361" name="NhBgEN4r"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(A\text{.length} + B\text{.length})$$.

* Space Complexity:  $$O(B\text{.length})$$, the space used by `setB`.  (We can improve this to $$\min(A\text{.length}, B\text{.length})$$ by using an if statement.)
<br />
<br />