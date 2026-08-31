# Clear Python 3 solution faster than 91% with explanation

**Author:** Swap24
**Votes:** 37
**Link:** [https://leetcode.com/problems/construct-k-palindrome-strings/solutions/809033/](https://leetcode.com/problems/construct-k-palindrome-strings/solutions/809033/)

---

```
from collections import Counter

class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        if k > len(s):
            return False
        h = Counter(s)
        countOdd = 0
        for value in h.values():
            if value % 2:
                countOdd += 1
        if countOdd > k:
            return False
        return True
```
The solution is based on the understanding that a string can be a palindrome only if it has **at most 1 character** whose frequency is odd. So if the number of characters having an odd frequency is greater than the number of palindromes we need to form, then naturally it's impossible to do so.