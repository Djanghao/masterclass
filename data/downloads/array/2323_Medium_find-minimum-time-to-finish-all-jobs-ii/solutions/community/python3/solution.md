# [Python3] 1-line

**Author:** ye15
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/2854703/](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs-ii/solutions/2854703/)

---


```
class Solution:
    def minimumTime(self, jobs: List[int], workers: List[int]) -> int:
        return max((j+w-1)//w for j, w in zip(sorted(jobs), sorted(workers)))
```