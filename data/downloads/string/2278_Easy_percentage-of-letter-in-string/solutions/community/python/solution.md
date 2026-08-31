# Python | One - Line Solution | Simple Counting

**Author:** arjuhooda
**Votes:** 10
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2061931/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/2061931/)

---

```
class Solution:
    def percentageLetter(self, s: str, letter: str) -> int:
        return (s.count(letter)*100)//len(s)
```