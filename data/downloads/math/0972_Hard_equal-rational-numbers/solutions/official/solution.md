# Official Solution

**Link:** [https://leetcode.com/problems/equal-rational-numbers/solution/](https://leetcode.com/problems/equal-rational-numbers/solution/)

---

[TOC]

## Solution
---
### Approach 1: Fraction Class

**Intuition**

As both numbers represent a fraction, we need a fraction class to handle fractions.  It should help us add two fractions together, keeping the answer in lowest terms.

**Algorithm**

We need to make sense of the fraction we are given.  The hard part is the repeating part.

Say we have a string like `S = "0.(12)"`.  It represents (for $$r = \frac{1}{100}$$):

$$
S = \frac{12}{100} + \frac{12}{10000} + \frac{12}{10^6} + \frac{12}{10^8} + \frac{12}{10^{10}} + \cdots
$$

$$
S = 12 * (r + r^2 + r^3 + \cdots)
$$

$$
S = 12 * \frac{r}{1-r}
$$

as the sum $$(r + r^2 + r^3 + \cdots)$$ is a geometric sum.

In general, for a repeating part $$x$$ with length $$k$$, we have $$r = 10^{-k}$$ and the contribution is $$\frac{xr}{1-r}$$.

The other two parts are easier, as it is just a literal interpretation of the value.

<iframe src="https://leetcode.com/playground/NkchnjYr/shared" frameBorder="0" width="100%" height="500" name="NkchnjYr"></iframe>

**Complexity Analysis**

* Time Complexity:  $$O(1)$$, if we take the length of $$S, T$$ as $$O(1)$$.

* Space Complexity:  $$O(1)$$.
<br />
<br />