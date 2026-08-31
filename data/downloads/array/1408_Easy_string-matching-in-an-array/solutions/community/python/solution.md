# Python One Liner, Improved | Pre-computed Merged Sentence

**Author:** Aragorn_
**Votes:** 25
**Link:** [https://leetcode.com/problems/string-matching-in-an-array/solutions/718656/](https://leetcode.com/problems/string-matching-in-an-array/solutions/718656/)

---

Pre-computed merged sentence (a) for faster iterations.
```
class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        a = " ".join(words)
        return [w for w in words if a.count(w)>1]
```