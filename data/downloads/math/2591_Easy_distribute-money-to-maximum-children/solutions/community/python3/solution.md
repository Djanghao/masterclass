# Python 3   ||   5 lines,  w/ explanation   ||   T/S: 99% / 92%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3313751/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/3313751/)

---

```
class Solution:
    def distMoney(self, money: int, children: int) -> int:

        if money < children: return -1          #   <-- More children than dollars

        n = 8 * children - money                #   <-- Enough dollars for all children 
                                                #       to get at least 8 dollars; one
        if n <= 0: return children - (n < 0)    #       child may get more than 8 dollars        
        
        ans, rem = divmod(money-children,7)     #   <-- Every child gets a dollar, then ans
                                                #       children get an additional 7 dollars 

        return ans - ((ans, rem) == (children - 1, 3))
                                                #   <-- Decrement the ans if only one child 
                                                #       gets less than 8 dollars and that 
                                                #       child gets exactly 4 dollars
```
[https://leetcode.com/problems/distribute-money-to-maximum-children/submissions/1294937440/](https://leetcode.com/problems/distribute-money-to-maximum-children/submissions/1294937440/)


I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).
