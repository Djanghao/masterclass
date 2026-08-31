# Accepted Python3: One-Liner using Counter from collections

**Author:** i-i
**Votes:** 17
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/453674/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/453674/)

---

```
from collections import Counter as c

class Solution:
    def uncommonFromSentences(self, A: str, B: str) -> List[str]:
        return [k for k, v in c(A.split() + B.split()).items() if v == 1]
```