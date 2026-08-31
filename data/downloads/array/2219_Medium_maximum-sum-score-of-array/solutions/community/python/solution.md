# Python 3 | Prefix Sum | Explanation

**Author:** idontknoooo
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-sum-score-of-array/solutions/1906768/](https://leetcode.com/problems/maximum-sum-score-of-array/solutions/1906768/)

---

### Explanation
- Pretty straight forward prefix sum question
- At each each element, you will have 2 numbers
	- Prefix up to `i` - `prefix[i+1]`
	- The sum of the rest (`sum(num) - prefix[i+1]`) + current value (`num`)
- One pass for prefix sum and one pass for the actual calculation, total time `O(N)`
### Implementation
```
class Solution:
    def maximumSumScore(self, nums: List[int]) -> int:
        ans = -sys.maxsize
        prefix = [0]
        for num in nums:
            prefix.append(prefix[-1] + num)
        s = prefix[-1]    
        for i, num in enumerate(nums):
            cur = max(prefix[i+1], s-prefix[i+1]+num)
            ans = max(ans, cur)
        return ans
```