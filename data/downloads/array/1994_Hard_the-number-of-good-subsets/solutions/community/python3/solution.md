# [Python3] dp

**Author:** ye15
**Votes:** 3
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/1444318/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/1444318/)

---


Please check out this [commit](https://github.com/gaosanyong/leetcode/commit/471dd5133055b331710ed3828849586ce1796b1a) for solutions of biweekly 60.
```
class Solution:
    def numberOfGoodSubsets(self, nums: List[int]) -> int:
        freq = [0] * 31
        for x in nums: freq[x] += 1
        
        masks = [0] * 31
        for x in range(1, 31): 
            if x == 1: masks[x] = 0b10
            else: 
                bits = 0
                xx = x
                for k in (2, 3, 5, 7, 11, 13, 17, 19, 23, 29): 
                    while xx % k == 0: 
                        if (bits >> k) & 1: break # repeated factors 
                        bits ^= 1 << k
                        xx //= k
                    else: continue 
                    break 
                else: masks[x] = bits
                    
        @cache
        def fn(x, m): 
            """Return number of good subsets."""
            if x == 31: return int(m > 2)
            ans = fn(x+1, m)
            if freq[x] and masks[x]: 
                if x == 1: ans *= 2**freq[x]
                elif not m & masks[x]: ans += freq[x] * fn(x+1, m | masks[x])
            return ans % 1_000_000_007
        
        return fn(1, 0)
```