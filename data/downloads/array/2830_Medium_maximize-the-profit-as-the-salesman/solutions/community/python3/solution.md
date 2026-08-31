# Python 3   ||   5 lines,  dp   ||   T/S: 41% / 73%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3943129/](https://leetcode.com/problems/maximize-the-profit-as-the-salesman/solutions/3943129/)

---

Pretty much isomorphic to LC1235.

[https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2849116/python-3-5-lines-w-example-t-m-90-47/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/2849116/python-3-5-lines-w-example-t-m-90-47/) 
```
class Solution:
    def maximizeTheProfit(self, n: int, offers: List[List[int]]) -> int:

        dp = [[0,0]]           
                                                         
        f = lambda x: dp[bisect_left(dp,[x+1])-1][1] 
                                                  
        for s, e, p in sorted(offers, key = lambda x: x[1]):

            dp.append([e+1, max(f(e+1),f(s)+p)])
                                                                 
        return dp[-1][1]
```
[https://leetcode.com/problems/maximize-the-profit-as-the-salesman/submissions/1026972765/](http://)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(*N*), in which *N* ~ `len(offers)`.