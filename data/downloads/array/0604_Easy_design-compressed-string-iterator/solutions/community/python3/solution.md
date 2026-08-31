# Python3 non-regex (97.46%) & regex (99.49%) solution

**Author:** ye15
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/427838/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/427838/)

---

I feel that the difficulty of this problem should really be "medium" insteadm of "easy" as it is not so straightforward to get it right. 

The compressed string comprises letter followed by repetitions. So it is natural to treat this as a unit and progressively process such units in the string. 
```
class StringIterator:

    def __init__(self, compressedString: str):
        self.data = compressedString 
        self.char = None
        self.i = self.n = 0

    def next(self) -> str:
        if not self.hasNext(): return " "
        if not self.n: 
            self.char = self.data[self.i]
            self.i = ii = self.i+1
            while self.i < len(self.data) and self.data[self.i].isdigit(): self.i += 1
            self.n = int(self.data[ii:self.i])
        self.n -= 1
        return self.char 

    def hasNext(self) -> bool:
        return self.i < len(self.data) or self.n 
```
Alternatively, one could use regex to identify the two lists of letters and their repetitions as `self.letter = re.findall(r"\\D", compressedString)` and `self.number = re.findall(r"\\d+", compressedString)` (to be converted to integer). Then, one simply keeps track of where the current letter is by counting how many `next()` was called. 

```
import re
from itertools import accumulate 

class StringIterator:

    def __init__(self, compressedString: str):
        self.letter = re.findall(r"\\D", compressedString)
        self.number = [int(x) for x in re.findall(r"\\d+", compressedString)]
        self.i = self.n = 0
        
    def next(self) -> str:
        if not self.hasNext(): return " "
        if self.n >= self.number[self.i]:
            self.i += 1
            self.n = 1
        else: self.n += 1
        return self.letter[self.i]
        
    def hasNext(self) -> bool:
        return self.i < len(self.letter)-1 or self.n < self.number[-1]
```