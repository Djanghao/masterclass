# Store X Positions

**Author:** votrubac
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5207469/](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/solutions/5207469/)

---

**Python**
```python
class Solution:
    def occurrencesOfElement(self, nums: List[int], queries: List[int], x: int) -> List[int]:
        pos = [i for i, n in enumerate(nums) if n == x]
        return [pos[q - 1] if q <= len(pos) else -1 for q in queries]
```