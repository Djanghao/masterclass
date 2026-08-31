# Constant time solution with Python3

**Author:** khamit_sk
**Votes:** 8
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4972465/](https://leetcode.com/problems/water-bottles-ii/solutions/4972465/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let's formulate the problem setup in mathematical terms. Define the following:
* $$N$$ = `numBottles`
* $$d$$ = `numExchange`
* $$x$$ = number of exchanges possible (earned bottles)

Hence, the total number of available bottles is:
$$N + x$$

The total number of bottles exchanged can be expressed as the sum:
$$\\sum_{i=0}^{x - 1} (d + i)$$

Given that it's impossible to exchange more bottles than we possess, we derive the inequality:
$$\\sum_{i=0}^{x - 1} (d + i) \\leq N + x$$
$$\\sum_{i=0}^{x - 1} d + \\sum_{i=1}^{x - 1} i \\leq N + x$$
$$xd + \\frac{x(x-1)}{2} \\leq N + x$$
$$x^2 + (2d-3)x - 2N \\leq 0$$

We aim to find the maximal positive $$x$$ that satisfies this inequality. The left side forms a parabola with branches pointing upwards, so we seek the larger root, rounded down.


# Approach
<!-- Describe your approach to solving the problem. -->
To solve the equation $$x^2 + (2d-3)x - 2N = 0$$, we use the discriminant:
$$D = (2d-3)^2 + 8N$$
$$x = \\Big\\lceil{\\frac{-(2d-3) + \\sqrt{D}}{2}}\\Big\\rceil$$

**Important Note:**
This method implies the ability to *"borrow"* an empty bottle from our *"future selves"*. To correct for this in integer terms, we simply replace $$N$$ with $$N-1$$ in our calculations!


# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
from math import sqrt

class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        numBottles -= 1
        D = (2 * numExchange - 3)**2 + 8 * numBottles
        res = int((-(2 * numExchange - 3) + sqrt(D)) / 2)
        return numBottles + res + 1
```