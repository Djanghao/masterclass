# Hashset

**Author:** votrubac
**Votes:** 12
**Link:** [https://leetcode.com/problems/report-spam-message/solutions/5818299/](https://leetcode.com/problems/report-spam-message/solutions/5818299/)

---

**Python**
```python
class Solution:
    def reportSpam(self, message: List[str], bannedWords: List[str]) -> bool:
        s = set(bannedWords)
        return sum(m in s for m in message) > 1
```