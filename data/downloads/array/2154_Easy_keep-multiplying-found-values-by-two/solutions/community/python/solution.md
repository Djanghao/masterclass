# Python3 simple using set

**Author:** mxmb
**Votes:** 12
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/1731752/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/1731752/)

---

Doesn't get much simpler than this

```python
def findFinalValue(self, nums: List[int], original: int) -> int:
        nums = set(nums)
        while original in nums:
            original *= 2
        return original
```