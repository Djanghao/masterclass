# [Python] One-pass, prefix-sum, O(n)

**Author:** chuan-chih
**Votes:** 143
**Link:** [https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/685470/](https://leetcode.com/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/solutions/685470/)

---

Keep track of the running prefix-sum and the length of the shortest sub-array that sums to the target up to that point (`best_till` in my solution).
Each time we find another such sub-array, look up that length value at the index right before it starts.
```
class Solution:
    def minSumOfLengths(self, arr: List[int], target: int) -> int:
        prefix = {0: -1}
        best_till = [math.inf] * len(arr)
        ans = best = math.inf
        for i, curr in enumerate(itertools.accumulate(arr)):
            if curr - target in prefix:
                end = prefix[curr - target]
                if end > -1:
                    ans = min(ans, i - end + best_till[end])
                best = min(best, i - end)
            best_till[i] = best
            prefix[curr] = i
        return -1 if ans == math.inf else ans
```
In the contest I misread sub-array as subsequence so ran out of time \uD83D\uDE22