# Python 3   ||   7 lines,  slices   ||   T/S: 90% / 99%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/2978884/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/solutions/2978884/)

---

```
class Solution:
    def minimumPartition(self, s: str, k: int) -> int:

        if k < 10: return len(s) if k >= int(max(s)) else -1
        
        k, ans = str(k), 0
        digits = len(k)

        while s:
            s = s[digits:] if s[:digits] <= k else s[digits-1:]
            ans+= 1

        return ans
```
[https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/submissions/868971639/](https://leetcode.com/problems/partition-string-into-substrings-with-values-at-most-k/submissions/868971639/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(s)`.