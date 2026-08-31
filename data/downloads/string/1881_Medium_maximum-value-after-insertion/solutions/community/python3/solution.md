# Python 3   ||   12 lines,  w/examples   ||   T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/3454611/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/3454611/)

---

```
class Solution:
    def maxValue(self, n: str, x: int) -> str:
                                                #  Example: n = "673", x =  6
        x = str(x)                              #           n = "73", x = "6"  
        
        if n[0].isdigit():                      #  ch
            for ch in n:                        #  \u2013\u2013\u2013
                if ch < x:                      #  "6"
                    n = n.replace(ch,x+ch, 1)   #  "7"
                    return n                    #  "3"  \u2013\u2013> n = n.replace("3","63", 1)
                                                #             = "6763"
            return  n+x
                                                #  Example: n = "-13", x =  "4"
        for ch in n[1:]:                       
            if ch > x:                          #  ch
                n = n.replace(ch,x+ch, 1)       #  \u2013\u2013\u2013
                return n                        #  "1"
                                                #  "3"

        return  n+x                             #   \u2013\u2013> n + x = "-134"
```
[https://leetcode.com/problems/maximum-value-after-insertion/submissions/939608436/](https://leetcode.com/problems/maximum-value-after-insertion/submissions/939608436/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(n)`.
