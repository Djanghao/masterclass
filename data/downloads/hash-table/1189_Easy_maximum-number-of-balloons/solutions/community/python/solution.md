# Runtime: 100% | Memory Usage: 100% | One-Line [Python3]

**Author:** deleted_user
**Votes:** 32
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/572807/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/572807/)

---

```
class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        return min(text.count('b'), text.count('a'), text.count('l') // 2, text.count('o') // 2, text.count('n'))
```