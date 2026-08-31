# 90%, 7 Line, greedy

**Author:** YoonGyeom
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/4741783/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/4741783/)

---

# Code
```
class Solution:
    def minimumSplits(self, nums: List[int]) -> int:
        cnt = 0; cur = 1
        for num in nums:
            cur = math.gcd(cur, num)
            if cur == 1:
                cnt += 1
                cur = num
        return cnt
```