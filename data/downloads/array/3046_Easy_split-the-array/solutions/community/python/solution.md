# [Python3] 1 line solution using Counter || 33ms

**Author:** yourick
**Votes:** 18
**Link:** [https://leetcode.com/problems/split-the-array/solutions/4778918/](https://leetcode.com/problems/split-the-array/solutions/4778918/)

---

```python3 []
class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        return all(val <= 2 for val in Counter(nums).values())
```