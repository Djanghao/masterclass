# Swift | Math solution explained

**Author:** VladimirTheLeet
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-pivot-integer/solutions/4869517/](https://leetcode.com/problems/find-the-pivot-integer/solutions/4869517/)

---

# Formulas
The sum of arithmetic sequence of $m$ elements, with first term $a_1$ and common difference $d$ is denoted by $S_m$ and can be calculated by one of the two formulas::
$S_m = m (a_1 + a_m) / 2$
$S_m = m (2a + (m - 1) d) / 2$

As in our case of consecutive integers $d = 1$, the formulas can be transformed to
$S_m = (a_1 + a_m)(a_m - a_1 + 1) / 2$

# Approach
The sum of all elements between $1$ and $x$ inclusively is $S_m = (a_1 + a_m)(a_m - a_1 + 1) / 2 = (x+1) \\cdot x\\ /\\ 2$
The sum of all elements between $x$ and $n$ inclusively is $S_m = (x + n)(n - x + 1) / 2$
Solving the following equation:
$(x+1) \\cdot x\\ /\\ 2 = (x + n)(n - x + 1) / 2 \\\\
(x+1) \\cdot x = (x + n)(n - x + 1) \\\\
x^2 + x = xn - x^2 + x + n^2 - xn + n \\\\
2 x^2 = n^2 + n \\\\
x^2 = n(n+1)/2$
we get
$x = \\sqrt{n(n+1)/2}$

If $x$ is an integer, then we found the answer. Otherwise, no such integer exists.

# Complexity
- Time complexity: $O(1)$
- Space complexity: $O(1)$

# Code
```
class Solution {
    func pivotInteger(_ n: Int) -> Int
    {
        let doubleX = Double(n*(n+1)/2).squareRoot()
        let x = Int(doubleX)
        if x*x == n*(n+1)/2 { return x }
        else { return -1 }
    }
}
```