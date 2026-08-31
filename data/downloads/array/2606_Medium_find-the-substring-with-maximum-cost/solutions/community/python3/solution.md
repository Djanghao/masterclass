# Python 3   ||   3 lines,  w/ example   ||   T/S: 57% / 35%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3371254/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/solutions/3371254/)

---

```
class Solution:
    def maximumCostSubstring(self, s: str, chars: str, vals: List[int])-> int:
                                                            # Example: s = "adcnc"
                                                            #      chars = "dn" 
                                                            #       vals = [-10,-2]
        d = {ch:ord(ch)-96 for ch in s} 
                                                            # d = {'a':1,'d':  4,'c':3,'n':14} 
        for ch,val in zip(chars,vals): d[ch] = val          # d = {'a':1,'d':-10,'c':3,'n':-2}
                                                            #       
                                                            # [d[ch] for ch in s] = [1,-10,3,-2,3]
    
        return max(accumulate([d[ch] for ch in s],          # <-- max([0,1,0,3,1,4])
                 lambda x, y: max(x+y, 0), initial = 0))    #                    |
                                                            #                  return
```
[https://leetcode.com/problems/find-the-substring-with-maximum-cost/submissions/1295891885/](https://leetcode.com/problems/find-the-substring-with-maximum-cost/submissions/1295891885/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.