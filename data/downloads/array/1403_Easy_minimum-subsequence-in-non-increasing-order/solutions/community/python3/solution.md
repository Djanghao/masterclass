# Python3 simple solution

**Author:** EklavyaJoshi
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/1041468/](https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order/solutions/1041468/)

---

```
class Solution:
    def minSubsequence(self, nums: List[int]) -> List[int]:
        nums.sort()
        l = []
        while sum(l) <= sum(nums):
            l.append(nums.pop())
        return l
```
If you like the solution, please vote for this.