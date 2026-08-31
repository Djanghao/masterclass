# Python3 simple one liner

**Author:** mxmb
**Votes:** 15
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/2651488/](https://leetcode.com/problems/number-of-common-factors/solutions/2651488/)

---

```python
def commonFactors(self, a: int, b: int) -> int:
        return sum(not(a%i or b%i) for i in range(1,min(a,b)+1))
```