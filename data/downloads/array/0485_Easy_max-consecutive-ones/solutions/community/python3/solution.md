# Clever python solution

**Author:** mxmb
**Votes:** 42
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/1067437/](https://leetcode.com/problems/max-consecutive-ones/solutions/1067437/)

---

if `consecutive == 1`, `consecutive*n+n == consecutive+1`
if `consecutive == 0`, `consecutive*n+n = 0`.

```python
def findMaxConsecutiveOnes(self, nums: List[int]) -> int:
        consecutive = result = 0
        for n in nums:
            consecutive = consecutive*n+n
            result = max(result, consecutive)
        return result
```