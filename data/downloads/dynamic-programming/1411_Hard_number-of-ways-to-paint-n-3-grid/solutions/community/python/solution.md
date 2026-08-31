# Python Simple DP

**Author:** WangQiuc
**Votes:** 17
**Link:** [https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/575047/](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/solutions/575047/)

---

Each row's color depends on previous row. Intuitively we should use dp here.
And we would either use 3 colors or 2 colors to paint one row.

So let F(n) be number of ways to paint nth row with 3 colors, G(n) be that with 2 colors.
Suppose n-1th row is a F-type {ABC}:
We can paint next row with 2 F-type {BCA, CAB} and 2 G-type {BAB, BCB}. So F(n) = 2F(n-1) + 2G(n-1)
Similarly suppose n-1th row is a G-type {ABA}:
We can paint next row with 2 F-type {BAC, CAB} and 3 G-type {BAB, BCB, CAC}. So G(n) = 2F(n-1) + 3G(n-1)

The base case is 1st row. There are 6 F-type (3 * 2 * 1) and 6 G-type (3 * 2) base on permutation rules

```
def numOfWays(n):
    f = g = 6
    M = 10 ** 9 + 7
    for _ in range(n - 1):
        f, g = (2*f + 2*g) % M, (2*f + 3*g) % M
    return (f + g) % M
```