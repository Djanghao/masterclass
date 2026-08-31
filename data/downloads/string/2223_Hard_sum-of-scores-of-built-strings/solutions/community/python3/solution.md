# [Python3] rolling hash & z-algorithm

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/2256814/](https://leetcode.com/problems/sum-of-scores-of-built-strings/solutions/2256814/)

---

**Approach 1 - rolling hash**
```
class Solution:
    def sumScores(self, s: str) -> int:
        mod = 119_218_851_371
        hs = 0 
        vals = [0]
        for i, ch in enumerate(s): 
            hs = (hs * 26 + ord(ch) - 97) % mod
            vals.append(hs)
        
        p26 = [1]
        for _ in range(len(s)): p26.append(p26[-1] * 26 % mod)
        
        ans = 0 
        for i in range(len(s)): 
            if s[0] == s[i]: 
                lo, hi = i, len(s)
                while lo < hi: 
                    mid = lo + hi + 1 >> 1
                    hs = (vals[mid] - vals[i]*p26[mid-i]) % mod
                    if hs == vals[mid-i]: lo = mid
                    else: hi = mid - 1
                ans += lo - i 
        return ans 
```

**Approach 2 - Z-algorithm**
```
class Solution:
    def sumScores(self, s: str) -> int:
        ans = [0] * len(s)
        lo = hi = ii = 0 
        for i in range(1, len(s)): 
            if i <= hi: ii = i - lo 
            if i + ans[ii] <= hi: ans[i] = ans[ii]
            else: 
                lo, hi = i, max(hi, i)
                while hi < len(s) and s[hi] == s[hi - lo]: hi += 1
                ans[i] = hi - lo 
                hi -= 1
        return sum(ans) + len(s)
```