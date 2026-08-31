# Python one-liner

**Author:** lokeshsk1
**Votes:** 126
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/961441/](https://leetcode.com/problems/goal-parser-interpretation/solutions/961441/)

---

```
class Solution:
    def interpret(self, command: str) -> str:
        return command.replace('()','o').replace('(al)','al')
```