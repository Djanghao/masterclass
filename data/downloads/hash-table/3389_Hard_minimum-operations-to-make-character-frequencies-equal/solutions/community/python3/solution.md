# T: O(N), M: O(N)

**Author:** vladislav_zavadski
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/solutions/6149236/](https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/solutions/6149236/)

---

Iterating over all posibble amount of character occuring `c` . And check how many operations needed. 
Case 1: Symbol occurs `c` or `0` times, then do nothing, just switching to the next one
Case 2: Symbol occurs more than `c` times, then dicrease amount to `c` and pass deleted amount (`from_prev`) next (see Case 3).
Case 3: Symbol occurs less than `c` times, then we have 2 options:
1) Decrease occurance of this symbol to `0` 
2) Increase occurance to `c` by inserting characters and/or changing character (using `from_prev` variable)

```
class Solution:
    
    def __init__(self):
        self.alphabet = "abcdefghijklmnopqrstuvwxyz"
        
    def makeStringGood(self, s: str) -> int:
        count = Counter(s)
        
        def ops_amount(c):
            @cache
            def dp(i, from_prev):
                if i >= 26:
                    return 0

                if count[self.alphabet[i]] == c or count[self.alphabet[i]] == 0:
                    return dp(i + 1, 0)
                elif count[self.alphabet[i]] > c:
                    return dp(i + 1, count[self.alphabet[i]] - c) + count[self.alphabet[i]] - c
                else:
                    return min(dp(i + 1, count[self.alphabet[i]]) + count[self.alphabet[i]], dp(i + 1, 0) + c - count[self.alphabet[i]] - min(from_prev, c - count[self.alphabet[i]]))
            
            return dp(0,0)
        
        return min(ops_amount(c) for c in range(len(s) + 1))
```