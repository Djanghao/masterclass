# no loops one-liner solution - closed-form algebraic, truly O(1)

**Author:** chadpalmer2
**Votes:** 7
**Link:** [https://leetcode.com/problems/water-bottles-ii/solutions/4969481/](https://leetcode.com/problems/water-bottles-ii/solutions/4969481/)

---

# Intuition
pretty easy to think up the solution that just loops, adding and subtracting to find the solution. this is a pretty na\xEFve solution though. looking at the problem and tinkering a bit i realized there had to be a closed-form algebraic solution.

# Approach
given $B$ bottles and initial exchange rate $E$, we first drink $B$ bottles. then we have $B$ empties. we then repeat the following steps until $E > B$:

1. exchange $E$ empties for 1 bottle 
2. drink that bottle

the end result in one loop is that we now have $B - E + 1$ empties, and the new exchange rate $E + 1$. of course, we'll repeat the above steps if $B - E + 1 \\leq E + 1$.

we could now write a simple solution using a while loop to determine whether we've hit the end condition. alternatively, let's use math to instead calculate how many times we would loop. let's first recognize a pattern in (empties, exchange rate) after looping the above steps a few times:
$0: B, E$
$1: B - E + 1, E + 1$
$2: B - E + 1 - (E - 1) + 1, E + 2$
$3: B - E + 1 - (E - 1) + 1 - (E - 2) + 1, E + 3$
we've iterated enough now to come up with a general rule. after $k$ iterations, from the empties we add 1 and subtract $E$ $k$ times, and subtract the sum of the numbers from 1 to $k-1$ as well (try and reason out this formula for yourself from the above example):
$k: B - kE + k - \\Sigma_{i=1}^{k-1} i, E + k$
recall that we stop iterating once the exchange rate exceeds the number of empties. then to find the number of times we would loop, we need only find positive integer $k$ minimizing:
$B - kE + k - \\Sigma_{i=1}^{k-1} i > E + k$
gauss summation:
$B - kE + k - k(k-1)/2 > E + k$
solve for a quadratic in $k$:
$k^2 + (2E - 1)k + (2E - 2B) > 0$
for quality of life: as we're looking for an integer solution, shifting the graph over to the right by one will allow us to use a a greater than or equals sign, which would be a bit nicer to deal with in situations where the solution is exactly an integer. substituting in $k-1$ for $k$ and solving yields:
$k^2 + (2E-3)k + (-2B+2) >= 0$
substituting into the quadratic formula and taking the larger root:
$k = \	ext{floor}(\\frac{-(2E-3) + \\sqrt{(2E-3)^2 - 4(-2B+2)}}{2})$
$k = \	ext{floor}(\\frac{-2E + 3 + \\sqrt{4E^2 + 8B - 12E + 1}}{2})$
this is then the number of iterations we'll do of the above loop before we are no longer able to exchange empties. notice that we consume $B$ bottles to start, and one bottle per loop. then the number of bottles consumed is simply
$B + k$
$B + \	ext{floor}(\\frac{-2E + 3 + \\sqrt{4E^2 + 8B - 12E + 1}}{2})$.
conveniently, division in C++ will do the flooring for us.

# Complexity
algebraic formula. assuming efficient implementations of arithmetical formulae, O(1).

# Code
```
class Solution {
public:
    int maxBottlesDrunk(int numBottles, int numExchange) {
        int b, e = numBottles, numExchange;
        return b + (((-2*e) + 3 + sqrt(4*e*e + 8*b - 12*e + 1)) / 2);
    }
};
```