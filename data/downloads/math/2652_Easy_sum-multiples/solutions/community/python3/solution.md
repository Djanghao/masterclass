# Python 3   ||   2 lines,  Just draw a Venn diagram   ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 23
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3446231/](https://leetcode.com/problems/sum-multiples/solutions/3446231/)

---

You get to draw the Venn Diagram.

"*The secret of being a bore is to tell everything.*"  --Voltaire
```
cclass Solution:
    def sumOfMultiples(self, n: int) -> int:

        a, b, c, d, e, f, g = n//3, n//5, n//7, n//15, n//21, n//35, n//105

        return (
                  3*a*(a+1)     #
                + 5*b*(b+1)     # <-- three venn circles
                + 7*c*(c+1)     # 

                - 15*d*(d+1)    #
                - 21*e*(e+1)    # <-- three venn lunes
                - 35*f*(f+1)    #
            
                + 105*g*(g+1)   # <-- one venn circular triangle 
               )//2
```
[https://leetcode.com/problems/sum-multiples/submissions/938741834/](https://leetcode.com/problems/sum-multiples/submissions/938741834/)

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).