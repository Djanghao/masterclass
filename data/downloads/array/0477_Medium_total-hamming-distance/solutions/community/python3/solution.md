# Python 3 | Bit Manipulation O(N) | Explanations

**Author:** idontknoooo
**Votes:** 38
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/851194/](https://leetcode.com/problems/total-hamming-distance/solutions/851194/)

---

### Explanation
- For each bit, count how many numbers have 0 or 1 on that bit; the total difference on that bit is `zero * one`
	- `zero`: the amount of numbers which have `0` on bit `i`
	- `one`: the amount of numbers which have `1` on bit `i`
- Sum up each bit, then we got the answer
- Time Complexity: `O(32*N) -> O(N)`

### Implementation
```
class Solution:
    def totalHammingDistance(self, nums: List[int]) -> int:
        ans = 0
        for i in range(32):
            zero = one = 0
            mask = 1 << i
            for num in nums:
                if mask & num: one += 1
                else: zero += 1    
            ans += one * zero        
        return ans    
```