# Fast Python O(n) using set

**Author:** oniontou
**Votes:** 14
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2187905/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/2187905/)

---

The main idea is to enumerate a char (in both its upper and lower cases) from 'z' to 'a', and "probe"  if they exist in the input string. Also implement an early return. 
```
class Solution:
    def greatestLetter(self, s: str) -> str:
        s = set(s)
        upper, lower = ord('Z'), ord('z')
        for i in range(26):
            if chr(upper - i) in s and chr(lower - i) in s:
                return chr(upper - i)
        return ''
```