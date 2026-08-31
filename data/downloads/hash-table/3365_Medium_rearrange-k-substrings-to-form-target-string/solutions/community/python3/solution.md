# Python3 || 11 lines, dict  || T/S: 99% / 95%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6083294/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/solutions/6083294/)

---


```python3 []
class Solution:
    def isPossibleToRearrange(self, s: str, t: str, k: int) -> bool:
        
        n = len(s)
        if k == 1 or k == n: return (s == t)|(k == n)

        m = n // k
        d = defaultdict(int)

        for i in range(0, n, m): 
            d[s[i: i + m]]+= 1

        for i in range(0, n, m):
            tt = t[i: i + m]
            d[tt]-= 1
            if d[tt] < 0: return False
            
        return True
```
[https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/submissions/1462811192/](https://leetcode.com/problems/rearrange-k-substrings-to-form-target-string/submissions/1462811192/)


I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(s)`.

