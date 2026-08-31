# ✅[0ms][1LINER][100%][Fastest Solution Explained] O(n) time complexity | O(n) space complexity

**Author:** darian-catalin-cucer
**Votes:** 13
**Link:** [https://leetcode.com/problems/string-to-integer-atoi/solutions/2055039/](https://leetcode.com/problems/string-to-integer-atoi/solutions/2055039/)

---

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* *** Python ***

```

class Solution(object):
    def myAtoi(self, s):
        MIN, MAX = -2 ** 31, 2 ** 31 - 1
        n, empty, sign = 0, True, 1  # empty denotes we have not seen any number, sign is -1 or 1
        for c in s:
            if empty:
                if c == ' ': continue  # ignore the leading whitespace
                elif c == '-': sign = -1  # final answer is a negative number
                elif c.isdigit(): n = int(c)  # the first digit of number
                elif c != '+': return 0  # the first char is not a digit and not in (' ', '+', '-'), so s is invalid
                empty = False  # the first char is a digit or '+' or '-', valid number starts
            else:
                if c.isdigit():
                    n = n * 10 + int(c)
                    if sign * n > MAX: return MAX
                    elif sign * n < MIN: return MIN
                else: break   # end of valid number
        return sign * n  # sign is 1 or -1 
        

```

```
```

```
```
***"We are Anonymous. We are legion. We do not forgive. We do not forget. Expect us. Open your eyes.." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***