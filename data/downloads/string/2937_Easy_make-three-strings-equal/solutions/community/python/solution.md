# [Python3] Easy way using zip and similar prefix

**Author:** yourick
**Votes:** 5
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4306747/](https://leetcode.com/problems/make-three-strings-equal/solutions/4306747/)

---

```python3 []
class Solution:
    def findMinimumOperations(self, s1: str, s2: str, s3: str) -> int:
        size, l1, l2, l3 = 0, len(s1), len(s2), len(s3)

        for a, b, c in zip(s1, s2, s3):
            if a == b == c:
                size += 1
            else: break
        
        return (l1 + l2 + l3) - 3 * size if size > 0 else -1
```
![Screenshot 2023-11-19 at 19.58.18.png](./images/0.png)