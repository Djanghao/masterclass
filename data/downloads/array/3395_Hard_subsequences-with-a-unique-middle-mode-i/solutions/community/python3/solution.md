# [Python3] mostly math

**Author:** ye15
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/solutions/6194826/](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/solutions/6194826/)

---


```
class Solution:
    def subsequencesWithMiddleMode(self, nums: List[int]) -> int:
        n = len(nums)
        freq = Counter(nums)
        prefix = Counter()
        suffix = Counter()
        ans = pdiff = sdiff = 0 
        mod = 1_000_000_007 
        for i, x in enumerate(nums): 
            sdiff += i-suffix[x]
            suffix[x] += 1
        for i, x in enumerate(nums): 
            sdiff -= n-i-suffix[x]
            suffix[x] -= 1
            cand = 0 
            if prefix[x]: 
                for y, v in prefix.items(): 
                    if v and x != y: 
                        val = sdiff - suffix[x]*(n-1-i-suffix[x]) - suffix[y]*(n-1-i-suffix[y]) + suffix[x]*suffix[y]
                        cand += val * prefix[x] * v
            if suffix[x]: 
                for y, v in suffix.items(): 
                    if v and x != y: 
                        val = pdiff - prefix[x]*(i-prefix[x]) - prefix[y]*(i-prefix[y]) + prefix[x]*prefix[y]
                        cand += val * suffix[x] * v
            cand += comb(prefix[x], 2)*comb(n-1-i, 2) + prefix[x]*(i-prefix[x])*(comb(n-i-1, 2) - comb(n-i-1-suffix[x], 2)) + comb(i-prefix[x], 2)*comb(suffix[x], 2)
            ans = (ans + cand) % mod 
            pdiff += i-prefix[x]
            prefix[x] += 1
        return ans 
```