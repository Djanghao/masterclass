# Official Solution

**Link:** [https://leetcode.com/problems/count-good-numbers/solution/](https://leetcode.com/problems/count-good-numbers/solution/)

---

[TOC]

## Solution

---

### Approach 1: Fast Exponentiation

**Intuition**

For the numbers at even indices, they can be $0, 2, 4, 6, 8$, a total of $5$ types. A digit string of length $n$ has $\lfloor \dfrac{n+1}{2} \rfloor$ even indices, where $\lfloor x \rfloor$ denotes the floor function of $x$.

For the numbers at odd indices, they can be $2, 3, 5, 7$, a total of $4$ types. A digit string of length $n$ has $\lfloor \dfrac{n}{2} \rfloor$ odd indices.

Therefore, the total number of good numbers in a digit string of length $n$ is:

$$
5^{\lfloor \frac{n+1}{2} \rfloor} \cdot 4^{\lfloor \frac{n}{2} \rfloor}
$$

In this question, since the maximum value of $n$ can reach $10^{15}$, directly calculating the power in the formula using ordinary multiplication would exceed the time limit. Therefore, we need to use the fast exponentiation algorithm to optimize the calculation of the power.

For reference, see [50. Pow(x, n) editorial](https://leetcode.com/problems/powx-n/editorial/).

**Implementation**

<iframe src="https://leetcode.com/playground/KaBezRLa/shared" frameBorder="0" width="100%" height="446" name="KaBezRLa"></iframe>

**Complexity Analysis**

* Time complexity: $O(\log n)$

Since the fast exponentiation algorithm halves the power times each time, it only takes $\log n$ time to find the power of $n$ of a number.

* Space complexity: $O(1)$

Only a few additional variables are needed.