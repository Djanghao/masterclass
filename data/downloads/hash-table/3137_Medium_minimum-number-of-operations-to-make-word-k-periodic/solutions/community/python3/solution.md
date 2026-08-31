# [Python] One-liner

**Author:** 4nd0
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5114413/](https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic/solutions/5114413/)

---

```python3
class Solution:
    def minimumOperationsToMakeKPeriodic(self, s: str, k: int) -> int:
        return (len(s) // k) - max(Counter(s[i : i + k] for i in range(0, len(s), k)).values())


```