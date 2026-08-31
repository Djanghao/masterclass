# Python3 hashmap faster than 98.63%

**Author:** zetinator
**Votes:** 3
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/921198/](https://leetcode.com/problems/strobogrammatic-number/solutions/921198/)

---

*Runtime: 20 ms, faster than 98.63% of Python3 online submissions for Strobogrammatic Number.
Memory Usage: 14.2 MB, less than 100.00% of Python3 online submissions for Strobogrammatic Number.*


```python
class Solution:
    def isStrobogrammatic(self, num: str) -> bool:
        if not num: return False
        # define strobogrammatic relations
        pr = {
            "8": "8",
            "9": "6",
            "6": "9",
            "1": "1",
            "0": "0",
        }
        # invert and check if it matches the equivalences from above
        for i in range(len(num)//2+1):
            if num[i] not in pr or num[~i] != pr[num[i]]:
                return False
        return True
```