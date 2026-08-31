# Python Understandable Solution (unlike description) with Explanation

**Author:** alexl5311
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-lines-to-write-string/solutions/2033554/](https://leetcode.com/problems/number-of-lines-to-write-string/solutions/2033554/)

---

**Explanation**
We loop through each character in `s`, and each time we see what width it is. If the final width is above 100, then we make a new line. We return the number of lines and the final width.

```
class Solution(object):
    def numberOfLines(self, widths, s):
        """
        :type widths: List[int]
        :type s: str
        :rtype: List[int]
        """
        lines = 1
        width = 0
        for char in s:
            w = widths[ord(char) - ord('a')]
            width += w
            if width > 100:
                lines += 1
                width = w
        return [lines, width]
```

**If you liked this, please upvote to support me!**