# Python 3 || 5 lines,  iteration || T/S: 96% / 51%

**Author:** Spaulding_
**Votes:** 7
**Link:** [https://leetcode.com/problems/magical-string/solutions/2558509/](https://leetcode.com/problems/magical-string/solutions/2558509/)

---

```
class Solution:
    def magicalString(self, n: int) -> int:

        arr, i = [1,2,2], 2
   
        while len(arr) < n:
            arr.extend([arr[-1]^3]*arr[i])
            i += 1
    
        return arr[:n].count(1)
```

[https://leetcode.com/problems/magical-string/submissions/1270782330/](https://leetcode.com/problems/magical-string/submissions/1270782330/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `n`.