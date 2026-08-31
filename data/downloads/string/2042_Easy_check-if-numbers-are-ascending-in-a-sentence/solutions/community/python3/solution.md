# [Python3] 2-line

**Author:** ye15
**Votes:** 31
**Link:** [https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525219/](https://leetcode.com/problems/check-if-numbers-are-ascending-in-a-sentence/solutions/1525219/)

---


```
class Solution:
    def areNumbersAscending(self, s: str) -> bool:
        nums = [int(w) for w in s.split() if w.isdigit()]
        return all(nums[i-1] < nums[i] for i in range(1, len(nums)))
```