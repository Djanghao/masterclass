# Clean O(n) time and O(1) space solution in Python

**Author:** GMustion35
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3859133/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3859133/)

---

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```
class Solution:
    def minimumCosts(self, regular: List[int], express: List[int], expressCost: int) -> List[int]:
        min_reg = 0
        min_exp = expressCost
        res = []

        for i in range(len(regular)):
            min_reg = min(min_reg + regular[i], min_exp + express[i])
            min_exp = min(min_reg + expressCost, min_exp + express[i])
            res.append(min(min_reg, min_exp))

        return res

```