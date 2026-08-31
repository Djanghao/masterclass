# Easy if-else solution O(n)

**Author:** vanigupta20024
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/923434/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/923434/)

---

```
class Solution:
    def numberOfLines(self, widths: List[int], S: str) -> List[int]:
        lines = width = 0
        
        for i in S:
            x = widths[ord(i) - ord('a')]
            if width + x == 100:
                lines += 1
                width = 0
            elif width + x > 100:
                lines += 1
                width = x
            else:
                width += x
        if width != 0:
            lines += 1
        return [lines, width]
```
For more such questions:https://github.com/vanigupta20024/Programming-Challenges