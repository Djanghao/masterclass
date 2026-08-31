# [Python3] z-algo for prefix & suffix

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844653/](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/solutions/5844653/)

---

Please pull this [commit](https://github.com/gaosanyong/leetcode/commit/b9fe03c491aa04ce243646bccf4b5ccab15f2d53) for solutions of biweekly 140. 

```
def z_algo(s: str) -> List[int]: 
    """Z-algorithm
    Return lengths of substrings that are also prefix strings."""
    ans = [0] * len(s)
    lo = hi = ii = 0 
    for i in range(1, len(s)): 
        if i <= hi: ii = i - lo 
        if i + ans[ii] <= hi: ans[i] = ans[ii]
        else: 
            lo, hi = i, max(hi, i)
            while hi < len(s) and s[hi] == s[hi-lo]: hi += 1
            ans[i] = hi - lo 
            hi -= 1
    return ans 


class Solution:
    def minStartingIndex(self, s: str, pattern: str) -> int:
        n = len(s)
        k = len(pattern)
        prefix = z_algo(pattern + "#" + s)[k+1:]
        suffix = z_algo(pattern[::-1] + "#" + s[::-1])[k+1:][::-1]
        for i in range(n-k+1): 
            if prefix[i] + suffix[i+k-1] >= k-1: return i
        return -1
```