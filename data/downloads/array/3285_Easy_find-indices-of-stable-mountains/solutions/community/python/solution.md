# One-Liner

**Author:** votrubac
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5787314/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5787314/)

---

**Python**
```python
class Solution:
    def stableMountains(self, h: List[int], t: int) -> List[int]:
        return [i for i in range(1, len(h)) if h[i - 1] > t]
```