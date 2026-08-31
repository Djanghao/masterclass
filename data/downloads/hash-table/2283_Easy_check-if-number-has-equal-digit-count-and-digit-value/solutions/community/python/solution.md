# [Python 3] Using Counter fast solution + One-Liner

**Author:** deleted_user
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2083994/](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/solutions/2083994/)

---

Approach: Create a dict storing frequency of each number and then just compare the index with frequency.

```
from collections import Counter

class Solution:
    def digitCount(self, num: str) -> bool:
        d = Counter(num)
        for i in range(len(num)):
            if int(num[i])!=d.get(str(i), 0):
                return False
        return True
```

Two-Liner:

```

class Solution:
    def digitCount(self, num: str) -> bool:
        d = collections.Counter(num)
        return all([int(num[i])==d.get(str(i), 0) for i in range(len(num))])
```

One Liner (slight modification):

```

class Solution:
    def digitCount(self, num: str) -> bool:
        return all([int(num[i])==Counter(num)[f'{i}'] for i in range(len(num))])
```