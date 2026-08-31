# One Liner

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3520728/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3520728/)

---

**Python 3**
```python
class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        return sum(max(col) for col in zip(*[sorted(row) for row in nums]))
```