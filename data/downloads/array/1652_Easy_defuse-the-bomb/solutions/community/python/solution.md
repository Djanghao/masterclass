# [Python 3] Clean Sliding Window

**Author:** dpustovarov
**Votes:** 22
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/935478/](https://leetcode.com/problems/defuse-the-bomb/solutions/935478/)

---

```
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        if k < 0: return self.decrypt(code[::-1], -k)[::-1]
        
        n = len(code)
        ret = [0] * n
        s = sum(code[:k])
        for i, c in enumerate(code):
            s += code[(i + k) % n] - c
            ret[i] = s
            
        return ret
```

- for negative k: reverse params and result
- calculate sum of k element, then iteratively add new element and remove oldest one.
