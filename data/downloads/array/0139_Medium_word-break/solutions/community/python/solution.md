# 4 lines in Python

**Author:** StefanPochmann
**Votes:** 330
**Link:** [https://leetcode.com/problems/word-break/solutions/43788/](https://leetcode.com/problems/word-break/solutions/43788/)

---

`ok[i]` tells whether `s[:i]` can be built.

    def wordBreak(self, s, words):
        ok = [True]
        for i in range(1, len(s)+1):
            ok += any(ok[j] and s[j:i] in words for j in range(i)),
        return ok[-1]