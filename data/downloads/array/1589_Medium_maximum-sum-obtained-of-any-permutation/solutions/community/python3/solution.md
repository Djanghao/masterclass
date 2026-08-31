# Python3 zip reversely sorted nums and counts - Maximum Sum Obtained of Any Permutation

**Author:** r0bertz
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/884152/](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation/solutions/884152/)

---

```
class Solution:
    def maxSumRangeQuery(self, nums: List[int], requests: List[List[int]]) -> int:
        count = [0] * len(nums)
        for i, j in requests:
            count[i] += 1
            if j + 1 < len(count):
                count[j+1] -= 1
        cur = 0
        for i in range(len(count)):
            count[i] += cur
            cur = count[i]
        return sum(n * c for n, c in zip(sorted(nums, reverse=True), sorted(count, reverse=True))) % (10 ** 9 + 7)
```