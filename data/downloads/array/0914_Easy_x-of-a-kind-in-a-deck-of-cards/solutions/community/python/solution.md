# Solution in Python 3 (beats ~99%) (one line)

**Author:** junaidmansuri
**Votes:** 19
**Link:** [https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/350904/](https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards/solutions/350904/)

---

```
from functools import reduce
from math import gcd
from collections import Counter

class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        return reduce(gcd,Counter(deck).values()) != 1
		
		
- Junaid Mansuri