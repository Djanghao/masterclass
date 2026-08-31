# Easy Python Solution 🐍 || O(N)

**Author:** Arpit_Patel_07
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168081/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/4168081/)

---

# Code
```
from typing import List

class Solution:
    def getWordsInLongestSubsequence(self, n: int, words: List[str], groups: List[int]) -> List[str]:
        c_g,sl=-1,[]
        for i in range(n):
            if groups[i]!=c_g:
                c_g=groups[i]
                sl.append(words[i])
        return sl
```
***Hope it helps...!!*** \uD83D\uDE07\u270C\uFE0F