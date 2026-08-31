# Python 3 ||| 4 lines, Reverse and accumulate  ||

**Author:** Spaulding_
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5492956/](https://leetcode.com/problems/maximum-array-hopping-score-ii/solutions/5492956/)

---

```
class Solution:
    def maxScore(self, nums: List[int], ans = 0, mx = 0) -> int:

        for num in reversed(nums[1:]):
            mx = max(mx, num)
            ans+= mx

        return ans
```