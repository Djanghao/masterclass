# Python 3 || Linear Transformations  || T/S: 99% / 97%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/5643593/](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/solutions/5643593/)

---


```
class Solution:
    def colorTheGrid(self, m: int, n: int, mod = 1_000_000_007) -> int:

        if m == 1:
            return 3*pow(2, n-1, mod) %mod

        if m == 2:
            return 2*pow(3, n, mod) %mod

        if m == 3:
            x0, x1 = 0, 3

            for _ in range(n):
                x0, x1 = ((3*x0 + 2*x1) %mod, 
                          (2*x0 + 2*x1) %mod)

            return (x0+x1) %mod   

        if m == 4:
            x0, x1, x2 = 0, 2, 2

            for _ in range(n):
                x0, x1, x2 = ((3*x0 + 2*x1 +   x2) %mod,
                              (4*x0 + 4*x1 + 2*x2) %mod,
                              (  x0 +   x1 + 2*x2) %mod)

            return (x0+ x1 + x2) %mod

        if m == 5:
            (x0, x1, x2, x3, x4, x5, x6, x7) = (0, 0, 0, 0, 3, 0, 3, 0)

            for _ in range(n):

                (x0, x1, x2, x3, x4, x5, x6, x7) = (

                    (3*x0 + 2*x1 + 2*x2 +   x3 +          x5 + 2*x6 + 2*x7) %mod,
                    (2*x0 + 2*x1 + 2*x2 +   x3 +   x4 +   x5 +   x6 +   x7) %mod,
                    (2*x0 + 2*x1 + 2*x2 +   x3 +          x5 + 2*x6 + 2*x7) %mod,
                    (1*x0 + 1*x1 + 1*x2 + 2*x3 +   x4 +   x5 +   x6 +   x7) %mod,
                    (     + 1*x1 +      +   x3 + 2*x4 +   x5 +          x7) %mod,
                    (1*x0 + 1*x1 + 1*x2 +   x3 +   x4 + 2*x5 +   x6 +   x7) %mod,
                    (2*x0 + 1*x1 + 2*x2 +   x3 +          x5 + 2*x6 +   x7) %mod,
                    (2*x0 + 1*x1 + 2*x2 +   x3 +   x4 +   x5 +   x6 + 2*x7) %mod )

            return (x0 + x1 + x2 + x3 + x4 + x5 + x6 + x7) %mod
```
https://leetcode.com/problems/painting-a-grid-with-three-different-colors/submissions/1357342872/

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `n`.



