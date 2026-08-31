# Python - clean and easy to understand [one line]

**Author:** szczerski
**Votes:** 12
**Link:** [https://leetcode.com/problems/find-and-replace-pattern/solutions/349438/](https://leetcode.com/problems/find-and-replace-pattern/solutions/349438/)

---

```
class Solution:
    def findAndReplacePattern(self, words: List[str], pattern: str) -> List[str]:
        return [word for word in words
                if len(word) == len(pattern) and
                len(set(word)) == len(set(pattern)) and
                len(set(zip(word, pattern))) == len(set(word))]
```