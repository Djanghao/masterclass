# Python | 1-liner simple solution

**Author:** LordVader1
**Votes:** 245
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/2675823/](https://leetcode.com/problems/richest-customer-wealth/solutions/2675823/)

---

```
class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        return max([sum(acc) for acc in accounts])
```