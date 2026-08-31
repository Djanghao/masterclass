# [Python3] dp

**Author:** ye15
**Votes:** 11
**Link:** [https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1042964/](https://leetcode.com/problems/palindrome-partitioning-iv/solutions/1042964/)

---

**Algo**
Define `fn(i, k)` to be `True` if `s[i:]` can be split into `k` palindromic substrings. Then, 

`fn(i, k) = any(fn(ii+1, k-1) where s[i:ii] == s[i:ii][::-1]`

Here we create a mapping to memoize all palindromic substrings starting from any given `i`. 

**Implementation**
```
class Solution:
    def checkPartitioning(self, s: str) -> bool:
        mp = {}
        for i in range(2*len(s)-1): 
            lo, hi = i//2, (i+1)//2
            while 0 <= lo <= hi < len(s) and s[lo] == s[hi]: 
                mp.setdefault(lo, set()).add(hi)
                lo -= 1
                hi += 1
        
        @lru_cache(None)
        def fn(i, k): 
            """Return True if s[i:] can be split into k palindromic substrings."""
            if k < 0: return False 
            if i == len(s): return k == 0
            return any(fn(ii+1, k-1) for ii in mp[i])
        
        return fn(0, 3)
```

**Analysis**
Time complexity `O(N^2)`
Space complexity `O(N^2)`

Edited on 2/1/2021
Adding an alternative implementation
```
class Solution:
    def checkPartitioning(self, s: str) -> bool:
        mp = defaultdict(set)
        for i in range(2*len(s)-1): 
            lo, hi = i//2, (i+1)//2
            while 0 <= lo <= hi < len(s) and s[lo] == s[hi]: 
                mp[lo].add(hi)
                lo, hi = lo-1, hi+1
        
        for i in range(len(s)):
            for j in range(i+1, len(s)):
                if i-1 in mp[0] and j-1 in mp[i] and len(s)-1 in mp[j]: return True
        return False 
```