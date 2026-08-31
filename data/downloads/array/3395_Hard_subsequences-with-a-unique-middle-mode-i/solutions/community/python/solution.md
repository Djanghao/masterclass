# [Python 3]Binary search + Combinations

**Author:** chestnut890123
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/solutions/6172320/](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/solutions/6172320/)

---

```
class Solution:
    def subsequencesWithMiddleMode(self, nums: List[int]) -> int:
        n, M = len(nums), 10 ** 9 + 7
        
        loc = defaultdict(list)
        for i, x in enumerate(nums):
            loc[x].append(i)
        
        ans = 0
        for i, x in enumerate(nums):
            cands = loc[x]
            
            l, r = bisect.bisect_left(cands, i), len(cands) - bisect.bisect(cands, i)
            
            # total 2 (left 1, right 1)
            ans = (ans + l * (i - l)  * math.comb(n - 1 - i - r, 2) + r * (n - 1 - i - r) * math.comb(i-l, 2)) % M
            # total 3 (left 1 + right 1, right 2, left 2)
            ans = (ans + l * (i - l) * r * (n - 1 - i - r) + math.comb(l, 2) * math.comb(n-1-i-r, 2) + math.comb(i-l, 2) * math.comb(r, 2)) % M
            # total 4 (left 1 + right 2, left 2 + right 1)
            ans = (ans + math.comb(l, 2) * r * (n-1-i-r) + l * (i - l) * math.comb(r, 2)) % M
            # total 5 (left 2 + right 2)
            ans = (ans + math.comb(l, 2) * math.comb(r, 2)) % M
            
            # need to reduce non unique mode when total 2
            for k, cands in loc.items():
                if k == x: continue
                l2, r2 = bisect.bisect_left(cands, i), len(cands) - bisect.bisect(cands, i)
                # non unique left 2, right 2, left 1 + right 1 (when the target mode in left or right)                
                ans = (ans - l * (i - l) * math.comb(r2, 2) - r * (n - 1 - i - r) * math.comb(l2, 2) - l * l2 * r2 * (n-1-i-r2-r) - r*r2*l2*(i-l-l2)) % M
            
        
        return ans