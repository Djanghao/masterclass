# Python recursive solution

**Author:** mxmb
**Votes:** 7
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/1402169/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/1402169/)

---

Use the variable isFinal to avoid adding numbers starting with "0" to the final solution.

```python
def findStrobogrammatic(self, n: int) -> List[str]:
        dict_ = {'1':'1','6':'9','8':'8','9':'6'}
        def recurse(n, isFinal):
            if n == 0:
                return ['']
            if n == 1:
                return ['0', '1', '8']
            prev = recurse(n-2, False)
            res = [d+c+dict_[d] for c in prev for d in dict_]
            if not isFinal:
                res.extend(['0'+c+'0' for c in prev])
            return res
        return recurse(n, True)
```