# One Liner

**Author:** votrubac
**Votes:** 13
**Link:** [https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3142451/](https://leetcode.com/problems/separate-the-digits-in-an-array/solutions/3142451/)

---

**Python 3**
```python
class Solution:
    def separateDigits(self, nums: List[int]) -> List[int]:
        return [int(d) for n in nums for d in str(n)]
```