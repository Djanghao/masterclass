# ✅  Python Simple Solution

**Author:** constantine786
**Votes:** 21
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/2112018/](https://leetcode.com/problems/design-a-text-editor/solutions/2112018/)

---

The approach that I am using is string slicing. So that would end up with `O(n)` time for all the operations. The following implementation seems to pass without any TLE.  I will update this post once I find a more optimized solution.

```
class TextEditor:

    def __init__(self):
        self.s = ''
        self.cursor = 0

    def addText(self, text: str) -> None:
        self.s = self.s[:self.cursor] + text + self.s[self.cursor:]
        self.cursor += len(text)

    def deleteText(self, k: int) -> int:
        new_cursor = max(0, self.cursor - k)
        noOfChars = k if self.cursor - k >= 0 else self.cursor
        self.s = self.s[:new_cursor] + self.s[self.cursor:]
        self.cursor = new_cursor
        return noOfChars

    def cursorLeft(self, k: int) -> str:
        self.cursor = max(0, self.cursor - k)
        start = max(0, self.cursor-10)
        return self.s[start:self.cursor]

    def cursorRight(self, k: int) -> str:
        self.cursor = min(len(self.s), self.cursor + k)
        start = max(0, self.cursor - 10)
        return self.s[start:self.cursor]
```

**Time - O(n)** - for all operations
**Space - O(n)** - store the string


---


***Please upvote if you find it useful***