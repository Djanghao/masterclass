# O(N) Combinatorics Math

**Author:** zsq007
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5988122/](https://leetcode.com/problems/find-the-number-of-k-even-arrays/solutions/5988122/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
0. An array can be regarded as alternating sections of even and odd numbers.

1. Let $x$ be the number of sections of even numbers, $n_e$ and $n_o$ be the counts of even/odd numbers in the array. Given that $k$ is the count of indices `i` where both `arr[i]` and `arr[i+1]` are even, we get $k = n_e - x$.
    Therefore, $n_e = k+x$, $n_o = n-k-x$.
2. Next, arrange the even/odd numbers into the even/odd sections.

    - For even numbers and sections, it can be modelled as arranging $k+x$ balls into $x$ boxes, each box has at least one ball: $C(k+x-1,\\ x-1)$.
    
    - Odd sections are similar, but with one more virtual ball on each end. Arranging $n-k-x+2$ balls into $x+1$ boxes, each box has at least one ball: $C(n-k-x+1,\\ x)$.

3. For each even number, there are `m // 2` choices. For each odd number, there are `(m+1) // 2` choices.

4. Constraints of $x$:
    - Upper bound: the count of odd numbers is no less than the count of odd sections, $n-k-x+2 \\geq x+1$, $x \\leq (n-k+1) / 2$.
    - Lower bound: $x \\geq 0$. Note that when $x = 0$, all numbers are odd. This case is added **only if** $k = 0$.


5. For each $x$, multiply the combinatorics from above together: number of ways to a. arrange even sections; b. arrage odd sections; c. choices of even numbers; d. choices of odd numbers.

    Sum up the results for each valid $x$ to get the final count.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Use `math.comb()` to compute combinatorics efficiently in Python, but the complexity should be $O(N^2)$.
2. Precompute the powers and factorials, and use Fermat's Little Theorem ($a^{-1} \\equiv a^{p-2} \\mod{p}$) for modular inverses, $O(N \\cdot \\log \	ext{mod})$.

# Complexity
- Time complexity: $O(N \\cdot \\log \	ext{mod})$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 [Combinatorics]
from math import comb
class Solution:
    def countOfArrays(self, n: int, m: int, k: int) -> int:
        o, e, mod = (m+1)//2, m//2, 10**9+7

        res = 0

        # corner case: when there's no even sections (x == 0), all numbers are odd
        if k == 0:
            res += pow(o, n, mod)

        for x in range(1, (n+1-k)//2+1):

            # See Intuition 2 & 3
            # Number of ways to arrange even sections   *
            # Number of ways to arrange odd sections    *
            # Number of ways to choose even numbers     *
            # Number of ways to choose odd numbers  % mod

            res += comb(x+k-1, x-1) * comb(n-x-k+1, x) \\
                    * pow(e, x+k, mod) * pow(o, n-x-k, mod) % mod
        
        return res % mod
```
```python3 [O(N log mod)]
class Solution:
    def countOfArrays(self, n: int, m: int, k: int) -> int:
        o, e, mod = (m+1)//2, m//2, 10**9+7

        # Precompute powers and factorials
        op, ep, fac = [1], [1], [1]
        for i in range(n):
            op.append(op[-1]*o % mod)
            ep.append(ep[-1]*e % mod)
            fac.append(fac[-1]*(i+1) % mod)

        res = 0
        if k == 0:
            res += op[n]

        for x in range(1, (n+1-k)//2+1):
            res += ep[x+k] * op[n-x-k] \\
                * fac[x+k-1] * pow(fac[x-1] * fac[k], mod-2, mod) \\
                * fac[n-x-k+1] * pow(fac[x] * fac[n-k+1-2*x], mod-2, mod) \\
                % mod
        
        return res % mod
```
```python3 [DP O(NK)]
class Solution:
    def countOfArrays(self, n: int, m: int, k: int) -> int:
        o, e, mod = (m+1)//2, m//2, 10**9+7

        dpOdd, dpEvn = [o]+[0]*k, [e]+[0]*(k+1)

        for _ in range(n-1):
            for i in range(k,-1,-1):
                dpOdd[i], dpEvn[i] = \\
                        (dpOdd[i] + dpEvn[i]) * o % mod, \\
                        (dpOdd[i] + dpEvn[i-1]) * e % mod
            
        return (dpOdd[k] + dpEvn[k]) % mod