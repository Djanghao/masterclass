# Python 3 || 6 lines,  strings || T/S: 89% / 63%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5019748/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/5019748/)

---


```
class Solution:
    def findLatestTime(self, s: str) -> str:
        
        hr0, hr1, _ , mn0, mn1 = list(s)

        if hr0 == '?': hr0 = '1' if hr1 in '?01' else '0'
        if hr1 == '?': hr1 = '9' if hr0 == '0' else '1'
       
        if mn0 == '?': mn0 = '5'
        if mn1 == '?': mn1 = '9'    
          
        return hr0 + hr1 + ':' + mn0 + mn1
```
[https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/submissions/1231860290/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/submissions/1231860290/) 

I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).