# Binary Exponentiation

**Author:** TheNotoriousSDE
**Votes:** 4
**Link:** [https://leetcode.com/problems/powx-n/solutions/4429716/](https://leetcode.com/problems/powx-n/solutions/4429716/)

---

# Intuition
Upon initial consideration, the apparent approach is the naive brute-force method, as illustrated below:
```
function myPow(x: number, n: number): number {
  let result = 1;
  for (let i = 0; i < Math.abs(n); i++) {
    result *= x;
  }
  return n < 0 ? 1 / result : result;
};
```

Nevertheless, this approach proves to be suboptimal.

# Approach
It appears that a concept called 'binary exponentiation' is integral to the solution.

Let's recall the rule of associativity:

$(A \\cdot B) \\cdot C = A \\cdot (B \\cdot C)$

Since exponentiation is essentially a series of multiplications, this rule is applicable to our problem as well. Consider the following example:

$A^8 = (A^4)^2 = ((A^2)^2)^2 = A^2 \\cdot A^2 \\cdot A^2$

As observed, $A^n$ is equivalent to $A^2$ times $log_{2}{n}$, which equals $3$ for $log_{2}{8}$.

With this insight, the solution becomes evident as a loop. We iterate $log_{x}{n}$ (where $x$ is the base of power and $n$ is the power) times and multiplying $x$ by itself in each iteration, decrementing $n$ by halving it.

An additional consideration is the case of odd powers, which can be addressed straightforwardly. For instance:

$A^9 = A^8 \\cdot A^1 = ((A^2)^2)^2 \\cdot A^1 = A^2 \\cdot A^2 \\cdot A^2 \\cdot A^1$

To handle this, the following line is included at the beginning of the loop:

```
if (n % 2 === 1) result *= x;
```

Given that $A^1 = A$, we simply multiply the result variable by the base of the power once more if the power is odd.

# Complexity
- Time complexity: $O(log_{2}{n})$

- Space complexity: $O(n^x)$

# Code
```
function myPow(x: number, n: number): number {
  const isNegativePower = n < 0;
  n = Math.abs(n);
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) result *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return isNegativePower ? 1 / result : result;
};
```