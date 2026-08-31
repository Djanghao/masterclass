# [Python3] Greedy + sorting || 43ms / 16.48mb

**Author:** yourick
**Votes:** 5
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4852972/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4852972/)

---

```python3 []
class Solution:
    def minimumBoxes(self, apple: List[int], capacity: List[int]) -> int:
        volume = sum(apple)
        for i, boxCapacity in enumerate(sorted(capacity, reverse= True), start=1):
            volume -= boxCapacity
            if volume <= 0: break
        return i
```