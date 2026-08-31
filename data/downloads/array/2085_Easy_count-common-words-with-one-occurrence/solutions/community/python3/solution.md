# [Python3] 2-line freq table

**Author:** ye15
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1598944/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/1598944/)

---

Downvoters, leave a comment! 

For solutions of biweekly 66, please check out this [commit](https://github.com/gaosanyong/leetcode/commit/2efa877859ad8f79f212b8ebde3edf5730d457ad)
```
class Solution:
    def countWords(self, words1: List[str], words2: List[str]) -> int:
        freq1, freq2 = Counter(words1), Counter(words2)
        return len({w for w, v in freq1.items() if v == 1} & {w for w, v in freq2.items() if v == 1}) 
```